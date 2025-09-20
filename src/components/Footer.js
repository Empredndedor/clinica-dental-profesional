export class Footer {
  render() {
    const currentYear = new Date().getFullYear();
    
    return `
      <footer class="bg-gray-900 text-white mt-auto" role="contentinfo">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
            <!-- Información de la clínica -->
            <div class="col-span-1 md:col-span-2">
              <div class="flex items-center space-x-2 mb-4">
                <span class="text-2xl">🦷</span>
                <h3 class="text-xl font-bold text-white">Clínica Dental Pro</h3>
              </div>
              <p class="text-gray-300 mb-4 max-w-md">
                Brindamos servicios dentales de alta calidad con tecnología de vanguardia 
                y un equipo de profesionales comprometidos con tu salud bucal.
              </p>
              <div class="flex space-x-4">
                <a href="#" class="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M20 10C20 4.477 15.523 0 10 0S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clip-rule="evenodd"></path>
                  </svg>
                </a>
                <a href="#" class="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clip-rule="evenodd"></path>
                  </svg>
                </a>
                <a href="#" class="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
              </div>
            </div>

            <!-- Enlaces rápidos -->
            <div>
              <h4 class="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
              <ul class="space-y-2">
                <li><a href="#/inicio" class="text-gray-300 hover:text-white transition-colors">Inicio</a></li>
                <li><a href="#/servicios" class="text-gray-300 hover:text-white transition-colors">Servicios</a></li>
                <li><a href="#/citas" class="text-gray-300 hover:text-white transition-colors">Agendar Cita</a></li>
                <li><a href="#/contacto" class="text-gray-300 hover:text-white transition-colors">Contacto</a></li>
              </ul>
            </div>

            <!-- Información de contacto -->
            <div>
              <h4 class="text-lg font-semibold mb-4">Contacto</h4>
              <div class="space-y-2 text-gray-300">
                <div class="flex items-center space-x-2">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <span>Av. Principal 123, Ciudad</span>
                </div>
                <div class="flex items-center space-x-2">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  <span>+1 (555) 123-4567</span>
                </div>
                <div class="flex items-center space-x-2">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  <span>info@clinicadentalpro.com</span>
                </div>
                <div class="mt-4">
                  <h5 class="font-medium mb-2">Horarios de Atención</h5>
                  <p class="text-sm">Lun - Vie: 8:00 AM - 6:00 PM</p>
                  <p class="text-sm">Sáb: 9:00 AM - 2:00 PM</p>
                  <p class="text-sm">Dom: Cerrado</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Línea divisoria -->
          <div class="border-t border-gray-700 mt-8 pt-8">
            <div class="flex flex-col md:flex-row justify-between items-center">
              <p class="text-gray-400 text-sm">
                © ${currentYear} Clínica Dental Pro. Todos los derechos reservados.
              </p>
              <div class="flex space-x-6 mt-4 md:mt-0">
                <a href="#" class="text-gray-400 hover:text-white text-sm transition-colors">Política de Privacidad</a>
                <a href="#" class="text-gray-400 hover:text-white text-sm transition-colors">Términos de Servicio</a>
                <a href="#" class="text-gray-400 hover:text-white text-sm transition-colors">Cookies</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    `;
  }
}
