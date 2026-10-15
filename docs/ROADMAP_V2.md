# Hoja de Ruta Version 2.0 (Roadmap V2) — CSS Motion Lab

Este documento define la visión estrategica y las propuestas tecnicas para la evolucion de **CSS Motion Lab** hacia su Version 2.0. El objetivo central de la siguiente etapa es convertir el laboratorio en una suite integral de herramientas de movimiento tanto para la web como para flujos de trabajo de diseno UI/UX contemporaneos.

---

## Indice de Iniciativas V2.0

1. Generador y Exportador de Web Animations API (WAAPI)
2. Exportador de Tokens de Diseno para Figma y Penpot (W3C Design Tokens)
3. Animaciones Guiadas por Desplazamiento Nativo (Scroll-Driven Animations)
4. Simulador de Fisicas de Resortes (CSS Spring Physics con funcion linear)
5. Editor Visual de Morphing de Vectores SVG
6. Modo Estudio Offline y Progressive Web App (PWA)
7. Secuenciador Multipista de Keyframes en Linea (Timeline Sequencer)
8. CLI Headless de Importacion Directa (npx css-motion add)
9. Plataforma de Contribuciones Comunitarias de Animaciones
10. Extension del Sistema Multilingue (i18n)

---

## 1. Generador y Exportador de Web Animations API (WAAPI)

### Contexto y Necesidad
Aunque CSS es el estandar mas eficiente para animaciones declarativas, en arquitecturas orientadas a componentes dinamicos (React, Vue, Svelte, Lit) los ingenieros con frecuencia requieren control programatico fino de la animacion (pausar en un frame exacto, sincronizar eventos de finalizacion con promesas o invertir la direccion en caliente).

### Propuesta Tecnica
- Incorporar una nueva pestana de exportacion en cada tarjeta: **WAAPI (JS)**.
- Compilar dinamicamente los keyframes CSS a la sintaxis nativa de JavaScript:
  ```javascript
  element.animate(
    [
      { transform: 'scale(0.95)', opacity: 0 },
      { transform: 'scale(1)', opacity: 1 }
    ],
    {
      duration: 700,
      easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
      fill: 'forwards'
    }
  );
  ```
- Permitir la descarga de snippets encapsulados en funciones utilitarias o hooks (ejemplo: `useMotionAnimation(ref)`).

---

## 2. Exportador de Tokens de Diseno para Figma y Penpot (W3C Design Tokens)

### Contexto y Necesidad
La desconexion historica entre equipos de diseno UI/UX y desarrollo frontend surge por discrepancias en curvas de aceleracion y duraciones codificadas de forma independiente.

### Propuesta Tecnica
- Implementar un boton de descarga en el encabezado y en el creador de paquetes para exportar un archivo `motion-tokens.json` compatible con la especificacion oficial del W3C Design Tokens Community Group y plugins como Tokens Studio for Figma.
- Formato estructurado:
  ```json
  {
    "motion": {
      "duration": {
        "fast": { "$value": "150ms", "$type": "duration" },
        "normal": { "$value": "300ms", "$type": "duration" },
        "deliberate": { "$value": "600ms", "$type": "duration" }
      },
      "easing": {
        "out-expo": { "$value": [0.16, 1, 0.3, 1], "$type": "cubicBezier" },
        "spring-soft": { "$value": [0.34, 1.56, 0.64, 1], "$type": "cubicBezier" }
      }
    }
  }
  ```
- Soporte de sincronizacion bidireccional con Penpot y Variables de Figma mediante JSON/REST.

---

## 3. Animaciones Guiadas por Desplazamiento Nativo (Scroll-Driven Animations)

### Contexto y Necesidad
Las nuevas especificaciones de CSS (CSS Scroll-Driven Animations Module Level 1) permiten vincular el progreso de una animacion al desplazamiento de la ventana o de un contenedor contenedor sin necesidad de librerias pesadas como GSAP ScrollTrigger o eventos pasivos de scroll en JavaScript.

### Propuesta Tecnica
- Crear una nueva categoria en el catalogo dedicada a patrones de scroll nativos:
  - Barras de progreso de lectura vinculadas a `animation-timeline: scroll()`.
  - Revelado de elementos segun entran en el viewport con `animation-timeline: view()`.
  - Zoom de tarjetas y efecto cover-flow en listas horizontales.
- Selector de modo en el estudio para previsualizar la animacion en modo continuo tradicional o en modo scroll interactivo mediante un contenedor con scroll interno de prueba.

---

## 4. Simulador de Fisicas de Resortes (CSS Spring Physics con funcion linear)

### Contexto y Necesidad
Las curvas cubic-bezier clasicas no pueden reproducir rebotes complejos sin recurrir a keyframes fragmentados artificiales. Sin embargo, la funcion `linear(...)` moderna de CSS permite representar curvas de resorte matematicamente exactas mediante una serie de puntos muestreados.

