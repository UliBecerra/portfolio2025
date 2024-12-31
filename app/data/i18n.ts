// i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        home: "Home",
        projects: "Projects",
        skills: "Skills",
        contact: "Contact",
        heroTitle: "Full Stack Web Developer",
        heroDescription: "Passionate about creating exceptional web experiences. Specialized in React, Node.js, and modern UI design.",
        featuredProjects: "Featured Projects",
        projectName: "Project Name",
        projectDescription: "Brief description of the project and technologies used.",
        viewMore: "View More",
      },
    },
    es: {
      translation: {
        home: "Inicio",
        projects: "Proyectos",
        skills: "Habilidades",
        contact: "Contacto",
        heroTitle: "Desarrollador Web Full Stack",
        heroDescription: "Apasionado por crear experiencias web excepcionales. Especializado en React, Node.js y diseño de interfaces modernas.",
        featuredProjects: "Proyectos Destacados",
        projectName: "Nombre del Proyecto",
        projectDescription: "Descripción breve del proyecto y las tecnologías utilizadas.",
        viewMore: "Ver Más",
      },
    },
  },
  lng: 'en', // Idioma por defecto
  fallbackLng: 'en', // Idioma de reserva en caso de que no haya traducción disponible
  interpolation: {
    escapeValue: false, // No es necesario escapar en React
  },
});

export default i18n;
