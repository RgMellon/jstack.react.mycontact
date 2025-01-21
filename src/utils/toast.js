import { EventManager } from '../libs/EventManager';

export const toastEvent = new EventManager();

export function toast({ type, text }) {
  toastEvent.emit('addtoast', { type, text });
}
