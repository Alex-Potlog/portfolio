const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const year = document.getElementById("year");
const themeToggle = document.querySelector(".theme-toggle");
const themeIcon = document.querySelector(".theme-icon");
const themeLabel = document.querySelector(".theme-label");
const languageButtons = document.querySelectorAll(".lang-btn");

const DEFAULT_LANGUAGE = "es";

const translations = {
  es: {
    "nav.about": "Sobre mí",
    "nav.skills": "Habilidades",
    "nav.projects": "Proyectos",
    "nav.contact": "Contacto",
    "hero.eyebrow": "Cloud Engineer • AWS • Automatización • DevOps",
    "hero.title": "Cloud Engineer especializado en AWS.",
    "hero.lead": "Soy Hary Alexandru Potlog, Cloud Engineer especializado en AWS. Mi trabajo se centra en diseñar infraestructura escalable, segura y automatizada. De vez en cuando también echo una mano con el desarrollo backend de lo que corre sobre ella.",
    "hero.badge1": "Cloud Foundations",
    "hero.badge2": "Solutions Architect (en curso)",
    "hero.buttonProjects": "Ver proyectos",
    "hero.buttonContact": "Hablemos",
    "hero.email": "Email",
    "metric1Title": "Cloud",
    "metric1Text": "Engineer",
    "metric2Title": "Code",
    "metric2Text": "Backend",
    "metric3Title": "DevOps",
    "metric3Text": "Path",
    "about.eyebrow": "Sobre mí",
    "about.title": "Cloud como especialidad, con DevOps como siguiente paso.",
    "about.p1": "Mi especialidad es el cloud: diseñar infraestructuras en AWS escalables, seguras y bien automatizadas. Cuando el proyecto lo pide, también entiendo cómo se construyen, despliegan y mantienen las aplicaciones que corren sobre esa infraestructura.",
    "about.p2": "Tengo experiencia y formación en Cloud Computing, AWS, automatización y Lambda, con base en Java, Laravel y PHP. Esa base me ayuda a entenderme con los equipos de software en entornos DevOps.",
    "about.card1Title": "Cloud Engineering",
    "about.card1Tag": "Foco principal",
    "about.card1Text": "Mi foco: arquitectura AWS, escalabilidad, seguridad y rendimiento.",
    "about.card2Title": "Backend como apoyo",
    "about.card2Text": "Base en Java, PHP y Laravel para entender el software que corre en la nube cuando hace falta.",
    "about.card3Title": "DevOps mindset",
    "about.card3Text": "Objetivo profesional claro: evolucionar hacia DevOps mediante automatización, despliegues y observabilidad.",
    "skills.eyebrow": "Habilidades",
    "skills.title": "Cloud primero, con DevOps como apoyo.",
    "skills.groupCloud": "Cloud",
    "skills.cloudTag": "Foco principal",
    "skills.cloudNote": "Mi especialidad: diseñar, asegurar y automatizar infraestructura en AWS.",
    "skills.groupCode": "Desarrollo backend",
    "skills.codeTag": "Complemento",
    "skills.groupTools": "DevOps & tools",
    "projects.eyebrow": "Proyectos",
    "projects.title": "Proyectos con foco cloud y automatización.",
    "projects.card1Title": "Infraestructura cloud",
    "projects.card1Tag": "Foco cloud",
    "projects.card1Text": "Diseño de soluciones en AWS con enfoque en escalabilidad y rendimiento.",
    "projects.card2Title": "Aplicaciones backend",
    "projects.card2Text": "Desarrollo con Java, PHP y Laravel para crear servicios robustos y mantenibles.",
    "projects.card3Title": "Serverless + automation",
    "projects.card3Text": "Implementación de Lambda y automatización para procesos más ágiles y eficientes.",
    "projects.cardLink": "Ver proyecto",
    "contact.eyebrow": "Contacto",
    "contact.title": "¿Te ha gustado el perfil? Contacta conmigo para saber más.",
    "contact.emailButton": "alexpotloghary@gmail.com",
    "footer.text": "©",
    "footer.rights": "Todos los derechos reservados."
  },
  ca: {
    "nav.about": "Sobre mi",
    "nav.skills": "Habilitats",
    "nav.projects": "Projectes",
    "nav.contact": "Contacte",
    "hero.eyebrow": "Cloud Engineer • AWS • Automatització • DevOps",
    "hero.title": "Cloud Engineer especialitzat en AWS.",
    "hero.lead": "Sóc Hary Alexandru Potlog, Cloud Engineer especialitzat en AWS. La meva feina se centra a dissenyar infraestructura escalable, segura i automatitzada. De tant en tant també dono un cop de mà amb el desenvolupament backend del que hi corre a sobre.",
    "hero.badge1": "Cloud Foundations",
    "hero.badge2": "Solutions Architect (en curs)",
    "hero.buttonProjects": "Veure projectes",
    "hero.buttonContact": "Parlem",
    "hero.email": "Email",
    "metric1Title": "Cloud",
    "metric1Text": "Engineer",
    "metric2Title": "Code",
    "metric2Text": "Backend",
    "metric3Title": "DevOps",
    "metric3Text": "Path",
    "about.eyebrow": "Sobre mi",
    "about.title": "Cloud com a especialitat, amb DevOps com a següent pas.",
    "about.p1": "La meva especialitat és el cloud: dissenyar infraestructures a AWS escalables, segures i ben automatitzades. Quan el projecte ho demana, també entenc com es construeixen, despleguen i mantenen les aplicacions que corren sobre aquesta infraestructura.",
    "about.p2": "Tinc experiència i formació en Cloud Computing, AWS, automatització i Lambda, amb base en Java, Laravel i PHP. Aquesta base m'ajuda a entendre'm amb els equips de programari en entorns DevOps.",
    "about.card1Title": "Cloud Engineering",
    "about.card1Tag": "Focus principal",
    "about.card1Text": "El meu focus: arquitectura AWS, escalabilitat, seguretat i rendiment.",
    "about.card2Title": "Backend com a suport",
    "about.card2Text": "Base en Java, PHP i Laravel per entendre el programari que corre al núvol quan cal.",
    "about.card3Title": "DevOps mindset",
    "about.card3Text": "Objectiu professional clar: evolucionar cap a DevOps mitjançant automatització, desplegaments i observabilitat.",
    "skills.eyebrow": "Habilitats",
    "skills.title": "Cloud primer, amb DevOps com a suport.",
    "skills.groupCloud": "Cloud",
    "skills.cloudTag": "Focus principal",
    "skills.cloudNote": "La meva especialitat: dissenyar, assegurar i automatitzar infraestructura a AWS.",
    "skills.groupCode": "Desenvolupament backend",
    "skills.codeTag": "Complement",
    "skills.groupTools": "DevOps & tools",
    "projects.eyebrow": "Projectes",
    "projects.title": "Projectes amb focus cloud i automatització.",
    "projects.card1Title": "Infraestructura cloud",
    "projects.card1Tag": "Focus cloud",
    "projects.card1Text": "Disseny de solucions a AWS amb enfocament en escalabilitat i rendiment.",
    "projects.card2Title": "Aplicacions backend",
    "projects.card2Text": "Desenvolupament amb Java, PHP i Laravel per crear serveis robustos i mantenibles.",
    "projects.card3Title": "Serverless + automation",
    "projects.card3Text": "Implementació de Lambda i automatització per a processos més àgils i eficients.",
    "projects.cardLink": "Veure projecte",
    "contact.eyebrow": "Contacte",
    "contact.title": "T'ha agradat el perfil? Contacta amb mi per saber-ne més.",
    "contact.emailButton": "alexpotloghary@gmail.com",
    "footer.text": "©",
    "footer.rights": "Tots els drets reservats."
  },
  en: {
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "hero.eyebrow": "Cloud Engineer • AWS • Automation • DevOps",
    "hero.title": "Cloud Engineer specialised in AWS.",
    "hero.lead": "I am Hary Alexandru Potlog, a Cloud Engineer specialised in AWS. My work focuses on designing scalable, secure, and automated infrastructure. Every now and then I also lend a hand with the backend development of what runs on it.",
    "hero.badge1": "Cloud Foundations",
    "hero.badge2": "Solutions Architect (in progress)",
    "hero.buttonProjects": "View projects",
    "hero.buttonContact": "Let’s talk",
    "hero.email": "Email",
    "metric1Title": "Cloud",
    "metric1Text": "Engineer",
    "metric2Title": "Code",
    "metric2Text": "Backend",
    "metric3Title": "DevOps",
    "metric3Text": "Path",
    "about.eyebrow": "About me",
    "about.title": "Cloud as the specialty, with DevOps as the next step.",
    "about.p1": "My specialty is cloud: designing scalable, secure, and well-automated AWS infrastructure. When the project calls for it, I also understand how the applications running on that infrastructure are built, deployed, and maintained.",
    "about.p2": "I have experience and training in Cloud Computing, AWS, automation, and Lambda, with a foundation in Java, Laravel, and PHP. That foundation helps me communicate with software teams in DevOps environments.",
    "about.card1Title": "Cloud Engineering",
    "about.card1Tag": "Main focus",
    "about.card1Text": "My focus: AWS architecture, scalability, security, and performance.",
    "about.card2Title": "Backend as support",
    "about.card2Text": "A foundation in Java, PHP, and Laravel to understand the software running in the cloud when needed.",
    "about.card3Title": "DevOps mindset",
    "about.card3Text": "Clear professional goal: evolve toward DevOps through automation, deployments, and observability.",
    "skills.eyebrow": "Skills",
    "skills.title": "Cloud first, with DevOps as support.",
    "skills.groupCloud": "Cloud",
    "skills.cloudTag": "Main focus",
    "skills.cloudNote": "My specialty: designing, securing, and automating AWS infrastructure.",
    "skills.groupCode": "Backend development",
    "skills.codeTag": "Complement",
    "skills.groupTools": "DevOps & tools",
    "projects.eyebrow": "Projects",
    "projects.title": "Cloud-focused projects and automation.",
    "projects.card1Title": "Cloud infrastructure",
    "projects.card1Tag": "Cloud focus",
    "projects.card1Text": "Design of AWS solutions focused on scalability and performance.",
    "projects.card2Title": "Backend applications",
    "projects.card2Text": "Development with Java, PHP, and Laravel to build robust, maintainable services.",
    "projects.card3Title": "Serverless + automation",
    "projects.card3Text": "Implementation of Lambda and automation to create faster, more efficient processes.",
    "projects.cardLink": "View project",
    "contact.eyebrow": "Contact",
    "contact.title": "Did you like the profile? Get in touch to find out more.",
    "contact.emailButton": "alexpotloghary@gmail.com",
    "footer.text": "©",
    "footer.rights": "All rights reserved."
  }
};

