export class ServiciosPage {
  constructor() {
    this.services = [
      {
        id: 1,
        name: "Limpieza Dental Profesional",
        category: "preventivo",
        price: "$80",
        duration: "45 min",
        description: "Eliminación completa de placa bacteriana y sarro para mantener una sonrisa saludable.",
        icon: "🦷",
        features: ["Eliminación de sarro", "Pulido dental", "Fluorización", "Revisión completa"]
      },
      {
        id: 2,
        name: "Blanqueamiento Dental",
        category: "estetico",
        price: "$250",
        duration: "90 min",
        description: "Recupera el brillo natural de tus dientes con nuestro tratamiento de blanqueamiento seguro.",
        icon: "✨",
        features: ["Blanqueamiento LED", "Gel profesional", "Protección de encías", "Resultados inmediatos"]
      },
      {
        id: 3,
        name: "Ortodoncia Invisible",
        category: "ortodontico",
        price: "$2,500",
        duration: "12-18 meses",
        description: "Corrige la posición de tus dientes de manera discreta con alineadores transparentes.",
        icon: "🔧",
        features: ["Alineadores removibles", "Tecnología 3D", "Seguimiento digital", "Resultados predecibles"]
      },
      {
        id: 4,
        name: "Implantes Dentales",
        category: "restaurativo",
        price: "$1,200",
        duration: "3-6 meses",
        description: "Reemplaza dientes perdidos con implantes de titanio de alta calidad.",
        icon: "🔩",
        features: ["Titanio biocompatible", "Cirugía guiada", "Corona personalizada", "Garantía de por vida"]
      },
      {
        id: 5,
        name: "Endodoncia",
        category: "restaurativo",
        price: "$400",
        duration: "60-90 min",
        description: "Tratamiento de conducto para salvar dientes con infecciones en la raíz.",
        icon: "🩺",
        features: ["Anestesia local", "Tecnología rotativa", "Sellado hermético", "Seguimiento post-operatorio"]
      },
      {
        id: 6,
        name: "Carillas de Porcelana",
        category: "estetico",
        price: "$800",
        duration: "2 sesiones",
        description: "Transforma tu sonrisa con carillas de porcelana ultra delgadas y naturales.",
        icon: "💎",
        features: ["Porcelana premium", "Diseño personalizado", "Mínima preparación", "Resultado natural"]
      }
    ];
    
    this.filteredServices = [...this.services];
    this.currentFilter = 'todos';
    this.searchTerm = '';
  }

  render() {
    const app = document.getElementById('app');
    const mainContent = app.querySelector('#main-content');
    
    mainContent.innerHTML = `
      <div class="page-transition">
        <!-- Header Section -->
        <section class="bg-gradient-to-r from-primary-600 to-dental-600 py-16 text-white">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 class="text-4xl md:text-5xl font-bold mb-4">Nuestros Servicios</h1>
            <p class="text-xl text-primary-100 max-w-3xl mx-auto">
              Ofrecemos una amplia gama de tratamientos dentales con tecnología de vanguardia 
              y los más altos estándares de calidad.
            </p>
          </div>
        </section>

        <!-- Filtros y Búsqueda -->
        <section class="py-8 bg-white border-b border-gray-200">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col lg:flex-row gap-6 items-center justify-between">
              <!-- Buscador -->
              <div class="relative flex-1 max-w-md">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </div>
                <input type="text" 
                       id="service-search" 
                       class="input-field pl-10" 
                       placeholder="Buscar servicios..."
                       value="${this.searchTerm}">
              </div>
              
              <!-- Filtros por categoría -->
              <div class="flex flex-wrap gap-2">
                <button class="filter-btn ${this.currentFilter === 'todos' ? 'active' : ''}" data-filter="todos">
                  Todos
                </button>
                <button class="filter-btn ${this.currentFilter === 'preventivo' ? 'active' : ''}" data-filter="preventivo">
                  🛡️ Preventivo
                </button>
                <button class="filter-btn ${this.currentFilter === 'estetico' ? 'active' : ''}" data-filter="estetico">
                  ✨ Estético
                </button>
                <button class="filter-btn ${this.currentFilter === 'ortodontico' ? 'active' : ''}" data-filter="ortodontico">
                  🔧 Ortodóntico
                </button>
                <button class="filter-btn ${this.currentFilter === 'restaurativo' ? 'active' : ''}" data-filter="restaurativo">
                  🔨 Restaurativo
                </button>
              </div>
            </div>
          </div>
        </section>

        <!-- Grid de Servicios -->
        <section class="py-16 bg-gray-50">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div id="services-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              ${this.renderServices()}
            </div>
            
            <div id="no-results" class="text-center py-16 ${this.filteredServices.length > 0 ? 'hidden' : ''}">
              <div class="text-6xl mb-4">🔍</div>
              <h3 class="text-2xl font-bold text-gray-900 mb-2">No se encontraron servicios</h3>
              <p class="text-gray-600">Intenta con otros términos de búsqueda o filtros.</p>
            </div>
          </div>
        </section>

        <!-- CTA Section -->
        <section class="py-16 bg-primary-600 text-white">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-3xl font-bold mb-4">¿Necesitas más información?</h2>
            <p class="text-xl text-primary-100 mb-8">
              Nuestro equipo está listo para ayudarte a elegir el mejor tratamiento para ti.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#/citas" class="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
                📅 Agendar Consulta
              </a>
              <a href="#/contacto" class="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
                📞 Contactar Ahora
              </a>
            </div>
          </div>
        </section>
      </div>
    `;
    
    this.setupEventListeners();
  }

