export class SentimentAnalyzer {
  constructor() {
    this.model = null;
    this.vocabulary = null;
    this.maxLength = 100;
    this.isLoading = false;
    this.isReady = false;
  }

  async loadModel() {
    if (this.isLoading || this.isReady) return;
    
    this.isLoading = true;
    try {
      // Simulamos carga de modelo con delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Vocabulario básico para análisis de sentimiento
      this.vocabulary = {
        'excelente': 0.9, 'increíble': 0.9, 'fantástico': 0.9, 'perfecto': 0.9,
        'bueno': 0.7, 'bien': 0.7, 'satisfecho': 0.7, 'contento': 0.7,
        'regular': 0.5, 'normal': 0.5, 'ok': 0.5,
        'malo': 0.3, 'terrible': 0.1, 'horrible': 0.1, 'pésimo': 0.1,
        'dolor': 0.2, 'molestia': 0.3, 'problema': 0.3,
        'profesional': 0.8, 'recomiendo': 0.8, 'calidad': 0.8,
        'rápido': 0.7, 'eficiente': 0.8, 'limpio': 0.7,
        'caro': 0.4, 'costoso': 0.4, 'barato': 0.6,
        'amable': 0.8, 'gentil': 0.8, 'atento': 0.8,
        'gracias': 0.8, 'agradecido': 0.8, 'feliz': 0.9,
        'triste': 0.2, 'enojado': 0.1, 'frustrado': 0.2,
        'limpieza': 0.7, 'blanqueamiento': 0.8, 'ortodoncia': 0.7,
        'implante': 0.6, 'cita': 0.6, 'dentista': 0.6,
        'sonrisa': 0.8, 'dientes': 0.6, 'salud': 0.7
      };

      this.isReady = true;
      this.isLoading = false;
    } catch (error) {
      console.error('Error loading sentiment model:', error);
      this.isLoading = false;
    }
  }

  preprocessText(text) {
    // Convertir a minúsculas y limpiar
    const cleanText = text.toLowerCase()
      .replace(/[^a-záéíóúñü\s]/g, '')
      .trim();
    
    const words = cleanText.split(/\s+/);
    return words;
  }

  analyzeSentiment(text) {
    if (!this.isReady) {
      return { sentiment: 'neutral', confidence: 0, message: 'Modelo no cargado' };
    }

    const words = this.preprocessText(text);
    let totalScore = 0;
    let wordCount = 0;
    let matchedWords = [];

    words.forEach(word => {
      if (this.vocabulary[word] !== undefined) {
        totalScore += this.vocabulary[word];
        wordCount++;
        matchedWords.push(word);
      }
    });

    // Si no hay palabras conocidas, usar análisis básico
    if (wordCount === 0) {
      totalScore = 0.5; // Neutral
      wordCount = 1;
    } else {
      totalScore = totalScore / wordCount;
    }

    let sentiment, confidence;
    
    if (totalScore >= 0.7) {
      sentiment = 'positivo';
      confidence = Math.min(totalScore, 0.95);
    } else if (totalScore >= 0.4) {
      sentiment = 'neutral';
      confidence = 0.6;
    } else {
      sentiment = 'negativo';
      confidence = Math.min(1 - totalScore, 0.95);
    }

    return {
      sentiment,
      confidence: Math.round(confidence * 100),
      score: totalScore,
      matchedWords,
      message: this.getSentimentMessage(sentiment, confidence)
    };
  }