function applyTheme(theme) {
  const isLight = theme === "light";
  document.body.classList.toggle("light-theme", isLight);

  if (themeIcon) themeIcon.textContent = isLight ? "☀️" : "🌙";
  if (themeLabel) themeLabel.textContent = isLight ? "Claro" : "Oscuro";

  if (themeToggle) {
    themeToggle.setAttribute("aria-pressed", String(isLight));
    themeToggle.setAttribute("aria-label", isLight ? "Cambiar a modo oscuro" : "Cambiar a modo claro");
  }
}

function setLanguage(lang) {
  const dictionary = translations[lang] || translations[DEFAULT_LANGUAGE];
  const activeLanguage = translations[lang] ? lang : DEFAULT_LANGUAGE;
  const languageEntries = document.querySelectorAll("[data-i18n]");
  document.documentElement.lang = activeLanguage;

  languageEntries.forEach((element) => {
    const key = element.getAttribute("data-i18n");
    const value = dictionary[key];
    if (value) {
      element.textContent = value;
    }
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.lang === activeLanguage;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  localStorage.setItem("language", activeLanguage);
}

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => navLinks.classList.toggle("open"));
}

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
  applyTheme("light");
} else {
  applyTheme("dark");
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const isLight = document.body.classList.contains("light-theme");
    const nextTheme = isLight ? "dark" : "light";
    localStorage.setItem("theme", nextTheme);
    applyTheme(nextTheme);
  });
}

