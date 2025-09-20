import { router } from '../router/router.js';

export class Navbar {
  constructor() {
    this.isMobileMenuOpen = false;
    this.setupEventListeners();
  }

  setupEventListeners() {
    document.addEventListener('click', (e) => {
      if (e.target.matches('[data-mobile-menu-toggle]')) {
        this.toggleMobileMenu();
      }
      if (e.target.matches('[data-mobile-menu-close]')) {
        this.closeMobileMenu();
      }
    });
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    this.updateMobileMenu();
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
    this.updateMobileMenu();
  }

  updateMobileMenu() {
    const mobileMenu = document.querySelector('[data-mobile-menu]');
    const menuIcon = document.querySelector('[data-menu-icon]');
    const closeIcon = document.querySelector('[data-close-icon]');
    
    if (mobileMenu) {
      if (this.isMobileMenuOpen) {
        mobileMenu.classList.remove('hidden');
        mobileMenu.classList.add('animate-fade-in');
        menuIcon?.classList.add('hidden');
        closeIcon?.classList.remove('hidden');
      } else {
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('animate-fade-in');
        menuIcon?.classList.remove('hidden');
        closeIcon?.classList.add('hidden');
      }
    }
  }

  render() {
    const currentRoute = router.getCurrentRoute();
    const navItems = [
      { path: '/inicio', label: 'Inicio', icon: '🏠' },
      { path: '/servicios', label: 'Servicios', icon: '🦷' },
      { path: '/citas', label: 'Agendar Cita', icon: '📅' },
      { path: '/contacto', label: 'Contacto', icon: '📞' }
    ];

    return `
      <nav class="bg-white shadow-lg border-b border-gray-200 sticky top-0 z-40" role="navigation" aria-label="Navegación principal">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between items-center h-16">
            <!-- Logo y marca -->
            <div class="flex items-center">
              <a href="#/inicio" class="flex items-center space-x-2 text-xl font-bold text-primary-700 hover:text-primary-800 transition-colors">
                <span class="text-2xl">🦷</span>
                <span class="hidden sm:block">Clínica Dental Pro</span>
                <span class="sm:hidden">CDP</span>
              </a>
            </div>

            <!-- Navegación desktop -->
            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline space-x-4">
                ${navItems.map(item => `
                  <a href="#${item.path}" 
                     class="navbar-link ${currentRoute === item.path ? 'active' : ''}"
                     aria-current="${currentRoute === item.path ? 'page' : 'false'}">
                    <span class="mr-1">${item.icon}</span>
                    ${item.label}
                  </a>
                `).join('')}
              </div>
            </div>

            <!-- Botón menú móvil -->
            <div class="md:hidden">
              <button type="button" 
                      class="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 transition-colors"
                      data-mobile-menu-toggle
                      aria-controls="mobile-menu"
                      aria-expanded="false">
                <span class="sr-only">Abrir menú principal</span>
                <!-- Icono hamburguesa -->
                <svg data-menu-icon class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <!-- Icono X -->
                <svg data-close-icon class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Menú móvil -->
        <div class="md:hidden hidden" data-mobile-menu id="mobile-menu">
          <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200 shadow-lg">
            ${navItems.map(item => `
              <a href="#${item.path}" 
                 class="block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                   currentRoute === item.path 
                     ? 'text-primary-600 bg-primary-50 border-l-4 border-primary-600' 
                     : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                 }"
                 data-mobile-menu-close
                 aria-current="${currentRoute === item.path ? 'page' : 'false'}">
                <span class="mr-2">${item.icon}</span>
                ${item.label}
              </a>
            `).join('')}
          </div>
        </div>
      </nav>
    `;
  }
}
