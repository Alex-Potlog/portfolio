const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const year = document.getElementById("year");
const themeToggle = document.querySelector(".theme-toggle");
const themeIcon = document.querySelector(".theme-icon");
const themeLabel = document.querySelector(".theme-label");
const languageButtons = document.querySelectorAll(".lang-btn");

const translations = {
  ca: {
    "nav.about": "Sobre mi",
    "nav.skills": "Habilitats",
    "nav.projects": "Projectes",
    "nav.contact": "Contacte",
    "hero.eyebrow": "Cloud Engineer • Backend • DevOps Path • AWS",
    "hero.title": "Cloud Engineer amb base sòlida en codi i visió cap a DevOps.",
    "hero.lead": "Sóc Hary Alexandru Potlog, Cloud Engineer amb coneixements extensius de desenvolupament i una clara evolució cap a DevOps. Combino infraestructura cloud, automatització i programació per crear solucions escalables, segures i preparades per créixer.",
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
    "about.title": "Perfil híbrid: cloud + desenvolupament + evolució cap a DevOps.",
    "about.p1": "M'apassiona l'ecosistema cloud, però el meu valor afegit és que no només dissenyo infraestructures: també entenc com es construeixen, despleguen i mantenen les aplicacions que corren sobre elles.",
    "about.p2": "Tinc experiència i formació en Cloud Computing, automatització, AWS, Java, Laravel, PHP i Lambda, amb una evolució clara cap a rols DevOps on la combinació d'infraestructura, automatització, pipelines i desenvolupament aporta un avantatge real per a qualsevol negoci o equip.",
    "about.card1Title": "Cloud Engineering",
    "about.card1Text": "Disseny de solucions cloud centrades en escalabilitat, seguretat i rendiment.",
    "about.card2Title": "Backend Development",
    "about.card2Text": "Base sòlida en Java, PHP i Laravel per entendre l'aplicació que corre al núvol.",
    "about.card3Title": "DevOps mindset",
    "about.card3Text": "Objectiu professional clar: evolucionar cap a DevOps mitjançant automatització, desplegaments i observabilitat.",
    "skills.eyebrow": "Habilitats",
    "skills.title": "Competències útils per a Cloud + Codi + futur DevOps.",
    "skills.groupCloud": "Cloud",
    "skills.groupCode": "Codi",
    "skills.groupTools": "DevOps & tools",
    "projects.eyebrow": "Projectes",
    "projects.title": "Solucions amb enfocament en núvol, automatització i codi.",
    "projects.card1Title": "Infraestructura cloud",
    "projects.card1Text": "Disseny de solucions a AWS amb enfocament en escalabilitat i rendiment.",
    "projects.card2Title": "Aplicacions backend",
    "projects.card2Text": "Desenvolupament amb Java, PHP i Laravel per crear serveis robustos i mantenibles.",
    "projects.card3Title": "Serverless + automation",
    "projects.card3Text": "Implementació de Lambda i automatització per a processos més àgils i eficients.",
    "projects.cardLink": "Veure projecte",
    "contact.eyebrow": "Contacte",
    "contact.title": "Parlem d'una oportunitat Cloud / DevOps amb base en desenvolupament?",
    "contact.emailButton": "alexpotloghary@gmail.com",
    "footer.text": "©",
    "footer.rights": "Tots els drets reservats."
  },
  en: {
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "hero.eyebrow": "Cloud Engineer • Backend • DevOps Path • AWS",
    "hero.title": "Cloud Engineer with a strong coding base and a clear DevOps vision.",
    "hero.lead": "I am Hary Alexandru Potlog, a Cloud Engineer with extensive software development knowledge and a clear progression toward DevOps. I combine cloud infrastructure, automation, and programming to build scalable, secure, and growth-ready solutions.",
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
    "about.title": "Hybrid profile: cloud + development + evolution toward DevOps.",
    "about.p1": "I am passionate about the cloud ecosystem, but my added value is that I do not only design infrastructure: I also understand how applications running on it are built, deployed, and maintained.",
    "about.p2": "I have experience and training in Cloud Computing, automation, AWS, Java, Laravel, PHP, and Lambda, with a clear evolution toward DevOps roles where the combination of infrastructure, automation, pipelines, and development creates real value for any business or team.",
    "about.card1Title": "Cloud Engineering",
    "about.card1Text": "Design of cloud solutions focused on scalability, security, and performance.",
    "about.card2Title": "Backend Development",
    "about.card2Text": "Strong foundation in Java, PHP, and Laravel to understand the application running in the cloud.",
    "about.card3Title": "DevOps mindset",
    "about.card3Text": "Clear professional goal: evolve toward DevOps through automation, deployments, and observability.",
    "skills.eyebrow": "Skills",
    "skills.title": "Relevant skills for Cloud + Code + future DevOps.",
    "skills.groupCloud": "Cloud",
    "skills.groupCode": "Code",
    "skills.groupTools": "DevOps & tools",
    "projects.eyebrow": "Projects",
    "projects.title": "Solutions focused on cloud, automation, and code.",
    "projects.card1Title": "Cloud infrastructure",
    "projects.card1Text": "Design of AWS solutions focused on scalability and performance.",
    "projects.card2Title": "Backend applications",
    "projects.card2Text": "Development with Java, PHP, and Laravel to build robust, maintainable services.",
    "projects.card3Title": "Serverless + automation",
    "projects.card3Text": "Implementation of Lambda and automation to create faster, more efficient processes.",
    "projects.cardLink": "View project",
    "contact.eyebrow": "Contact",
    "contact.title": "Shall we talk about a Cloud / DevOps opportunity with a development background?",
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
  const languageEntries = document.querySelectorAll("[data-i18n]");
  document.documentElement.lang = lang;

  languageEntries.forEach((element) => {
    const key = element.getAttribute("data-i18n");
    const value = translations[lang][key];
    if (value) {
      element.textContent = value;
    }
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.lang === lang;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  localStorage.setItem("language", lang);
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

const savedLanguage = localStorage.getItem("language") || "ca";
setLanguage(savedLanguage);

languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

if (year) {
  year.textContent = new Date().getFullYear();
}
