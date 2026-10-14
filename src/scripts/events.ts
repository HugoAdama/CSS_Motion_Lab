// src/scripts/events.ts — Bus de eventos tipado para desacoplamiento arquitectónico
import type { MotionLabEvents } from '../types';

type EventHandler<T> = (data: T) => void;

class TypedEventBus {
  private handlers = new Map<keyof MotionLabEvents, Set<EventHandler<any>>>();

  on<K extends keyof MotionLabEvents>(event: K, handler: EventHandler<MotionLabEvents[K]>): () => void {
    if (!this.handlers.has(event)) {
      this.handlers.set(event, new Set());
    }
    const set = this.handlers.get(event)!;
    set.add(handler);

    // Retorna función de desuscripción limpia
    return () => {
      set.delete(handler);
      if (set.size === 0) {
        this.handlers.delete(event);
      }
    };
  }

  emit<K extends keyof MotionLabEvents>(event: K, data: MotionLabEvents[K]): void {
    const set = this.handlers.get(event);
    if (set) {
      set.forEach((handler) => {
        try {
          handler(data);
        } catch (err) {
          console.error(`[EventBus] Error al procesar evento "${String(event)}":`, err);
        }
      });
    }
  }

  clear(): void {
    this.handlers.clear();
  }
}

export const eventBus = new TypedEventBus();
