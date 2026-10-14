# Guía de Mantenimiento y Buenas Prácticas — CSS Motion Lab

Esta guía describe los estándares de ingeniería y procedimientos recomendados para mantener, refactorizar y extender el código de **CSS Motion Lab** preservando el desacoplamiento y la alta calidad técnica.

---

## 1. Principios de Mantenibilidad y Desacoplamiento

1. **Separación de Responsabilidades (SoC)**:
   - Los datos residen en `src/data/categories/` sin lógica de presentación DOM.
   - Las vistas de renderizado residen en componentes Astro (`src/components/`).
   - La lógica reactiva del cliente reside en módulos TypeScript (`src/scripts/`).
   - Los tipos globales residen en `src/types/`.
2. **Nunca usar `any` en TypeScript**:
   - Todo objeto de animación debe implementar la interfaz `AnimationDefinition`.
   - Utilizar uniones de tipos estrictas (`RenderCostType`, `CategoryType`).
3. **Comunicación Desacoplada mediante Eventos**:
   - Para notificar cambios entre módulos no jerárquicos (por ejemplo, del tuner a la barra de paquete), emitir eventos a través de `eventBus.emit(...)`.
   - Evitar llamadas directas que busquen elementos del DOM en otros componentes no relacionados.
4. **Funciones Puras para Lógica de Negocio y Matemáticas**:
   - Mantener las funciones de cálculo matemático (como `parseTimingCoordinates` y `calculateBezierSvgPlot`) aisladas de llamadas a `document` o `window` para permitir pruebas automatizadas en cualquier entorno.

---

## 2. Procedimiento para Agregar una Nueva Animación

Para incorporar una nueva animación al catálogo sin romper contratos:

### Paso 1: Registrar el Objeto de Datos
Edita el archivo de su categoría correspondiente (por ejemplo, `src/data/categories/entrances.js`):

```javascript
{
  id: 'mi-nuevo-efecto',                      // kebab-case único
  name: 'Mi Nuevo Efecto',                    // Nombre descriptivo
  category: 'Entrada',                        // Categoría oficial
  renderCost: 'Bajo (GPU / Composición)',    // Etiqueta legible
  renderCostType: 'composite',               // 'composite' | 'paint' | 'layout'
  costExplanation: 'Usa transform y opacity ejecutados en el hilo compositor.',
  properties: 'transform, opacity',           // Propiedades CSS afectadas
  targetSelector: '.mi-nuevo-efecto-target', // Selector CSS del elemento
  defaultDuration: 0.6,                       // Duración inicial en segundos
  defaultTiming: 'cubic-bezier(0.16, 1, 0.3, 1)', // Curva inicial
  timingOptions: [
    'cubic-bezier(0.16, 1, 0.3, 1)',
    'ease-out',
    'linear'
  ],
  previewClass: 'stage-mi-nuevo-efecto',      // Clase de contenedor de demo
  previewHtml: `
    <div class="mi-nuevo-efecto-target is-playing">
      <span>Contenido de prueba</span>
    </div>
  `,
  htmlSnippet: `<div class="mi-nuevo-efecto-target">Contenido</div>`,
  generateCss: (duration, timing, stagger = 0.1) => `
    .mi-nuevo-efecto-target {
      animation: miNuevoEfecto ${duration}s ${timing} both;
    }
    @keyframes miNuevoEfecto {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `
}
```

### Paso 2: Agregar los Estilos CSS Base
Agrega la regla correspondiente en la hoja de estilos de su categoría (por ejemplo, `src/styles/animations/entrances.css`):

```css
/* Mi Nuevo Efecto */
.mi-nuevo-efecto-target.is-playing {
  animation: miNuevoEfecto var(--duration, 0.6s) var(--timing, cubic-bezier(0.16, 1, 0.3, 1)) both;
}

@keyframes miNuevoEfecto {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### Paso 3: Validar con la Suite Automatizada
Ejecuta la suite de pruebas para verificar que no haya selectores desalineados, curvas inválidas o campos ausentes:
```bash
npm test
```

---

## 3. Presupuesto de Rendimiento y Pipeline

Para garantizar 60/120 FPS en dispositivos móviles y de gama media:

1. **Prioridad GPU**:
   - Favorecer `transform: translate3d(x, y, 0)`, `scale()`, `rotate()` y `opacity`.
   - Estas propiedades no disparan recálculos de geometría (*Layout/Reflow*) ni repintado de mapa de bits (*Repaint*).
2. **Propiedades con Costo de Repintado (Paint)**:
   - `box-shadow`, `filter: blur()`, `background-position`.
   - Úsalas con moderación o restringidas a tarjetas individuales.
3. **Propiedades con Costo de Maquetación (Layout)**:
   - `max-height`, `grid-template-rows`, `width`, `height`.
   - Limitar exclusivamente a patrones interactivos que lo requieren inherentemente (ej. Acordeones, Menús desplegables).
4. **Política de Accesibilidad (WCAG 2.2 AA)**:
   - Toda animación debe estar cubierta por `accessibility.css` mediante `@media (prefers-reduced-motion: reduce)`.
   - En modo reducido, las animaciones que impliquen desplazamiento brusco deben reducirse a disolución de opacidad sutil o apagarse inmediatamente.

---

## 4. Ejecución y Expansión de Pruebas

El comando oficial de verificación es:
```bash
npm test
```
Este ejecuta `tests/quality-audit.mjs` y evalúa:
- Existencia y distribución exacta de las 120 animaciones (20 por cada una de las 6 categorías).
- Unicidad de los IDs en formato kebab-case.
- Cumplimiento de la interfaz `AnimationDefinition`.
- Alineación 100% entre `targetSelector` y `previewHtml`.
- Validez matemática de todas las curvas Bézier y funciones escalonadas (`steps`).
- Presencia de directivas de accesibilidad para movimiento reducido.
- Renderizado de todos los componentes en `dist/index.html`.
