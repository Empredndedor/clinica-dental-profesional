import { router } from './router/router.js';
import { Navbar } from './components/Navbar.js';
import { Footer } from './components/Footer.js';
import { InicioPage } from './pages/Inicio.js';
import { ServiciosPage } from './pages/Servicios.js';
import { CitasPage } from './pages/citas.js';
import { ContactoPage } from './pages/Contacto.js';
import './assets/style.css';

class App {
  constructor() {
    this.navbar = new Navbar();
    this.footer = new Footer();
    this.init();
  }

  init() {
    this.setupDOM();
    this.setupRoutes();
  }

  setupDOM() {
    const app = document.getElementById('app');
    app.innerHTML = `
      <header>${this.navbar.render()}</header>
      <main id="main-content"></main>
      <footer>${this.footer.render()}</footer>
    `;
  }

  setupRoutes() {
    router.register('/inicio', InicioPage);
    router.register('/servicios', ServiciosPage);
    router.register('/citas', CitasPage);
    router.register('/contacto', ContactoPage);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new App();
});
