# Índice de Documentación Técnica — CSS Motion Lab

Bienvenido a la documentación técnica oficial de **CSS Motion Lab**. A continuación se detallan los documentos de diseño, arquitectura, mantenimiento y auditoría del sistema:

| Documento | Descripción |
| :--- | :--- |
| **[ARCHITECTURE.md](./ARCHITECTURE.md)** | Arquitectura profunda del sistema, diagramas de flujo de datos en Mermaid, patrón de desacoplamiento por eventos, pipeline del navegador y capas CSS. |
| **[MAINTENANCE.md](./MAINTENANCE.md)** | Guía para desarrolladores y mantenedores, principios de desacoplamiento, adición de nuevas animaciones/categorías y presupuesto de rendimiento. |
| **[ANIMATIONS_GUIDE.md](./ANIMATIONS_GUIDE.md)** | Manual de creación de animaciones CSS de alta fidelidad, contratos de datos, curvas de aceleración y buenas prácticas de hardware. |
| **[QUALITY_AUDIT.md](./QUALITY_AUDIT.md)** | Informe exhaustivo de la auditoría de calidad automatizada con matriz de 24 pruebas técnicas y métricas del catálogo. |
| **[LEARNINGS.md](./LEARNINGS.md)** | Aprendizajes y lecciones técnicas de ingeniería en escalado a 180 animaciones, Core Web Vitals, View Transitions API y diseño de UI. |
| **[ROADMAP_V2.md](./ROADMAP_V2.md)** | Hoja de ruta para la Version 2.0: Web Animations API (WAAPI), tokens de diseno Figma/Penpot, scroll-driven animations, fisicas de resortes, PWA y CLI headless. |

---

### Comandos de Utilidad

```bash
# Ejecutar la suite automatizada de pruebas de calidad
npm test

# Compilar el sitio estático para producción
npm run build

# Iniciar el servidor local de desarrollo
npm run dev
```
