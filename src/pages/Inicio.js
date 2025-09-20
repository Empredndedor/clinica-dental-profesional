import { SentimentAnalyzer } from '../components/SentimentAnalyzer.js';
import { apiService } from '../services/ApiService.js';

export class InicioPage {
  constructor() {
    this.sentimentAnalyzer = new SentimentAnalyzer();
    this.quote = null;
    this.healthAdvice = null;
    this.testimonials = [
      {
        name: "María González",
        rating: 5,
        comment: "Excelente atención y profesionalismo. Mi sonrisa nunca había lucido mejor.",
        avatar: "👩‍💼"
      },
      {
        name: "Carlos Rodríguez",
        rating: 5,
        comment: "Tecnología de vanguardia y trato muy humano. Altamente recomendado.",
        avatar: "👨‍💻"
      },
      {
        name: "Ana Martínez",
        rating: 5,
        comment: "El mejor tratamiento de ortodoncia que he recibido. Resultados increíbles.",
        avatar: "👩‍🎓"
      }
    ];
    this.currentTestimonial = 0;
  }

  async render() {
    const app = document.getElementById('app');
    const mainContent = app.querySelector('#main-content');
    
    // Cargar datos de APIs externas
    await this.loadExternalData();
    
    mainContent.innerHTML = `
      <div class="page-transition">
        <!-- Hero Section -->
        <section class="bg-gradient-to-br from-primary-50 to-dental-50 py-20">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div class="animate-slide-up">
                <h1 class="text-4xl md:text-6xl font-bold text-gray-900 mb-6 text-balance">
                  Tu sonrisa perfecta 
                  <span class="text-primary-600">nos inspira</span>
                </h1>
                <p class="text-xl text-gray-600 mb-8 leading-relaxed">
                  Brindamos servicios dentales de alta calidad con tecnología de vanguardia 
                  y un equipo de profesionales comprometidos con tu salud bucal.
                </p>
                <div class="flex flex-col sm:flex-row gap-4">
                  <a href="#/citas" class="btn-primary text-center">
                    📅 Agendar Cita
                  </a>
                  <a href="#/servicios" class="btn-secondary text-center">
                    🦷 Ver Servicios
                  </a>
                </div>
              </div>
              <div class="relative animate-fade-in">
                <div class="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div class="text-center">
                    <div class="text-6xl mb-4">😊</div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-2">+5,000</h3>
                    <p class="text-gray-600">Sonrisas transformadas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Servicios Destacados -->
        <section class="py-20 bg-white">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
              <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Nuestros Servicios Principales
              </h2>
              <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                Ofrecemos una amplia gama de tratamientos dentales con la más alta calidad y tecnología moderna.
              </p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div class="card p-8 text-center group hover:scale-105 transition-transform duration-300">
                <div class="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🦷</div>
                <h3 class="text-xl font-bold text-gray-900 mb-3">Limpieza Dental</h3>
                <p class="text-gray-600 mb-4">Mantén tu sonrisa saludable con nuestras limpiezas profesionales.</p>
                <a href="#/servicios" class="text-primary-600 hover:text-primary-700 font-medium">Más información →</a>
              </div>
              
              <div class="card p-8 text-center group hover:scale-105 transition-transform duration-300">
                <div class="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">✨</div>
                <h3 class="text-xl font-bold text-gray-900 mb-3">Blanqueamiento</h3>
                <p class="text-gray-600 mb-4">Recupera el brillo natural de tus dientes con tratamientos seguros.</p>
                <a href="#/servicios" class="text-primary-600 hover:text-primary-700 font-medium">Más información →</a>
              </div>
              
              <div class="card p-8 text-center group hover:scale-105 transition-transform duration-300">
                <div class="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🔧</div>
                <h3 class="text-xl font-bold text-gray-900 mb-3">Ortodoncia</h3>
                <p class="text-gray-600 mb-4">Corrige la posición de tus dientes con nuestros tratamientos modernos.</p>
                <a href="#/servicios" class="text-primary-600 hover:text-primary-700 font-medium">Más información →</a>
              </div>
            </div>
          </div>
        </section>

        <!-- Testimonios -->
        <section class="py-20 bg-gray-50">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
              <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Lo que dicen nuestros pacientes
              </h2>
              <p class="text-xl text-gray-600">
                La satisfacción de nuestros pacientes es nuestra mayor recompensa.
              </p>
            </div>
            
            <div class="max-w-4xl mx-auto">
              <div id="testimonial-carousel" class="card p-8 text-center">
                <div class="text-6xl mb-4" id="testimonial-avatar">👩‍💼</div>
                <div class="flex justify-center mb-4" id="testimonial-rating">
                  <span class="text-yellow-400 text-2xl">★★★★★</span>
                </div>
                <blockquote class="text-xl text-gray-700 mb-6 italic" id="testimonial-comment">
                  "Excelente atención y profesionalismo. Mi sonrisa nunca había lucido mejor."
                </blockquote>
                <cite class="text-lg font-semibold text-gray-900" id="testimonial-name">María González</cite>
              </div>
              
              <div class="flex justify-center mt-8 space-x-2">
                <button class="testimonial-dot w-3 h-3 rounded-full bg-primary-600" data-index="0"></button>
                <button class="testimonial-dot w-3 h-3 rounded-full bg-gray-300" data-index="1"></button>
                <button class="testimonial-dot w-3 h-3 rounded-full bg-gray-300" data-index="2"></button>
              </div>
            </div>
          </div>
        </section>

        <!-- AI Sentiment Analysis Section -->
        <section class="py-16 bg-gray-50">
          <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
              <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Tecnología de IA para tu Experiencia
              </h2>
              <p class="text-xl text-gray-600">
                Nuestra inteligencia artificial analiza tu experiencia para brindarte el mejor servicio
              </p>
            </div>
            ${this.sentimentAnalyzer.render()}
          </div>
        </section>

        <!-- External API Data Section -->
        <section class="py-16 bg-white">
          <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <!-- Inspirational Quote -->
              <div class="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-6">
                <div class="flex items-center mb-4">
                  <div class="bg-blue-500 p-2 rounded-lg mr-3">
                    <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clip-rule="evenodd"></path>
                    </svg>
                  </div>
                  <h3 class="text-lg font-semibold text-gray-900">Inspiración del Día</h3>
                </div>
                <div id="daily-quote">
                  ${this.quote ? `
                    <blockquote class="text-gray-700 italic mb-2">"${this.quote.text}"</blockquote>
                    <cite class="text-sm text-gray-600">- ${this.quote.author}</cite>
                  ` : '<div class="animate-pulse bg-gray-200 h-16 rounded"></div>'}
                </div>
              </div>

              <!-- Health Advice -->
              <div class="bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl p-6">
                <div class="flex items-center mb-4">
                  <div class="bg-green-500 p-2 rounded-lg mr-3">
                    <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                    </svg>
                  </div>
                  <h3 class="text-lg font-semibold text-gray-900">Consejo de Salud</h3>
                </div>
                <div id="health-advice">
                  ${this.healthAdvice ? `
                    <p class="text-gray-700">${this.healthAdvice.text}</p>
                    <span class="inline-block mt-2 px-2 py-1 bg-green-200 text-green-800 text-xs rounded-full">
                      ${this.healthAdvice.category}
                    </span>
                  ` : '<div class="animate-pulse bg-gray-200 h-16 rounded"></div>'}
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- CTA Section -->
        <section class="bg-gradient-to-r from-primary-600 to-dental-600 py-16">
          <div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
              ¿Listo para transformar tu sonrisa?
            </h2>
            <p class="text-xl text-primary-100 mb-8">
              Agenda tu cita hoy y descubre por qué somos la clínica dental de confianza.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#/citas" class="bg-white text-primary-600 hover:bg-primary-50 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
                📅 Agendar Cita Ahora
              </a>
              <a href="#/contacto" class="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
                📞 Llamar Ahora
              </a>
            </div>
          </div>
        </section>
      </div>
    `;    
    
    // Configurar componentes interactivos
    await this.setupInteractiveComponents();
  }