### Propuesta Tecnica
- Agregar un generador interactivo con controles de masa (mass), rigidez (stiffness) y amortiguamiento (damping).
- Algoritmo en cliente que resuelva la ecuacion diferencial del oscilador armonico amortiguado y sintetice la regla CSS correspondiente:
  ```css
  transition-timing-function: linear(
    0, 0.006, 0.025 2.8%, 0.101 6.1%, 0.539 18.9%,
    0.721 25.3%, 0.849 31.5%, 0.999 50%, 1.01 65%, 1
  );
  ```
- Visualizador en vivo de la oscilacion del resorte en comparacion con cubic-bezier estandar.

---

## 5. Editor Visual de Morphing de Vectores SVG

### Contexto y Necesidad
Las transiciones de iconos interactivos (ejemplo: boton de menu hamburguesa que se transforma fluidamente en una cruz, o icono de play que conmuta a pausa) son esenciales en microinteracciones profesionales.

### Propuesta Tecnica
- Editor de interpolacion de trazados SVG (`d: path(...)` o `clip-path: path(...)`).
- Normalizador automatico de coordenadas para asegurar que ambos vectores posean igual numero de nodos y comandos de ruta, garantizando una transicion liquida a 60 FPS por hardware.
- Exportacion tanto en CSS `@keyframes` como en componentes SVG interactivos.

---

## 6. Modo Estudio Offline y Progressive Web App (PWA)

### Contexto y Necesidad
Los desarrolladores y disenadores frecuentemente trabajan en entornos de movilidad o sin conexion estable a internet y requieren acceder al catalogo y calibrar animaciones.

### Propuesta Tecnica
- Implementar un Service Worker con estrategia Cache First para los activos estaticos compilados y datos del catalogo.
- Crear manifiesto web (`manifest.webmanifest`) para permitir la instalacion del laboratorio en macOS, Windows, Linux, iOS y Android.
- Persistencia local completa: el creador de paquetes, los favoritos y las calibraciones personalizadas se almacenan localmente en IndexedDB o localStorage sin requerir dependencias de red.

---

## 7. Secuenciador Multipista de Keyframes en Linea (Timeline Sequencer)

### Contexto y Necesidad
Para patrones UI de alta complejidad (por ejemplo, un flujo completo de modal con backdrop, entrada de tarjeta, aparicion secuencial de campos de texto y boton con efecto de pulso), calibrar cada elemento por separado resulta tedioso.

### Propuesta Tecnica
- Desarrollar un secuenciador visual multipista en un modal ampliado o vista dedicada.
- Cada elemento hijo de un patron UI compuesto tendra su propia pista horizontal en una escala temporal de 0 a N segundos.
- Capacidad de arrastrar bloques temporales para ajustar duraciones y desfases (stagger delays) visualmente.
- Exportacion en un unico bloque coordinado de HTML y CSS.

---

## 8. CLI Headless de Importacion Directa (npx css-motion add)

### Contexto y Necesidad
Copiar y pegar codigo manualmente en el navegador es comodo para prototipado rapido, pero para proyectos de gran escala es preferible una experiencia similar a herramientas CLI modernas (como shadcn/ui).

### Propuesta Tecnica
- Crear un paquete CLI ligero publicado en npm:
  ```bash
  # Instalar una animacion especifica en el proyecto
  npx css-motion add toast-lifecycle

  # Instalar un paquete de patrones UI
  npx css-motion add --category "Patrones UI"
  ```
- Deteccion automatica de Tailwind CSS o CSS Modules en el proyecto de destino e insercion automatica de configuracion en `tailwind.config.js` o en el archivo CSS global.

---

## 9. Plataforma de Contribuciones Comunitarias de Animaciones

### Contexto y Necesidad
CSS Motion Lab busca consolidarse como la biblioteca de referencia para la comunidad global de desarrollo frontend.

### Propuesta Tecnica
- Establecer un esquema formal en JSON Schema para la validacion estricta de nuevas animaciones.
- Flujo automatizado de Pull Requests en GitHub con GitHub Actions:
  - Validacion de presupuesto de rendimiento: la animacion solo debe afectar propiedades de Composicion (GPU) o estar clasificada transparentemente.
  - Comprobacion automatica de unicidad de IDs, validez de curvas cubic-bezier y existencia de selectores coordinados en el marcado HTML.
  - Creacion automatica de vista previa y reporte de calidad en el Pull Request.

---

## 10. Extension del Sistema Multilingue (i18n)

### Contexto y Necesidad
Tras la incorporacion exitosa del soporte bilingue (Espanol e Ingles) en la Version 1.0, la Version 2.0 extendera el soporte internacional a nuevas comunidades linguisticas clave en desarrollo de software.

### Propuesta Tecnica
- Incorporar soporte para:
  - Portugues (Brasil y Portugal)
  - Frances
  - Aleman
- Migrar el diccionario de traducciones a una estructura modular de archivos JSON cargados bajo demanda (`locales/es.json`, `locales/en.json`, `locales/pt.json`) para mantener el bundle principal ultraligero sin sobrecargar la carga inicial de la aplicacion.
