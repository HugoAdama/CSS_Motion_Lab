# CSS Motion Lab

Catálogo interactivo y laboratorio de aprendizaje para consultar, calibrar, probar y copiar animaciones CSS puras con código HTML y CSS 100% coordinado.

- **Demo en vivo en GitHub Pages**: [https://hugoadama.github.io/CSS_Motion_Lab/](https://hugoadama.github.io/CSS_Motion_Lab/)
- **Repositorio**: [https://github.com/HugoAdama/CSS_Motion_Lab](https://github.com/HugoAdama/CSS_Motion_Lab)

---

## Características Principales

### 1. HTML y CSS Coordinados
Cada animación comparte exactamente la misma clase entre el HTML y el CSS:
- `Fade in`: `.toast-card`
- `Slide in`: `.nav-chip`
- `Bounce`: `.bell-badge`
- `Pulse`: `.status-beacon`
- `Shake`: `.input-alert`
- `Spinner`: `.spinner-ring`
- `Typing`: `.typing-text`
- `Hover lift`: `.card-interactive`

Incluye la opción **"Copiar ejemplo completo"**, que copia el fragmento HTML y CSS listo para pegar en cualquier proyecto o entorno (CodePen, Astro, React, etc.) sin tener que ajustar clases manualmente.

### 2. Métricas Verificables y Rigor Técnico
En lugar de afirmaciones genéricas de rendimiento, el catálogo detalla:
- **Propiedad animada** de cada efecto (`transform`, `opacity`, `width`, `box-shadow`).
- **Impacto en el pipeline de renderizado**:
  - `Composición (GPU)`: Animaciones en `transform` y `opacity` ejecutadas en el hilo compositor sin forzar recalculo de diseño.
  - `Layout / Reflow`: Animaciones que alteran la geometría del elemento (como `width` en el efecto typing).
  - `Repintado (Paint)`: Efectos como `box-shadow` que exigen rasterizado adicional.

### 3. Herramienta de Aprendizaje y Calibración en Vivo
- Controles interactivos en cada tarjeta para calibrar la **duración** (slider de 0.2s a 3.0s) y la **curva de aceleración** (`ease-out`, `ease-in-out`, `linear`, `cubic-bezier(...)`, etc.).
- La vista previa responde al instante y el bloque de código CSS se actualiza dinámicamente con los valores seleccionados.

### 4. Accesibilidad y Navegación Universal
- Foco visible accesible (`:focus-visible`) en todos los controles interactivos, pestañas, selectores y tarjetas.
- Modo de **movimiento reducido** (`prefers-reduced-motion: reduce` y botón manual "Movimiento") que detiene completamente todos los efectos, incluidos los bucles continuos (spinner y baliza).
- Diseño adaptable a dispositivos móviles (hasta 320px de ancho).

---

## Tecnologías

- **Astro 5** (Generador de sitios estáticos).
- **HTML5 Semántico** y accesible (roles ARIA, estados `aria-pressed`, `aria-expanded`).
- **CSS Nativo** (Variables CSS, Flexbox, Grid, keyframes acelerados por compositor).
- **JavaScript Vanilla** (Cero dependencias pesadas, reactividad ligera nativa).

---

## Ejecutar en Local

```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar servidor de desarrollo
npm run dev
```

### Compilar para Producción
```bash
npm run build
npm run preview
```

---

## Despliegue en GitHub Pages

El proyecto se despliega automáticamente mediante GitHub Actions configurado en `.github/workflows/deploy.yml` con Node.js 22 al hacer push a la rama `main`.