  async loadExternalData() {
    try {
      // Cargar modelo de IA
      await this.sentimentAnalyzer.loadModel();
      
      // Cargar datos de APIs externas en paralelo
      const [quote, advice] = await Promise.all([
        apiService.getInspirationalQuote(),
        apiService.getHealthAdvice()
      ]);
      
      this.quote = quote;
      this.healthAdvice = advice;
    } catch (error) {
      console.error('Error loading external data:', error);
      // Los datos de fallback ya están manejados en el servicio
    }
  }

  async setupInteractiveComponents() {
    // Configurar carousel de testimonios
    this.setupTestimonialCarousel();
    
    // Configurar analizador de sentimientos
    this.sentimentAnalyzer.setupEventListeners();
    
    // Actualizar datos de API si no se cargaron inicialmente
    if (!this.quote || !this.healthAdvice) {
      setTimeout(() => this.updateExternalData(), 2000);
    }
  }

  async updateExternalData() {
    try {
      if (!this.quote) {
        this.quote = await apiService.getInspirationalQuote();
        this.updateQuoteDisplay();
      }
      
      if (!this.healthAdvice) {
        this.healthAdvice = await apiService.getHealthAdvice();
        this.updateAdviceDisplay();
      }
    } catch (error) {
      console.error('Error updating external data:', error);
    }
  }

  updateQuoteDisplay() {
    const quoteElement = document.getElementById('daily-quote');
    if (quoteElement && this.quote) {
      quoteElement.innerHTML = `
        <blockquote class="text-gray-700 italic mb-2">"${this.quote.text}"</blockquote>
        <cite class="text-sm text-gray-600">- ${this.quote.author}</cite>
      `;
    }
  }

  updateAdviceDisplay() {
    const adviceElement = document.getElementById('health-advice');
    if (adviceElement && this.healthAdvice) {
      adviceElement.innerHTML = `
        <p class="text-gray-700">${this.healthAdvice.text}</p>
        <span class="inline-block mt-2 px-2 py-1 bg-green-200 text-green-800 text-xs rounded-full">
          ${this.healthAdvice.category}
        </span>
      `;
    }
  }

  setupTestimonialCarousel() {
    const dots = document.querySelectorAll('.testimonial-dot');
    
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        this.showTestimonial(index);
      });
    });

    // Auto-rotate testimonials
    setInterval(() => {
      this.currentTestimonial = (this.currentTestimonial + 1) % this.testimonials.length;
      this.showTestimonial(this.currentTestimonial);
    }, 5000);
  }

  showTestimonial(index) {
    const testimonial = this.testimonials[index];
    const avatar = document.getElementById('testimonial-avatar');
    const comment = document.getElementById('testimonial-comment');
    const name = document.getElementById('testimonial-name');
    const dots = document.querySelectorAll('.testimonial-dot');

    if (avatar && comment && name) {
      avatar.textContent = testimonial.avatar;
      comment.textContent = `"${testimonial.comment}"`;
      name.textContent = testimonial.name;

      // Update dots
      dots.forEach((dot, i) => {
        if (i === index) {
          dot.classList.remove('bg-gray-300');
          dot.classList.add('bg-primary-600');
        } else {
          dot.classList.remove('bg-primary-600');
          dot.classList.add('bg-gray-300');
        }
      });
    }

    this.currentTestimonial = index;
  }

  destroy() {
    // Cleanup event listeners if needed
  }
}
