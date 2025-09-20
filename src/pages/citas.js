import { apiService } from '../services/ApiService.js';

export class CitasPage {
  constructor() {
    this.services = [
      { id: 1, name: "Limpieza Dental Profesional", duration: "45 min", price: "$80" },
      { id: 2, name: "Blanqueamiento Dental", duration: "90 min", price: "$250" },
      { id: 3, name: "Ortodoncia Invisible", duration: "60 min", price: "$2,500" },
      { id: 4, name: "Implantes Dentales", duration: "120 min", price: "$1,200" },
      { id: 5, name: "Endodoncia", duration: "90 min", price: "$400" },
      { id: 6, name: "Carillas de Porcelana", duration: "120 min", price: "$800" }
    ];
    
    this.formData = {
      nombre: '',
      email: '',
      telefono: '',
      servicio: '',
      fecha: '',
      hora: '',
      mensaje: ''
    };
    
    this.errors = {};
    this.availableHours = [
      '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
      '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00'
    ];
  }

  render() {
    const app = document.getElementById('app');
    const mainContent = app.querySelector('#main-content');
    
    mainContent.innerHTML = `
      <div class="page-transition">
        <!-- Header Section -->
        <section class="bg-gradient-to-r from-primary-600 to-dental-600 py-16 text-white">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 class="text-4xl md:text-5xl font-bold mb-4">Agendar Cita</h1>
            <p class="text-xl text-primary-100 max-w-3xl mx-auto">
              Reserva tu cita de manera fácil y rápida. Nuestro equipo te contactará para confirmar tu cita.
            </p>
          </div>
        </section>

        <!-- Formulario de Citas -->
        <section class="py-16 bg-gray-50">
          <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div class="grid grid-cols-1 lg:grid-cols-2">
                <!-- Información de Contacto -->
                <div class="bg-primary-600 p-8 text-white">
                  <h2 class="text-2xl font-bold mb-6">Información de Contacto</h2>
                  
                  <div class="space-y-6">
                    <div class="flex items-center">
                      <div class="bg-primary-500 p-3 rounded-lg mr-4">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                      </div>
                      <div>
                        <h3 class="font-semibold">Dirección</h3>
                        <p class="text-primary-100">Av. Principal 123, Centro<br>Ciudad, Estado 12345</p>
                      </div>
                    </div>
                    
                    <div class="flex items-center">
                      <div class="bg-primary-500 p-3 rounded-lg mr-4">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                        </svg>
                      </div>
                      <div>
                        <h3 class="font-semibold">Teléfono</h3>
                        <p class="text-primary-100">+1 (555) 123-4567</p>
                      </div>
                    </div>
                    
                    <div class="flex items-center">
                      <div class="bg-primary-500 p-3 rounded-lg mr-4">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                      </div>
                      <div>
                        <h3 class="font-semibold">Email</h3>
                        <p class="text-primary-100">info@dentalclinic.com</p>
                      </div>
                    </div>
                    
                    <div class="flex items-center">
                      <div class="bg-primary-500 p-3 rounded-lg mr-4">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                      </div>
                      <div>
                        <h3 class="font-semibold">Horarios</h3>
                        <p class="text-primary-100">Lun - Vie: 9:00 - 18:00<br>Sáb: 9:00 - 14:00</p>
                      </div>
                    </div>
                  </div>
                  
                  <div class="mt-8">
                    <h3 class="font-semibold mb-4">¿Por qué elegirnos?</h3>
                    <ul class="space-y-2 text-primary-100">
                      <li class="flex items-center">
                        <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                        </svg>
                        Tecnología de vanguardia
                      </li>
                      <li class="flex items-center">
                        <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                        </svg>
                        Profesionales certificados
                      </li>
                      <li class="flex items-center">
                        <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                        </svg>
                        Atención personalizada
                      </li>
                      <li class="flex items-center">
                        <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                        </svg>
                        Garantía en todos los tratamientos
                      </li>
                    </ul>
                  </div>
                </div>
                
                <!-- Formulario -->
                <div class="p-8">
                  <h2 class="text-2xl font-bold text-gray-900 mb-6">Datos de la Cita</h2>
                  
                  <form id="appointment-form" class="space-y-6">
                    <!-- Información Personal -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label for="nombre" class="block text-sm font-medium text-gray-700 mb-2">
                          Nombre Completo *
                        </label>
                        <input type="text" 
                               id="nombre" 
                               name="nombre" 
                               class="input-field ${this.errors.nombre ? 'border-red-500' : ''}" 
                               placeholder="Tu nombre completo"
                               value="${this.formData.nombre}">
                        ${this.errors.nombre ? `<p class="text-red-500 text-sm mt-1">${this.errors.nombre}</p>` : ''}
                      </div>
                      
                      <div>
                        <label for="telefono" class="block text-sm font-medium text-gray-700 mb-2">
                          Teléfono *
                        </label>
                        <input type="tel" 
                               id="telefono" 
                               name="telefono" 
                               class="input-field ${this.errors.telefono ? 'border-red-500' : ''}" 
                               placeholder="(555) 123-4567"
                               value="${this.formData.telefono}">
                        ${this.errors.telefono ? `<p class="text-red-500 text-sm mt-1">${this.errors.telefono}</p>` : ''}
                      </div>
                    </div>
                    
                    <div>
                      <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                        Correo Electrónico *
                      </label>
                      <input type="email" 
                             id="email" 
                             name="email" 
                             class="input-field ${this.errors.email ? 'border-red-500' : ''}" 
                             placeholder="tu@email.com"
                             value="${this.formData.email}">
                      ${this.errors.email ? `<p class="text-red-500 text-sm mt-1">${this.errors.email}</p>` : ''}
                    </div>
                    
                    <!-- Servicio -->
                    <div>
                      <label for="servicio" class="block text-sm font-medium text-gray-700 mb-2">
                        Servicio Requerido *
                      </label>
                      <select id="servicio" 
                              name="servicio" 
                              class="input-field ${this.errors.servicio ? 'border-red-500' : ''}">
                        <option value="">Selecciona un servicio</option>
                        ${this.services.map(service => `
                          <option value="${service.id}" ${this.formData.servicio == service.id ? 'selected' : ''}>
                            ${service.name} - ${service.price} (${service.duration})
                          </option>
                        `).join('')}
                      </select>
                      ${this.errors.servicio ? `<p class="text-red-500 text-sm mt-1">${this.errors.servicio}</p>` : ''}
                    </div>
                    
                    <!-- Fecha y Hora -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label for="fecha" class="block text-sm font-medium text-gray-700 mb-2">
                          Fecha Preferida *
                        </label>
                        <input type="date" 
                               id="fecha" 
                               name="fecha" 
                               class="input-field ${this.errors.fecha ? 'border-red-500' : ''}" 
                               min="${this.getTomorrowDate()}"
                               value="${this.formData.fecha}">
                        ${this.errors.fecha ? `<p class="text-red-500 text-sm mt-1">${this.errors.fecha}</p>` : ''}
                      </div>
                      
                      <div>
                        <label for="hora" class="block text-sm font-medium text-gray-700 mb-2">
                          Hora Preferida *
                        </label>
                        <select id="hora" 
                                name="hora" 
                                class="input-field ${this.errors.hora ? 'border-red-500' : ''}">
                          <option value="">Selecciona una hora</option>
                          ${this.availableHours.map(hour => `
                            <option value="${hour}" ${this.formData.hora === hour ? 'selected' : ''}>
                              ${hour}
                            </option>
                          `).join('')}
                        </select>
                        ${this.errors.hora ? `<p class="text-red-500 text-sm mt-1">${this.errors.hora}</p>` : ''}
                      </div>
                    </div>
                    
                    <!-- Mensaje Adicional -->
                    <div>
                      <label for="mensaje" class="block text-sm font-medium text-gray-700 mb-2">
                        Mensaje Adicional (Opcional)
                      </label>
                      <textarea id="mensaje" 
                                name="mensaje" 
                                rows="4" 
                                class="input-field" 
                                placeholder="Cuéntanos sobre tu situación o alguna preferencia especial...">${this.formData.mensaje}</textarea>
                    </div>
                    
                    <!-- Términos y Condiciones -->
                    <div class="flex items-start">
                      <input type="checkbox" 
                             id="terminos" 
                             name="terminos" 
                             class="mt-1 mr-3 h-4 w-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500">
                      <label for="terminos" class="text-sm text-gray-600">
                        Acepto los <a href="#" class="text-primary-600 hover:text-primary-700 underline">términos y condiciones</a> 
                        y la <a href="#" class="text-primary-600 hover:text-primary-700 underline">política de privacidad</a>.
                      </label>
                    </div>
                    ${this.errors.terminos ? `<p class="text-red-500 text-sm">${this.errors.terminos}</p>` : ''}
                    
                    <!-- Botón de Envío -->
                    <div class="pt-4">
                      <button type="submit" 
                              class="btn-primary w-full py-4 text-lg font-semibold">
                        📅 Agendar Cita
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <!-- Información Adicional -->
        <section class="py-16 bg-white">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
              <h2 class="text-3xl font-bold text-gray-900 mb-4">¿Qué esperar en tu cita?</h2>
              <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                Te guiamos paso a paso en tu experiencia dental para que te sientas cómodo y seguro.
              </p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div class="text-center">
                <div class="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span class="text-2xl">📋</span>
                </div>
                <h3 class="text-xl font-bold text-gray-900 mb-2">1. Evaluación Inicial</h3>
                <p class="text-gray-600">
                  Revisión completa de tu historial médico y evaluación de tu situación dental actual.
                </p>
              </div>
              
              <div class="text-center">
                <div class="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span class="text-2xl">🔍</span>
                </div>
                <h3 class="text-xl font-bold text-gray-900 mb-2">2. Diagnóstico</h3>
                <p class="text-gray-600">
                  Examen detallado con tecnología avanzada para identificar cualquier problema o necesidad.
                </p>
              </div>
              
              <div class="text-center">
                <div class="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span class="text-2xl">📝</span>
                </div>
                <h3 class="text-xl font-bold text-gray-900 mb-2">3. Plan de Tratamiento</h3>
                <p class="text-gray-600">
                  Diseño de un plan personalizado con opciones de tratamiento y presupuesto detallado.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    `;
    
    this.setupEventListeners();
  }

