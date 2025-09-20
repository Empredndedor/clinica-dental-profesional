class Router {
  constructor() {
    this.routes = {};
    this.currentPage = null;
    this.init();
  }
  init() {
    window.addEventListener('hashchange', () => this.handleRouteChange());
    window.addEventListener('load', () => this.handleRouteChange());
  }
  register(path, pageClass) {
    this.routes[path] = pageClass;
  }
  async handleRouteChange() {
    const path = window.location.hash.slice(1) || '/inicio';
    await this.navigateTo(path);
  }
  async navigateTo(path) {
    const PageClass = this.routes[path];
    if (PageClass) {
      if (this.currentPage?.destroy) this.currentPage.destroy();
      this.currentPage = new PageClass();
      
      // Manejar tanto render sync como async
      const renderResult = this.currentPage.render();
      if (renderResult instanceof Promise) {
        await renderResult;
      }
    } else {
      console.error(`Ruta no encontrada: ${path}`);
    }
  }
  getCurrentRoute() {
    return window.location.hash.slice(1) || '/inicio';
  }
}
export const router = new Router();