  getSentimentMessage(sentiment, confidence) {
    const messages = {
      'positivo': [
        '¡Excelente! Tu comentario refleja una experiencia muy positiva 😊',
        '¡Qué bueno! Nos alegra saber que tuviste una gran experiencia 🌟',
        '¡Fantástico! Tu satisfacción es nuestra mayor recompensa 🎉'
      ],
      'neutral': [
        'Tu comentario parece neutral. ¿Hay algo que podamos mejorar? 🤔',
        'Gracias por tu comentario. Nos gustaría conocer más detalles 💭',
        'Valoramos tu opinión. ¿Cómo podemos hacer tu experiencia aún mejor? ✨'
      ],
      'negativo': [
        'Lamentamos que no hayas tenido una buena experiencia. Contáctanos para mejorar 😔',
        'Tu feedback es importante. Queremos resolver cualquier inconveniente 🛠️',
        'Gracias por tu honestidad. Trabajaremos para mejorar nuestros servicios 💪'
      ]
    };

    const sentimentMessages = messages[sentiment];
    return sentimentMessages[Math.floor(Math.random() * sentimentMessages.length)];
  }

  render() {
    return `
      <div class="bg-white rounded-xl shadow-lg p-6 mb-8">
        <div class="flex items-center mb-4">
          <div class="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-lg mr-4">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
            </svg>
          </div>
          <div>
            <h3 class="text-xl font-bold text-gray-900">Análisis de Sentimiento con IA</h3>
            <p class="text-gray-600">Comparte tu experiencia y nuestra IA analizará el sentimiento</p>
          </div>
        </div>
        
        <div class="space-y-4">
          <div>
            <label for="sentiment-input" class="block text-sm font-medium text-gray-700 mb-2">
              Escribe tu comentario o reseña:
            </label>
            <textarea 
              id="sentiment-input" 
              class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
              rows="4"
              placeholder="Ejemplo: La atención fue excelente, el doctor muy profesional y el tratamiento perfecto..."
            ></textarea>
          </div>
          
          <button 
            id="analyze-sentiment-btn" 
            class="btn-primary w-full flex items-center justify-center gap-2"
            ${!this.isReady ? 'disabled' : ''}
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
            ${this.isReady ? 'Analizar Sentimiento' : 'Cargando Modelo IA...'}
          </button>
          
          <div id="sentiment-result" class="hidden">
            <!-- Results will be displayed here -->
          </div>
        </div>
      </div>
    `;
  }

  setupEventListeners() {
    const analyzeBtn = document.getElementById('analyze-sentiment-btn');
    const input = document.getElementById('sentiment-input');
    const resultDiv = document.getElementById('sentiment-result');

    if (analyzeBtn && input && resultDiv) {
      analyzeBtn.addEventListener('click', () => {
        const text = input.value.trim();
        if (!text) {
          alert('Por favor, escribe un comentario para analizar.');
          return;
        }

        const result = this.analyzeSentiment(text);
        this.displayResult(result, resultDiv);
      });

      // Análisis en tiempo real mientras escribe
      input.addEventListener('input', () => {
        const text = input.value.trim();
        if (text.length > 10) {
          const result = this.analyzeSentiment(text);
          this.displayResult(result, resultDiv);
        }
      });
    }
  }

  displayResult(result, container) {
    const sentimentColors = {
      'positivo': 'from-green-400 to-green-600',
      'neutral': 'from-yellow-400 to-yellow-600',
      'negativo': 'from-red-400 to-red-600'
    };

    const sentimentIcons = {
      'positivo': '😊',
      'neutral': '😐',
      'negativo': '😔'
    };

    container.innerHTML = `
      <div class="bg-gradient-to-r ${sentimentColors[result.sentiment]} p-4 rounded-lg text-white">
        <div class="flex items-center justify-between mb-3">
          <div class="flex items-center gap-2">
            <span class="text-2xl">${sentimentIcons[result.sentiment]}</span>
            <span class="font-bold text-lg capitalize">${result.sentiment}</span>
          </div>
          <div class="text-right">
            <div class="text-sm opacity-90">Confianza</div>
            <div class="text-xl font-bold">${result.confidence}%</div>
          </div>
        </div>
        
        <p class="text-sm opacity-90 mb-2">${result.message}</p>
        
        ${result.matchedWords.length > 0 ? `
          <div class="text-xs opacity-75">
            Palabras clave detectadas: ${result.matchedWords.join(', ')}
          </div>
        ` : ''}
      </div>
    `;
    
    container.classList.remove('hidden');
  }
}