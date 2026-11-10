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
| Proyectos | Tarjetas de proyectos con foco cloud, automatización y serverless, con el servidor de Minecraft en AWS como proyecto destacado |
| Contacto | Ubicación, email y teléfono |

### Proyecto destacado: servidor de Minecraft en AWS

Servidor de Minecraft desplegado en **EC2** dentro de una **VPC**, pensado para no tener la instancia encendida las 24 horas. Una web estática protegida por contraseña envía la petición a **API Gateway**, que invoca una función **Lambda** con permisos **IAM** limitados para arrancar o parar la instancia. Así el servidor solo consume recursos cuando hay partida.

## Tecnologías

- **HTML5** semántico
- **CSS3** (variables, grid, flexbox, animaciones)
- **JavaScript** (ES6, sin frameworks)
- **Google Fonts** (Inter)

## Estructura del proyecto

```
portfolio/
├── index.html        # Estructura y contenido del sitio
├── styles.css        # Estilos, temas y animaciones
├── script.js         # Traducciones, tema, menú móvil y animaciones
├── assets/
│   └── profile.jpg   # Foto de perfil
└── README.md
```
## Contacto

- **Email:** [alexpotloghary@gmail.com](mailto:alexpotloghary@gmail.com)
- **Teléfono:** [+34 667 996 420](tel:+34667996420)
- **GitHub:** [Alex-Potlog](https://github.com/Alex-Potlog)
- **LinkedIn:** [Hary Alexandru Potlog](https://www.linkedin.com/in/hary-alexandru-potlog-potlog-26a7382b4)
- **Ubicación:** Mataró, Barcelona
