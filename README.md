# CSS Motion Lab 🚀

Catálogo interactivo moderno para consultar, probar, calibrar y copiar animaciones CSS puras listas para producción en proyectos web.

🌐 **Demo en vivo en GitHub Pages**: [https://hugoadama.github.io/CSS_Motion_Lab/](https://hugoadama.github.io/CSS_Motion_Lab/)  
📦 **Repositorio**: [https://github.com/HugoAdama/CSS_Motion_Lab](https://github.com/HugoAdama/CSS_Motion_Lab)

---

## ✨ Características y Mejoras Implementadas

- **8 Efectos de Animación Prácticos**:
  - `Fade in`: Notificación flotante con aumento suave de opacidad y elevación.
  - `Slide in`: Chip de navegación lateral con amortiguación natural.
  - `Bounce`: Notificación badge con rebote elástico.
  - `Pulse`: Baliza de estado en vivo con anillo de radar continuo.
  - `Shake`: Alerta de error con vibración horizontal de validación.
  - `Spinner`: Cargador con gradiente cónico y resplandor central.
  - `Typing`: Terminal de comandos con efecto de escritura y cursor parpadeante.
  - `Hover lift`: Tarjeta 3D interactiva con elevación y sombra expandida.
- **Doble Snippet de Código**: Pestañas para copiar tanto el **CSS** (`@keyframes`) como el **HTML** correspondiente.
- **Portapapeles con 1 Clic**: Botón de copiado con confirmación visual y anuncio accesible (`aria-live`).
- **Tema Oscuro y Claro**: Alternador con persistencia en `localStorage` y detección automática de `prefers-color-scheme`.
- **Filtros por Categoría y Búsqueda en Tiempo Real**: Filtrado reactivo con conteo dinámico y atajo de teclado (`/` para buscar, `Esc` para limpiar).
- **Control de Reproducción**: Botón individual "Reproducir" y botón global "Reproducir visibles".
- **Accesibilidad y Movimiento Reducido**: Botón para alternar reducción de movimiento en la interfaz y soporte nativo para `@media (prefers-reduced-motion: reduce)`.
- **Despliegue Automatizado**: GitHub Actions optimizado (`.github/workflows/deploy.yml`) para GitHub Pages.

---

## 🛠️ Tecnologías

- **Astro 5** (Generador de sitios estáticos ultrarrápido).
- **HTML5 Semántico** y accesible (ARIA roles y estados).
- **CSS Nativo Moderno** (variables CSS, flexbox, CSS grid, backdrop-filter, animaciones por GPU).
- **JavaScript Vanilla** (sin librerías pesadas, ejecución ágil y ligera).

---

## 🚀 Ejecutar en Local

### Requisitos previos
- Node.js 22.12 o superior
- npm

### Pasos
```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar servidor de desarrollo
npm run dev
```

Abre en tu navegador la dirección indicada en la consola (usualmente `http://localhost:4321/CSS_Motion_Lab/`).

### Compilar para Producción
```bash
npm run build
npm run preview
```

---

## 📦 Despliegue en GitHub Pages

1. En el repositorio de GitHub, ve a **Settings → Pages**.
2. En **Build and deployment > Source**, selecciona **GitHub Actions**.
3. Al hacer `push` a la rama `main`, el workflow configurado en `.github/workflows/deploy.yml` compilará y publicará la web automáticamente.

---

## 💡 Cómo agregar nuevas animaciones

1. Agrega el nuevo elemento a `src/data/animations.js`:
   ```javascript
   {
     id: 'mi-animacion',
     name: 'Nombre de la animación',
     category: 'Entrada', // 'Entrada' | 'Énfasis' | 'Carga' | 'Texto' | 'Interacción'
     duration: '500ms',
     timing: 'ease-out',
     description: 'Descripción breve de cuándo utilizarla.',
     previewClass: 'shape--mi-animacion',
     htmlSnippet: `<div class="mi-clase">Demo</div>`,
     code: `.mi-clase { animation: miAnimacion 500ms ease-out; }`
   }
   ```
2. Diseña la vista previa en `src/components/AnimationCard.astro` y las reglas `@keyframes` en `src/styles/global.css`.
3. Ejecuta `npm run build` para validar la compilación.
