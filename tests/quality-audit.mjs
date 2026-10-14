// tests/quality-audit.mjs — Suite de Pruebas de Calidad Automatizada para CSS Motion Lab
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// Importar catálogo dinámicamente
const { animations, categories } = await import('../src/data/animations.js');

let totalChecks = 0;
let passedChecks = 0;
let failedChecks = 0;
const failures = [];

function assert(condition, testName, details = '') {
  totalChecks++;
  if (condition) {
    passedChecks++;
    console.log(`  [OK] ${testName}`);
  } else {
    failedChecks++;
    console.error(`  [ERROR] ${testName} — ${details}`);
    failures.push({ testName, details });
  }
}

console.log('================================================================');
console.log('AUDITORIA PROFUNDA DE CALIDAD Y ARQUITECTURA — CSS MOTION LAB');
console.log('================================================================\n');

// 1. Integridad del Catálogo
console.log('1. Integridad del Catalogo (120 Animaciones / 6 Categorias)');
assert(animations.length === 120, 'Total de animaciones es exactamente 120', `Obtenido: ${animations.length}`);

const categoryExpected = [
  'Patrones UI',
  'Entrada',
  'Énfasis',
  'Carga',
  'Texto',
  'Interacción'
];

categoryExpected.forEach((cat) => {
  const items = animations.filter((a) => a.category === cat);
  assert(items.length === 20, `Categoría "${cat}" contiene exactamente 20 elementos`, `Obtenido: ${items.length}`);
});

// 2. Unicidad de Identificadores
console.log('\n2. Unicidad y Formato de Identificadores');
const seenIds = new Set();
let duplicates = 0;
let invalidIdFormat = 0;

animations.forEach((a) => {
  if (seenIds.has(a.id)) duplicates++;
  seenIds.add(a.id);
  if (!/^[a-z0-9-]+$/.test(a.id)) invalidIdFormat++;
});

assert(duplicates === 0, 'Todos los IDs son únicos', `${duplicates} duplicados encontrados`);
assert(invalidIdFormat === 0, 'Todos los IDs cumplen con la convención kebab-case', `${invalidIdFormat} inválidos`);

// 3. Conformidad del Esquema de Datos (AnimationDefinition)
console.log('\n3. Conformidad con el Modelo de Datos (AnimationDefinition)');
const validCostTypes = new Set(['composite', 'paint', 'layout']);
let invalidCostTypes = 0;
let missingFields = 0;

animations.forEach((a) => {
  if (!validCostTypes.has(a.renderCostType)) invalidCostTypes++;
  if (
    !a.name ||
    !a.category ||
    !a.description ||
    !a.properties ||
    !a.targetSelector ||
    typeof a.defaultDuration !== 'number' ||
    !a.defaultTiming ||
    !Array.isArray(a.timingOptions) ||
    typeof a.generateCss !== 'function' ||
    !a.previewHtml ||
    !a.htmlSnippet
  ) {
    missingFields++;
  }
});

assert(invalidCostTypes === 0, 'Todos los renderCostType son válidos (composite | paint | layout)', `${invalidCostTypes} inválidos`);
assert(missingFields === 0, 'Ninguna animación carece de campos obligatorios', `${missingFields} incompletas`);

// 4. Sincronización entre Selectores CSS y Marcado HTML
console.log('\n4. Coherencia y Sincronización HTML/CSS');
let selectorMismatches = 0;

