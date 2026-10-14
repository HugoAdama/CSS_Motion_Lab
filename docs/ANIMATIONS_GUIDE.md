# Guía de Creación de Animaciones y Patrones UI — CSS Motion Lab

Esta guía técnica explica paso a paso cómo diseñar, calibrar e incorporar nuevos efectos de movimiento al catálogo interactivo de **CSS Motion Lab**.

---

## 1. El Principio del Código Coordinado

Uno de los pilares fundamentales del proyecto es que el código ofrecido al usuario debe ser **100% coordinado e inmediatamente funcional**.

- Las clases utilizadas en `previewHtml` deben coincidir exactamente con las clases objetivo en `generateCss` y en `htmlSnippet`.
- No debe haber dependencias implícitas con hojas de estilos externas o frameworks como Tailwind o Bootstrap.
- Los selectores deben ser específicos y no contaminar elementos globales fuera del contenedor de la tarjeta.

---

## 2. Anatomía de una Animación (`AnimationDefinition`)

Cada animación se exporta como un objeto en su respectivo archivo de categoría en `src/data/categories/`:

```typescript
interface AnimationDefinition {
  id: string;                      // kebab-case único
  name: string;                    // Título descriptivo para la UI
  category: CategoryType;          // Una de las 6 categorías del laboratorio
  renderCost: string;              // Descripción del costo (ej. "Bajo (GPU / Composición)")
  renderCostType: RenderCostType;  // 'composite' | 'paint' | 'layout'
  costExplanation: string;         // Explicación técnica del impacto
  properties: string;              // Propiedades afectadas (ej. "transform, opacity")
  targetSelector: string;          // Selector CSS exacto del elemento animado
  defaultDuration: number;         // Duración inicial en segundos (ej. 0.6)
  defaultTiming: TimingCurve;      // Curva inicial (ej. "cubic-bezier(0.16, 1, 0.3, 1)")
  timingOptions: string[];         // Opciones a desplegar en el tuner
  previewClass: string;            // Clase para aislar el escenario visual
  previewHtml: string;             // Marcado de previsualización en vivo
  htmlSnippet: string;             // Fragmento HTML exportable
  hasStaggerControl?: boolean;     // Si incluye control deslizante de retraso
  defaultStaggerDelay?: number;    // Retraso entre hijos en segundos
  generateCss: (duration: number, timing: string, staggerDelay?: number) => string;
}
```

---

## 3. Selección y Reglas de Curvas de Aceleración (Timing Curves)

El catálogo implementa curvas de aceleración basadas en la física de movimiento real:

### Curvas Recomendadas por Propósito:
- **Entradas e Inicios de Acción (`ease-out`)**:
  - `cubic-bezier(0.16, 1, 0.3, 1)`: Entrada rápida con desaceleración orgánica y suave.
  - `cubic-bezier(0.34, 1.56, 0.64, 1)`: Efecto de rebote elástico (*overshoot* sutil).
- **Salidas y Cierres (`ease-in`)**:
  - `cubic-bezier(0.7, 0, 0.84, 0)`: Comienza lentamente y acelera hacia afuera de la pantalla.
- **Micro-interacciones y Estados Hover (`ease-in-out`)**:
  - `cubic-bezier(0.65, 0, 0.35, 1)`: Movimiento simétrico equilibrado.
- **Efectos Digitales o de Máquina de Escribir**:
  - `steps(n, end)` o `step-end`: Saltos discretos de cuadros sin interpolación continua.

---

## 4. Guía de Optimización del Pipeline

1. **Favorecer la Composición por Hardware**:
   ```css
   /* RECOMENDADO: Solo GPU */
   .card-hover-effect {
     transform: translateY(-8px) scale(1.02);
     opacity: 1;
   }

   /* A EVITAR: Dispara Layout y Reflow */
   .card-hover-effect-bad {
     top: -8px;
     width: 102%;
   }
   ```

2. **Aislar Contextos de Apilamiento con `will-change` con Criterio**:
   Solo aplique `will-change: transform, opacity;` en animaciones continuas de alto tráfico o transiciones complejas, eliminándolo cuando la animación finalice para evitar consumo excesivo de memoria VRAM en navegadores móviles.

3. **Escalonamiento Dinámico (Staggering)**:
   Al crear patrones con listas de elementos (menús, tarjetas, barras de progreso), use variables CSS calculadas:
   ```css
   .item:nth-child(1) { animation-delay: calc(var(--stagger) * 0); }
   .item:nth-child(2) { animation-delay: calc(var(--stagger) * 1); }
   .item:nth-child(3) { animation-delay: calc(var(--stagger) * 2); }
   ```
