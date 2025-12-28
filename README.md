# Loopstudios Landing Page

## Enfoque General

Este proyecto es una landing page para Loopstudios, una empresa especializada en experiencias de realidad virtual.

### Características principales:

- Header hero con navegación responsive
- Sección destacada sobre la empresa
- Galería de creaciones VR con hover effects
- Footer con enlaces y redes sociales
- Diseño mobile-first

## Decisiones Relevantes de CSS

### Variables de color y tipografía

Implementé CSS custom properties para mantener coherencia visual:

```css
--color-white: #ffffff
--color-black: #000000
--main-font: "Josefin Sans" (headings uppercase)
--secondary-font: "Alata" (body text)
```

### Utility classes

Clases reutilizables (`flex-row`, `flex-column`, `main-font`, `secondary-font`) para evitar repetición y facilitar mantenimiento.

### Animaciones y efectos

- **Links underline effect**: Línea blanca que se expande al hover usando `scaleX()`
- **Creations hover**: Efecto de filtro (`grayscale`, `brightness`, `saturate`) con transición suave
- **Button hover**: Inversión de colores (fondo blanco/negro)

### Layout estratégico

- Uso de CSS Grid en footer para alineación precisa
- Posicionamiento absoluto para elementos superpuestos (títulos en creaciones)

## Responsive Design

Implementé **mobile-first** con tres breakpoints principales:

### Mobile (< 768px)

- Layout vertical, padding reducido
- Navegación hamburguesa con overlay full-screen
- Imágenes optimizadas para móvil

### Tablet (768px+)

- Aumento de tipografía y espaciado
- Hero image desktop
- Footer con grid layout

### Desktop (1024px+)

- Navegación visible en header
- Sección "The leader in interactive VR" con texto superpuesto
- Galería de creaciones en grid de 4 columnas
- Botón "See all" posicionado absolutamente

### Breakpoint adicional (1440px+)

- Ajuste de gaps en galería para mejor visualización

**Técnicas utilizadas:**

- Media queries para cambiar `display`, `padding`, `font-size`
- `<picture>` tags con `<source>` para imágenes responsive
- Toggle classes (`.active`, `.overflow`) manejadas por JavaScript

## Mejoras a Considerar

### Accesibilidad

- Validar contraste de colores (especialmente en hover effects)
- Agregar focus states visibles para navegación por teclado
- Mejorar aria-labels en botones

### Mantenibilidad

- Crear componentes reutilizables

## Links

- Deploy URL: [Loopstudios Landing Page](https://leslief10.github.io/)
- Repo URL: [Loopstudios Landing Page](https://github.com/leslief10/)