animations.forEach((a) => {
  const selector = a.targetSelector.replace(/^[.#]/, '');
  const htmlIncludes = a.previewHtml.includes(selector);
  if (!htmlIncludes) {
    selectorMismatches++;
  }
});

assert(selectorMismatches === 0, 'Todos los targetSelector existen en su respectivo previewHtml', `${selectorMismatches} desalineados`);

// 5. Generación Dinámica de Código CSS
console.log('\n5. Generación de CSS Dinámico y Calibrado');
let emptyCss = 0;
let keyframesMissing = 0;

animations.forEach((a) => {
  const css = a.generateCss(a.defaultDuration, a.defaultTiming, 0.1);
  if (!css || typeof css !== 'string' || css.trim().length === 0) {
    emptyCss++;
  }
  // Verificar que el CSS contenga animación, transición o keyframe
  const hasMotionRule = css.includes('animation') || css.includes('transition') || css.includes('@keyframes');
  if (!hasMotionRule) {
    keyframesMissing++;
  }
});

assert(emptyCss === 0, 'Todas las funciones generateCss producen código CSS no vacío', `${emptyCss} vacías`);
assert(keyframesMissing === 0, 'Todo el CSS generado define reglas de movimiento (animation/transition)', `${keyframesMissing} sin reglas`);

// 6. Análisis Matemático de Curvas Bézier
console.log('\n6. Verificación Matemática de Curvas Bézier Cúbicas');
function testTimingParsing(timing) {
  const clean = timing.trim();
  if (['linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out', 'step-start', 'step-end'].includes(clean)) return true;
  if (/^steps\(\s*\d+\s*(,\s*(start|end|jump-start|jump-end|jump-none|jump-both))?\s*\)$/.test(clean)) return true;
  const match = clean.match(/cubic-bezier\(\s*([\d.-]+)\s*,\s*([\d.-]+)\s*,\s*([\d.-]+)\s*,\s*([\d.-]+)\s*\)/);
  if (!match) return false;
  const x1 = parseFloat(match[1]);
  const y1 = parseFloat(match[2]);
  const x2 = parseFloat(match[3]);
  const y2 = parseFloat(match[4]);
  // En especificación CSS, x1 y x2 deben estar en [0..1]
  return x1 >= 0 && x1 <= 1 && x2 >= 0 && x2 <= 1 && !isNaN(y1) && !isNaN(y2);
}

let invalidTimingCurves = 0;
animations.forEach((a) => {
  if (!testTimingParsing(a.defaultTiming)) invalidTimingCurves++;
  a.timingOptions.forEach((opt) => {
    if (!testTimingParsing(opt)) invalidTimingCurves++;
  });
});

assert(invalidTimingCurves === 0, 'Todas las curvas Bézier de aceleración son matemáticamente válidas según CSS Easing spec', `${invalidTimingCurves} inválidas`);

// 7. Accesibilidad: Cobertura de prefers-reduced-motion
console.log('\n7. Cobertura de Accesibilidad (WCAG 2.2 AA / prefers-reduced-motion)');
const accessibilityCssPath = path.join(rootDir, 'src/styles/accessibility.css');
const accessibilityCss = fs.readFileSync(accessibilityCssPath, 'utf8');

assert(accessibilityCss.includes('prefers-reduced-motion: reduce'), 'accessibility.css incluye la directiva prefers-reduced-motion', 'Falta directiva');
assert(accessibilityCss.includes('.reduce-motion-forced'), 'Soporta clase de alternancia manual .reduce-motion-forced', 'Falta clase');

// 8. Verificación de Compilación y Renderizado Estático en Producción (dist/)
console.log('\n8. Integridad de los Artefactos de Producción (dist/index.html)');
const distHtmlPath = path.join(rootDir, 'dist/index.html');
const distExists = fs.existsSync(distHtmlPath);

assert(distExists, 'El bundle de producción dist/index.html existe');

if (distExists) {
  const html = fs.readFileSync(distHtmlPath, 'utf8');
  const cardCount = (html.match(/data-animation-card/g) || []).length;
  const codepenCount = (html.match(/data-open-codepen/g) || []).length;
  const bezierCount = (html.match(/data-curve-container/g) || []).length;
  const bundleBtnCount = (html.match(/data-bundle-toggle/g) || []).length;
  const hasPipelineBar = html.includes('pipeline-filter-bar');
  const hasBundleDock = html.includes('data-bundle-dock');

  assert(cardCount === 120, 'dist/index.html renderiza las 120 tarjetas de animación', `Renderizadas: ${cardCount}`);
  assert(codepenCount === 120, '120 botones de exportación a CodePen renderizados', `Renderizados: ${codepenCount}`);
  assert(bezierCount === 120, '120 visualizadores Bézier interactivos renderizados', `Renderizados: ${bezierCount}`);
  assert(bundleBtnCount === 120, '120 botones de colección de paquete renderizados', `Renderizados: ${bundleBtnCount}`);
  assert(hasPipelineBar, 'Barra de filtro de pipeline (GPU/Paint/Layout) presente en el DOM');
  assert(hasBundleDock, 'Dock flotante de Mi Selección (Bundle Dock) presente en el DOM');
}

console.log('\n================================================================');
console.log(`RESULTADO DE LA AUDITORIA:`);
console.log(`   Pruebas ejecutadas : ${totalChecks}`);
console.log(`   Exitosas           : ${passedChecks}`);
console.log(`   Fallidas           : ${failedChecks}`);
console.log('================================================================\n');

if (failedChecks > 0) {
  console.error('[FALLO] La auditoria reporto fallos. Revisa los detalles arriba.');
  process.exit(1);
} else {
  console.log('[EXITO] TODAS LAS PRUEBAS DE CALIDAD HAN PASADO CON 100% DE EXITO.');
  process.exit(0);
}
