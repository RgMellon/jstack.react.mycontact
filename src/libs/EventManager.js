export class EventManager {
  constructor() {
    this.listeners = new Map();
  }

  on(event, listener) {
    console.log(event, listener, 'on');
    if (!this.listeners.has(event)) {
      this.listeners.set(event, []);
    }

    const currentListener = this.listeners.get(event);

    currentListener.push(listener);
  }

  emit(event, payload) {
    if (!this.listeners.has(event)) {
      return;
    }

    const currentEvent = this.listeners.get(event);
    currentEvent.forEach((currentListener) => {
      currentListener(payload);
    });
  }

  removeListener(event, listener) {
    if (!this.listeners.has(event)) {
      return;
    }

    const currentEvent = this.listeners.get(event);
    const filtredListener = currentEvent.filter(
      (currentListener) => currentListener !== listener
    );

    this.listeners.set(event, filtredListener);
  }
}
