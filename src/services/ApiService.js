export class ApiService {
  constructor() {
    this.baseUrls = {
      quotes: 'https://api.quotable.io',
      weather: 'https://api.openweathermap.org/data/2.5',
      news: 'https://jsonplaceholder.typicode.com',
      advice: 'https://api.adviceslip.com'
    };
    this.cache = new Map();
    this.cacheTimeout = 5 * 60 * 1000; // 5 minutos
  }

  // Método genérico para hacer peticiones con manejo de errores
  async fetchWithErrorHandling(url, options = {}) {
    try {
      const response = await fetch(url, {
        ...options,
        headers: {
          'Content-Type': 'application/json',
          ...options.headers
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Fetch error:', error);
      throw new Error(`Error al conectar con el servicio: ${error.message}`);
    }
  }

  // Cache helper
  getCachedData(key) {
    const cached = this.cache.get(key);
    if (cached && Date.now() - cached.timestamp < this.cacheTimeout) {
      return cached.data;
    }
    return null;
  }

  setCachedData(key, data) {
    this.cache.set(key, {
      data,
      timestamp: Date.now()
    });
  }

  // Obtener citas inspiracionales para la página de inicio
  async getInspirationalQuote() {
    const cacheKey = 'inspirational_quote';
    const cached = this.getCachedData(cacheKey);
    if (cached) return cached;

    try {
      const data = await this.fetchWithErrorHandling(
        `${this.baseUrls.quotes}/random?tags=inspirational|motivational|success`
      );
      
      const quote = {
        text: data.content,
        author: data.author,
        tags: data.tags
      };
      
      this.setCachedData(cacheKey, quote);
      return quote;
    } catch (error) {
      // Fallback quote si la API falla
      return {
        text: "Una sonrisa es la curva más hermosa en el cuerpo de una persona.",
        author: "Anónimo",
        tags: ["sonrisa", "belleza"]
      };
    }
  }

  // Obtener consejos de salud dental
  async getHealthAdvice() {
    const cacheKey = 'health_advice';
    const cached = this.getCachedData(cacheKey);
    if (cached) return cached;

    try {
      const data = await this.fetchWithErrorHandling(
        `${this.baseUrls.advice}/advice`
      );
      
      const advice = {
        id: data.slip.id,
        text: data.slip.advice,
        category: 'general'
      };
      
      this.setCachedData(cacheKey, advice);
      return advice;
    } catch (error) {
      // Fallback advice específico para salud dental
      const dentalAdvices = [
        "Cepíllate los dientes al menos dos veces al día con pasta dental con flúor.",
        "Usa hilo dental diariamente para eliminar la placa entre los dientes.",
        "Visita a tu dentista regularmente para chequeos y limpiezas profesionales.",
        "Limita el consumo de azúcar y alimentos ácidos para proteger el esmalte dental.",
        "Bebe mucha agua para mantener tu boca hidratada y eliminar bacterias."
      ];
      
      return {
        id: Math.floor(Math.random() * 1000),
        text: dentalAdvices[Math.floor(Math.random() * dentalAdvices.length)],
        category: 'dental'
      };
    }
  }

  // Obtener noticias relacionadas con salud (simulado con JSONPlaceholder)
  async getHealthNews(limit = 5) {
    const cacheKey = `health_news_${limit}`;
    const cached = this.getCachedData(cacheKey);
    if (cached) return cached;

    try {
      const data = await this.fetchWithErrorHandling(
        `${this.baseUrls.news}/posts?_limit=${limit}`
      );
      
      const news = data.map(post => ({
        id: post.id,
        title: this.adaptTitleToHealth(post.title),
        summary: this.adaptBodyToHealth(post.body),
        date: new Date().toISOString().split('T')[0],
        category: 'salud'
      }));
      
      this.setCachedData(cacheKey, news);
      return news;
    } catch (error) {
      // Fallback news
      return [
        {
          id: 1,
          title: "Nuevas técnicas en implantología dental",
          summary: "Los avances en implantología permiten tratamientos más rápidos y efectivos.",
          date: new Date().toISOString().split('T')[0],
          category: 'innovación'
        },
        {
          id: 2,
          title: "Importancia de la salud bucal en la salud general",
          summary: "Estudios demuestran la conexión entre la salud oral y enfermedades cardiovasculares.",
          date: new Date().toISOString().split('T')[0],
          category: 'investigación'
        }
      ];
    }
  }

  // Simular API de disponibilidad de citas
  async getAvailableAppointments(date) {
    // Simular delay de red
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const appointments = [];
    const startHour = 9;
    const endHour = 18;
    const selectedDate = new Date(date);
    
    // Generar horarios disponibles (simulado)
    for (let hour = startHour; hour < endHour; hour++) {
      for (let minute of [0, 30]) {
        const isAvailable = Math.random() > 0.3; // 70% de probabilidad de estar disponible
        if (isAvailable) {
          appointments.push({
            time: `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`,
            available: true,
            doctor: this.getRandomDoctor()
          });
        }
      }
    }
    
    return appointments;
  }

  // Simular envío de formulario de cita
  async submitAppointment(appointmentData) {
    // Simular delay de red
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Simular posible error (5% de probabilidad)
    if (Math.random() < 0.05) {
      throw new Error('Error al procesar la cita. Por favor, inténtalo de nuevo.');
    }
    
    return {
      success: true,
      appointmentId: `CITA-${Date.now()}`,
      confirmationCode: Math.random().toString(36).substr(2, 8).toUpperCase(),
      message: 'Cita agendada exitosamente',
      data: {
        ...appointmentData,
        status: 'confirmada',
        createdAt: new Date().toISOString()
      }
    };
  }

  // Obtener información del clima (para mostrar en la página)
  async getWeatherInfo(city = 'Madrid') {
    const cacheKey = `weather_${city}`;
    const cached = this.getCachedData(cacheKey);
    if (cached) return cached;

    try {
      // Nota: En producción necesitarías una API key real
      // const data = await this.fetchWithErrorHandling(
      //   `${this.baseUrls.weather}/weather?q=${city}&appid=YOUR_API_KEY&units=metric&lang=es`
      // );
      
      // Simulamos datos del clima
      const weatherData = {
        city: city,
        temperature: Math.floor(Math.random() * 25) + 10, // 10-35°C
        description: ['Soleado', 'Parcialmente nublado', 'Nublado', 'Lluvia ligera'][Math.floor(Math.random() * 4)],
        humidity: Math.floor(Math.random() * 40) + 40, // 40-80%
        icon: '☀️'
      };
      
      this.setCachedData(cacheKey, weatherData);
      return weatherData;
    } catch (error) {
      return {
        city: city,
        temperature: 22,
        description: 'Información no disponible',
        humidity: 60,
        icon: '🌤️'
      };
    }
  }

  // Helpers
  adaptTitleToHealth(title) {
    const healthKeywords = [
      'Avances en odontología moderna',
      'Nuevas técnicas de blanqueamiento dental',
      'Importancia de la higiene bucal',
      'Innovaciones en ortodoncia',
      'Prevención de enfermedades dentales'
    ];
    return healthKeywords[Math.floor(Math.random() * healthKeywords.length)];
  }

  adaptBodyToHealth(body) {
    const healthSummaries = [
      'Los últimos avances en tecnología dental permiten tratamientos más eficaces y cómodos.',
      'La prevención sigue siendo la mejor estrategia para mantener una salud bucal óptima.',
      'Nuevos estudios revelan la importancia de la salud oral en el bienestar general.',
      'Las técnicas mínimamente invasivas revolucionan los tratamientos dentales.',
      'La educación del paciente es clave para el éxito de cualquier tratamiento dental.'
    ];
    return healthSummaries[Math.floor(Math.random() * healthSummaries.length)];
  }

  getRandomDoctor() {
    const doctors = [
      'Dr. García',
      'Dra. Martínez',
      'Dr. López',
      'Dra. Rodríguez',
      'Dr. Fernández'
    ];
    return doctors[Math.floor(Math.random() * doctors.length)];
  }

  // Limpiar cache
  clearCache() {
    this.cache.clear();
  }

  // Obtener estadísticas de uso de la API
  getApiStats() {
    return {
      cacheSize: this.cache.size,
      cacheKeys: Array.from(this.cache.keys()),
      lastUpdate: new Date().toISOString()
    };
  }
}

// Instancia singleton
export const apiService = new ApiService();