  setupEventListeners() {
    const form = document.getElementById('appointment-form');
    if (form) {
      // Form submission
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleFormSubmit();
      });
      
      // Real-time validation
      const inputs = form.querySelectorAll('input, select, textarea');
      inputs.forEach(input => {
        input.addEventListener('blur', () => {
          this.validateField(input.name, input.value);
          this.updateFieldDisplay(input.name);
        });
        
        input.addEventListener('input', () => {
          this.formData[input.name] = input.value;
          // Clear error when user starts typing
          if (this.errors[input.name]) {
            delete this.errors[input.name];
            this.updateFieldDisplay(input.name);
          }
        });
      });
    }
  }

  validateField(fieldName, value) {
    switch (fieldName) {
      case 'nombre':
        if (!value.trim()) {
          this.errors.nombre = 'El nombre es requerido';
        } else if (value.trim().length < 2) {
          this.errors.nombre = 'El nombre debe tener al menos 2 caracteres';
        } else {
          delete this.errors.nombre;
        }
        break;
        
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value.trim()) {
          this.errors.email = 'El email es requerido';
        } else if (!emailRegex.test(value)) {
          this.errors.email = 'Ingresa un email válido';
        } else {
          delete this.errors.email;
        }
        break;
        
      case 'telefono':
        const phoneRegex = /^[\d\s\-\(\)\+]{10,}$/;
        if (!value.trim()) {
          this.errors.telefono = 'El teléfono es requerido';
        } else if (!phoneRegex.test(value.replace(/\s/g, ''))) {
          this.errors.telefono = 'Ingresa un teléfono válido';
        } else {
          delete this.errors.telefono;
        }
        break;
        
      case 'servicio':
        if (!value) {
          this.errors.servicio = 'Selecciona un servicio';
        } else {
          delete this.errors.servicio;
        }
        break;
        
      case 'fecha':
        if (!value) {
          this.errors.fecha = 'Selecciona una fecha';
        } else {
          const selectedDate = new Date(value);
          const tomorrow = new Date();
          tomorrow.setDate(tomorrow.getDate() + 1);
          
          if (selectedDate < tomorrow) {
            this.errors.fecha = 'La fecha debe ser al menos mañana';
          } else {
            delete this.errors.fecha;
          }
        }
        break;
        
      case 'hora':
        if (!value) {
          this.errors.hora = 'Selecciona una hora';
        } else {
          delete this.errors.hora;
        }
        break;
    }
  }

  updateFieldDisplay(fieldName) {
    const field = document.querySelector(`[name="${fieldName}"]`);
    const errorElement = field?.parentElement.querySelector('.text-red-500');
    
    if (field) {
      if (this.errors[fieldName]) {
        field.classList.add('border-red-500');
        if (!errorElement) {
          const errorP = document.createElement('p');
          errorP.className = 'text-red-500 text-sm mt-1';
          errorP.textContent = this.errors[fieldName];
          field.parentElement.appendChild(errorP);
        } else {
          errorElement.textContent = this.errors[fieldName];
        }
      } else {
        field.classList.remove('border-red-500');
        if (errorElement) {
          errorElement.remove();
        }
      }
    }
  }

  validateForm() {
    const form = document.getElementById('appointment-form');
    const formData = new FormData(form);
    
    // Validate all required fields
    this.validateField('nombre', formData.get('nombre') || '');
    this.validateField('email', formData.get('email') || '');
    this.validateField('telefono', formData.get('telefono') || '');
    this.validateField('servicio', formData.get('servicio') || '');
    this.validateField('fecha', formData.get('fecha') || '');
    this.validateField('hora', formData.get('hora') || '');
    
    // Check terms acceptance
    if (!formData.get('terminos')) {
      this.errors.terminos = 'Debes aceptar los términos y condiciones';
    } else {
      delete this.errors.terminos;
    }
    
    return Object.keys(this.errors).length === 0;
  }

  async handleFormSubmit() {
    if (!this.validateForm()) {
      // Update display for all fields with errors
      Object.keys(this.errors).forEach(fieldName => {
        this.updateFieldDisplay(fieldName);
      });
      
      // Show general error message
      this.showNotification('Por favor, corrige los errores en el formulario', 'error');
      return;
    }
    
    const form = document.getElementById('appointment-form');
    const formData = new FormData(form);
    const submitButton = form.querySelector('button[type="submit"]');
    
    // Show loading state
    const originalText = submitButton.textContent;
    submitButton.textContent = '⏳ Enviando...';
    submitButton.disabled = true;
    
    try {
      // Usar el servicio de API para enviar la cita
      const appointmentData = {
        nombre: formData.get('nombre'),
        email: formData.get('email'),
        telefono: formData.get('telefono'),
        fecha: formData.get('fecha'),
        hora: formData.get('hora'),
        servicio: formData.get('servicio'),
        mensaje: formData.get('mensaje')
      };
      
      const result = await apiService.submitAppointment(appointmentData);
      
      if (result.success) {
        this.showSuccessModal(formData, result.confirmationCode);
        // Reset form
        form.reset();
        this.formData = {
          nombre: '', email: '', telefono: '', servicio: '', 
          fecha: '', hora: '', mensaje: ''
        };
        this.errors = {};
      } else {
        throw new Error(result.message || 'Error al procesar la cita');
      }
      
    } catch (error) {
      this.showErrorModal(error.message);
    } finally {
      submitButton.textContent = originalText;
      submitButton.disabled = false;
    }
  }

  async simulateAPICall(formData) {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Simulate random success/failure (90% success rate)
    if (Math.random() < 0.1) {
      throw new Error('Simulated API error');
    }
    
    return {
      success: true,
      appointmentId: 'APT-' + Date.now(),
      data: Object.fromEntries(formData)
    };
  }

  showSuccessModal(formData, confirmationCode = null) {
    const selectedService = this.services.find(s => s.id == formData.get('servicio'));
    
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
      <div class="modal-content p-8 text-center">
        <div class="text-6xl mb-4">✅</div>
        <h2 class="text-2xl font-bold text-gray-900 mb-4">¡Cita Agendada Exitosamente!</h2>
        
        ${confirmationCode ? `
          <div class="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
            <p class="text-green-800 font-semibold">
              Código de confirmación: <span class="font-mono text-lg">${confirmationCode}</span>
            </p>
          </div>
        ` : ''}
        
        <div class="bg-gray-50 rounded-lg p-6 mb-6 text-left">
          <h3 class="font-bold text-gray-900 mb-3">Detalles de tu cita:</h3>
          <div class="space-y-2 text-gray-700">
            <p><strong>Nombre:</strong> ${formData.get('nombre')}</p>
            <p><strong>Servicio:</strong> ${selectedService?.name || 'N/A'}</p>
            <p><strong>Fecha:</strong> ${new Date(formData.get('fecha')).toLocaleDateString('es-ES', { 
              weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' 
            })}</p>
            <p><strong>Hora:</strong> ${formData.get('hora')}</p>
            <p><strong>Teléfono:</strong> ${formData.get('telefono')}</p>
            <p><strong>Email:</strong> ${formData.get('email')}</p>
          </div>
        </div>
        
        <div class="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <p class="text-blue-800 text-sm">
            <strong>📧 Confirmación enviada:</strong> Recibirás un email de confirmación en los próximos minutos.
            Nuestro equipo te contactará 24 horas antes de tu cita para confirmar.
          </p>
        </div>
        
        <div class="flex gap-4">
          <button class="btn-primary flex-1" onclick="this.closeSuccessModal()">
            Perfecto, Gracias
          </button>
          <a href="#/servicios" class="btn-secondary flex-1 text-center">
            Ver Más Servicios
          </a>
        </div>
      </div>
    `;
    
    document.body.appendChild(modal);
    
    // Auto close after 10 seconds
    setTimeout(() => {
      this.closeSuccessModal();
    }, 10000);
  }

  showErrorModal(message) {
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
      <div class="modal-content p-8 text-center">
        <div class="text-6xl mb-4">❌</div>
        <h2 class="text-2xl font-bold text-gray-900 mb-4">Error al Agendar Cita</h2>
        
        <div class="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <p class="text-red-800">${message}</p>
        </div>
        
        <div class="flex gap-4">
          <button class="btn-primary flex-1" onclick="this.closeModal()">
            Intentar de Nuevo
          </button>
          <a href="#/contacto" class="btn-secondary flex-1 text-center">
            Contactar Directamente
          </a>
        </div>
      </div>
    `;
    
    document.body.appendChild(modal);
  }

  closeSuccessModal() {
    const modal = document.querySelector('.modal-overlay');
    if (modal) {
      modal.remove();
    }
  }

  closeModal() {
    const modal = document.querySelector('.modal-overlay');
    if (modal) {
      modal.remove();
    }
  }

  showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg max-w-sm ${
      type === 'error' ? 'bg-red-500 text-white' : 
      type === 'success' ? 'bg-green-500 text-white' : 
      'bg-blue-500 text-white'
    } animate-slide-up`;
    
    notification.innerHTML = `
      <div class="flex items-center justify-between">
        <span>${message}</span>
        <button class="ml-4 text-white hover:text-gray-200" onclick="this.remove()">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
      if (notification.parentElement) {
        notification.remove();
      }
    }, 5000);
  }

  getTomorrowDate() {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  }

  destroy() {
    this.closeSuccessModal();
    // Remove any notifications
    document.querySelectorAll('.fixed.top-4.right-4').forEach(el => el.remove());
  }
}
  