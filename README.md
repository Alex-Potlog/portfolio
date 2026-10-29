# Portfolio — Hary Alexandru Potlog

Portfolio personal de **Hary Alexandru Potlog**, Cloud Engineer especializado en AWS, con una evolución clara hacia DevOps y algún apoyo puntual de desarrollo backend. El sitio presenta su perfil, habilidades, proyectos y datos de contacto, y está desplegado en **GitHub Pages**.

🔗 **Demo:** [https://alex-potlog.github.io/portfolio/](https://alex-potlog.github.io/portfolio/)

## Características

- **Diseño responsive** adaptado a escritorio, tablet y móvil.
- **Tema claro y oscuro** con preferencia guardada en `localStorage`.
- **Multilenguaje**: español (por defecto), catalán e inglés, con la selección persistida en `localStorage`.
- **Animaciones de aparición** al hacer scroll mediante `IntersectionObserver`, respetando `prefers-reduced-motion`.
- **Navegación por secciones**: Inicio, Sobre mí, Habilidades, Proyectos y Contacto.
- **Sin dependencias ni build**: solo HTML, CSS y JavaScript vanilla.

## Secciones

| Sección | Contenido |
| --- | --- |
| Inicio | Presentación, badges de certificaciones y enlaces a GitHub, LinkedIn y email |
| Sobre mí | Cloud como especialidad, con DevOps como siguiente paso y apoyo puntual de backend |
| Habilidades | Cloud destacado como foco principal, seguido de Desarrollo backend como complemento y DevOps & tools |
| Proyectos | Tarjetas de proyectos con foco cloud, automatización y serverless |
| Contacto | Ubicación, email y teléfono |

## Tecnologías

- **HTML5** semántico
- **CSS3** (variables, grid, flexbox, animaciones)
- **JavaScript** (ES6, sin frameworks)
- **Google Fonts** (Inter)

## Estructura del proyecto

```
portfolio/
├── index.html    # Estructura y contenido del sitio
├── styles.css    # Estilos, temas y animaciones
├── script.js     # Traducciones, tema, menú móvil y animaciones
└── README.md
```

## Ejecutar en local

No requiere instalación ni compilación. Basta con abrir `index.html` en el navegador o servir la carpeta con cualquier servidor estático:

```bash
# Opción 1: Python
python3 -m http.server 8000

# Opción 2: Node.js
npx serve .
```

Después, abre [http://localhost:8000](http://localhost:8000).

## Despliegue en GitHub Pages

El sitio se publica directamente desde la rama `main`:

1. En el repositorio, ve a **Settings → Pages**.
2. En *Build and deployment*, selecciona **Deploy from a branch**.
3. Elige la rama `main` y la carpeta `/ (root)`.
4. Guarda los cambios; GitHub publicará el sitio en `https://alex-potlog.github.io/portfolio/`.

## Personalización

- **Contenido y textos:** edita `index.html` y el objeto `translations` en `script.js` (claves `es`, `ca` y `en`).
- **Idioma por defecto:** cambia la constante `DEFAULT_LANGUAGE` en `script.js`.
- **Colores y tipografía:** modifica las variables CSS definidas al inicio de `styles.css`.
- **Tema inicial:** el sitio usa el tema oscuro por defecto; el claro se activa desde el botón de la cabecera.

## Contacto

- **Email:** [alexpotloghary@gmail.com](mailto:alexpotloghary@gmail.com)
- **Teléfono:** [+34 667 996 420](tel:+34667996420)
- **GitHub:** [Alex-Potlog](https://github.com/Alex-Potlog)
- **LinkedIn:** [Hary Alexandru Potlog](https://www.linkedin.com/in/hary-alexandru-potlog-potlog-26a7382b4)
- **Ubicación:** Mataró, Barcelona
