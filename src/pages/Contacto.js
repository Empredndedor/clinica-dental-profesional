export class ContactoPage {
  render() {
    const app = document.getElementById('app');
    app.querySelector('#main-content').innerHTML = `
      <div>
        <h1>Contacto</h1>
        <p>Email: info@sonrisasana.com</p>
        <p>Teléfono: +1 809 555 1234</p>
        <p>Dirección: Av. Principal #123, Santo Domingo, RD</p>
      </div>
    `;
  }
  destroy() {}
}
