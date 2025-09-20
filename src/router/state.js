class GlobalState {
  constructor() {
    this.state = { counter: 0, theme: 'light' };
    this.observers = [];
    this.loadFromStorage();
  }
  getState() {
    return { ...this.state };
  }
  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.saveToStorage();
    this.notifyObservers();
  }
  subscribe(callback) {
    this.observers.push(callback);
  }
  notifyObservers() {
    this.observers.forEach(cb => cb(this.state));
  }
  incrementCounter() {
    this.setState({ counter: this.state.counter + 1 });
  }
  decrementCounter() {
    this.setState({ counter: this.state.counter - 1 });
  }
  saveToStorage() {
    localStorage.setItem('spa-state', JSON.stringify(this.state));
  }
  loadFromStorage() {
    const saved = localStorage.getItem('spa-state');
    if (saved) this.state = { ...this.state, ...JSON.parse(saved) };
  }
}
export const globalState = new GlobalState();