const savedLanguage = localStorage.getItem("language") || DEFAULT_LANGUAGE;
setLanguage(savedLanguage);

languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang || DEFAULT_LANGUAGE));
});

if (year) {
  year.textContent = new Date().getFullYear();
}

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

function setupScrollReveal() {
  if (prefersReducedMotion.matches || !("IntersectionObserver" in window)) return;

  const targets = document.querySelectorAll(
    ".section-heading, .about-card, .about-list > div, .skill-group, .project-card, .contact-box"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const element = entry.target;
        element.classList.add("is-visible");

        const delay = Number.parseFloat(element.style.getPropertyValue("--reveal-delay")) || 0;
        let finished = false;
        let timer;

        const finishReveal = () => {
          if (finished) return;
          finished = true;
          clearTimeout(timer);
          element.removeEventListener("animationend", onAnimationEnd);
          element.classList.remove("reveal", "is-visible");
          element.style.removeProperty("--reveal-delay");
        };

        function onAnimationEnd(event) {
          if (event.target === element) finishReveal();
        }

        element.addEventListener("animationend", onAnimationEnd);
        timer = setTimeout(finishReveal, delay + 900);

        observer.unobserve(element);
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );

  targets.forEach((element) => {
    const siblings = Array.from(element.parentElement.children);
    const index = siblings.indexOf(element);
    const delay = Math.min(index, 4) * 70;

    element.style.setProperty("--reveal-delay", `${delay}ms`);
    element.classList.add("reveal");
    observer.observe(element);
  });
}

setupScrollReveal();
