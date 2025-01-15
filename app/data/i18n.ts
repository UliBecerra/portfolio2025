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
        contactForm: "Contact Form",
        contactMesaje: "Hello! I'm a professional web developer with experience in various technologies. If you're interested in working with me, please fill out the form below and I'll get back to you as soon as possible.",
        contactInvitation: "Fill out the form below and I'll get back to you as soon as possible.",
        contactSendMessage: "Send Message",
        contactSendMessageStatus: "Sending...",
        formUserName: "Full Name",
        formEmail: "Email",
        formMessage: "Message",
        heroTitle: "Full Stack Web Developer",
        heroDescription: "Passionate about creating exceptional web experiences. Specialized in React, Node.js, and modern UI design.",
        featuredProjects: "Featured Projects",
        projectName: "Project Name",
        projectDescription: "Brief description of the project and technologies used.",
        viewMore: "View More",
        contactSuccess: "Your message has been sent successfully.",
      },
    },
    es: {
      translation: {
        home: "Inicio",
        projects: "Proyectos",
        skills: "Habilidades",
        contact: "Contacto",
        contactForm: "Formulario de Contacto",
        contactMesaje: "¡Hola! Soy un desarrollador web profesional con experiencia en varias tecnologías. Si estás interesado en trabajar conmigo, por favor, completa el formulario a continuación y te pondré en contacto lo antes posible.",
        contactInvitation: "Completa el formulario a continuación y me pondré en contacto contigo lo más pronto posible.",
        contactSendMessage: "Enviar Mensaje",
        contactSendMessageStatus: "Enviando...",
        formUserName: "Nombre Completo",
        formEmail: "Correo Electrónico",
        formMessage: "Mensaje",
        heroTitle: "Desarrollador Web Full Stack",
        heroDescription: "Apasionado por crear experiencias web excepcionales. Especializado en React, Node.js y diseño de interfaces modernas.",
        featuredProjects: "Proyectos Destacados",
        projectName: "Nombre del Proyecto",
        projectDescription: "Descripción breve del proyecto y las tecnologías utilizadas.",
        viewMore: "Ver Más",
        contactSuccess: "Tu mensaje ha sido enviado con éxito.",
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
