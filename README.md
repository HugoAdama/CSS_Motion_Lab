# CSS Motion Lab

Catalogo interactivo y laboratorio de aprendizaje para consultar, calibrar, probar y copiar animaciones CSS puras con codigo HTML y CSS 100% coordinado.

- **Demo en vivo en GitHub Pages**: [https://hugoadama.github.io/CSS_Motion_Lab/](https://hugoadama.github.io/CSS_Motion_Lab/)
- **Repositorio**: [https://github.com/HugoAdama/CSS_Motion_Lab](https://github.com/HugoAdama/CSS_Motion_Lab)

---

## Caracteristicas Principales

### 1. HTML y CSS Coordinados
Cada animacion comparte exactamente la misma clase entre el HTML y el CSS:
- Fade in: `.toast-card`
- Slide in: `.nav-chip`
- Bounce: `.bell-badge`
- Pulse: `.status-beacon`
- Shake: `.input-alert`
- Spinner: `.spinner-ring`
- Typing: `.typing-text`
- Hover lift: `.card-interactive`

Incluye opciones para copiar el codigo CSS, HTML, el ejemplo completo unificado, o exportar directamente a Tailwind CSS y abrir en CodePen con un solo clic.

### 2. Paginacion Ergonomica y Navegacion Fluida
- Paginacion activa por defecto que evita desplazamientos verticales excesivos en el catalogo de 180 animaciones.
- Selector de cantidad de elementos por pagina: 6, 12, 24 o Todas, con persistencia en almacenamiento local (`localStorage`).
- Mini-paginacion superior en la cabecera para cambiar de pagina inmediatamente sin descender al pie de la galeria.
- Controles de navegacion por teclado mediante flechas izquierda y derecha.
- Boton flotante "Volver Arriba" (Back to Top) con desplazamiento suave al inicio del catalogo.

### 3. Herramientas de Calibracion e Inspeccion de Movimiento
- Controles interactivos en cada tarjeta para calibrar duracion (0.2s a 3.0s) y curva de aceleracion (timing function).
- Visualizador interactivo de Curva Bezier SVG con linea de referencia lineal, puntos de control tangenciales y marcador temporal animado.
- Control de pausa y reanudacion individual en cada tarjeta para pausar el movimiento y examinar cuadros intermedios.
- Selector de velocidad global / camara lenta (0.5x, 1x, 2x) para analisis minucioso de cuadros.

### 4. Metricas Verificables y Rigor Tecnico
El catalogo detalla la propiedad animada y el impacto en el pipeline de renderizado del navegador:
- Composicion (GPU): Animaciones en `transform` y `opacity` ejecutadas en el hilo compositor sin recalcular diseno.
- Repintado (Paint): Efectos que exigen rasterizado adicional (como sombras o filtros).
- Diseno / Maquetacion (Layout): Animaciones que alteran la geometria dimensional del elemento.

### 5. Coleccion Personalizada y Favoritos
- Sistema de Favoritos persistente en almacenamiento local con filtro rapido en la barra superior.
- Creador de Paquetes (Bundle Builder): Selecciona animaciones especificas y descarga un archivo `.css` unificado o copialo al portapapeles.

### 6. Accesibilidad y Productividad
- Cumplimiento de pautas de accesibilidad WCAG 2.2 AA.
- Soporte nativo para preferencia de movimiento reducido (`prefers-reduced-motion: reduce`) e interruptor manual forzado en la cabecera.
- Modal de atajos de teclado accesible mediante boton o presionando la tecla de interrogacion (`?`).
- Atajos integrados: `R` (reiniciar animaciones), `M` (alternar movimiento reducido), `/` (enfocar buscador), `Flechas` (paginar) y `Esc` (cerrar paneles o modales).

---

## Tecnologias

- **Astro 5** (Generador de sitios estaticos).
- **HTML5 Semantico** y accesible (roles ARIA, estados `aria-pressed`, `aria-expanded`, elemento `dialog`).
- **CSS Nativo** (Variables CSS, Flexbox, Grid, keyframes acelerados por compositor).
- **TypeScript / JavaScript Vanilla** (Cero dependencias de animacion pesadas, bus de eventos desacoplado).

---

## Ejecutar en Local

```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar servidor de desarrollo
npm run dev

# 3. Ejecutar suite de pruebas de calidad
npm test
```

### Compilar para Produccion
```bash
npm run build
npm run preview
```

---

## Despliegue en GitHub Pages

El proyecto se despliega automaticamente mediante GitHub Actions configurado en `.github/workflows/deploy.yml` con Node.js 22 al hacer push a la rama `main`.