  renderServices() {
    return this.filteredServices.map(service => `
      <div class="card group hover:scale-105 transition-all duration-300 animate-fade-in">
        <div class="p-6">
          <div class="flex items-center justify-between mb-4">
            <div class="text-4xl group-hover:scale-110 transition-transform duration-300">${service.icon}</div>
            <div class="text-right">
              <div class="text-2xl font-bold text-primary-600">${service.price}</div>
              <div class="text-sm text-gray-500">${service.duration}</div>
            </div>
          </div>
          
          <h3 class="text-xl font-bold text-gray-900 mb-3">${service.name}</h3>
          <p class="text-gray-600 mb-4">${service.description}</p>
          
          <div class="mb-6">
            <h4 class="font-semibold text-gray-900 mb-2">Incluye:</h4>
            <ul class="space-y-1">
              ${service.features.map(feature => `
                <li class="flex items-center text-sm text-gray-600">
                  <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                  ${feature}
                </li>
              `).join('')}
            </ul>
          </div>
          
          <div class="flex gap-2">
            <button class="btn-primary flex-1" onclick="this.openServiceModal(${service.id})">
              Ver Detalles
            </button>
            <a href="#/citas" class="btn-secondary flex-1 text-center">
              Agendar
            </a>
          </div>
        </div>
      </div>
    `).join('');
  }

  setupEventListeners() {
    // Búsqueda
    const searchInput = document.getElementById('service-search');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.searchTerm = e.target.value.toLowerCase();
        this.filterServices();
      });
    }

    // Filtros
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        this.currentFilter = e.target.dataset.filter;
        this.updateFilterButtons();
        this.filterServices();
      });
    });
  }

  filterServices() {
    this.filteredServices = this.services.filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(this.searchTerm) ||
                           service.description.toLowerCase().includes(this.searchTerm);
      const matchesFilter = this.currentFilter === 'todos' || service.category === this.currentFilter;
      
      return matchesSearch && matchesFilter;
    });

    this.updateServicesGrid();
  }

  updateFilterButtons() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
      if (btn.dataset.filter === this.currentFilter) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  updateServicesGrid() {
    const servicesGrid = document.getElementById('services-grid');
    const noResults = document.getElementById('no-results');
    
    if (servicesGrid) {
      servicesGrid.innerHTML = this.renderServices();
    }
    
    if (noResults) {
      if (this.filteredServices.length === 0) {
        noResults.classList.remove('hidden');
      } else {
        noResults.classList.add('hidden');
      }
    }
  }

  openServiceModal(serviceId) {
    const service = this.services.find(s => s.id === serviceId);
    if (!service) return;

    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
      <div class="modal-content p-6">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-2xl font-bold text-gray-900">${service.name}</h2>
          <button class="text-gray-400 hover:text-gray-600" onclick="this.closeModal()">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        
        <div class="text-center mb-6">
          <div class="text-6xl mb-4">${service.icon}</div>
          <div class="text-3xl font-bold text-primary-600 mb-2">${service.price}</div>
          <div class="text-gray-600">Duración: ${service.duration}</div>
        </div>
        
        <p class="text-gray-700 mb-6">${service.description}</p>
        
        <div class="mb-6">
          <h3 class="font-bold text-gray-900 mb-3">Este tratamiento incluye:</h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
            ${service.features.map(feature => `
              <div class="flex items-center">
                <svg class="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-gray-700">${feature}</span>
              </div>
            `).join('')}
          </div>
        </div>
        
        <div class="flex gap-4">
          <a href="#/citas" class="btn-primary flex-1 text-center">
            📅 Agendar Cita
          </a>
          <button class="btn-secondary flex-1" onclick="this.closeModal()">
            Cerrar
          </button>
        </div>
      </div>
    `;

    document.body.appendChild(modal);
    
    // Close modal on overlay click
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        this.closeModal();
      }
    });
  }

  closeModal() {
    const modal = document.querySelector('.modal-overlay');
    if (modal) {
      modal.remove();
    }
  }

  destroy() {
    this.closeModal();
  }
}

// Add CSS for filter buttons
const style = document.createElement('style');
style.textContent = `
  .filter-btn {
    @apply px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors duration-200 font-medium;
  }
  .filter-btn.active {
    @apply bg-primary-600 text-white border-primary-600 hover:bg-primary-700;
  }
`;
document.head.appendChild(style);
