// pages/index.js
"use client";
import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Sun, Moon, Languages } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import i18n  from './data/i18n';
import projects from './data/projects.json';
import Image from 'next/image';
import { SkillsView } from './components/skill';
import ContactForm from './components/ContactForm';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [theme, setTheme] = useState('light'); // El estado para manejar el tema del sitio

  const [language, setLanguage] = useState('en'); // El estado para manejar el idioma del sitio
  const { t } = useTranslation(); // Hook para traducir textos
  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en'); // Cambia el idioma del sitio
    i18n.changeLanguage(language);  // Cambia el idioma de i18n
    console.log(language);
  };
  // Detecta si el usuario prefiere el modo oscuro (basado en la preferencia del sistema)
  useEffect(() => {
    // Detecta si el usuario prefiere el modo oscuro (basado en la preferencia del sistema)
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Si el tema ya está guardado en el localStorage, úsalo. Si no, usa la preferencia del sistema
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      setTheme(prefersDarkMode ? 'dark' : 'light');
    }
  }, []);

  useEffect(() => {
    // Cambia la clase en el <body> para aplicar el tema
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(theme);

    // Guarda el tema seleccionado en el localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    // Alterna entre los temas y actualiza el estado
    setTheme(theme === 'dark' ? 'light' : 'dark');
    //console.log(theme);
  };

  // Smooth scroll handler
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
    {/* Navigation */}
    <nav className="fixed top-0 w-full bg-white dark:bg-slate-800 shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#" className="text-xl font-bold text-slate-800 dark:text-slate-200">
            {/* Logo or Brand */}
            Aldo Ulises 
          </a>
  
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8  items-center">
            {['home', 'projects', 'skills', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize ${
                  activeSection === section
                    ? 'text-blue-600 font-medium'
                    : 'text-slate-600 hover:text-blue-500 dark:text-slate-200 dark:hover:text-blue-400'
                }`} 
              >
                {t(section)}
              </button>
            ))}
            { (theme === 'light') ? <Sun size={24} onClick={toggleTheme} className='text-slate-600 hover:text-blue-500 dark:text-slate-200 dark:hover:text-blue-400' /> : <Moon size={24} onClick={toggleTheme} className='text-slate-600 hover:text-blue-500 dark:text-slate-200 dark:hover:text-blue-400' /> }
            <button onClick={toggleLanguage} className="ml-4">
                <Languages size={24}  className='text-slate-600 hover:text-blue-500 dark:text-slate-200 dark:hover:text-blue-400' /> {language === 'en' ? '🇺🇸' : '🇲🇽'}
              </button>
          </div>
  
          {/* Mobile Navigation Toggle */}
          <button
            className="md:hidden text-slate-600 hover:text-blue-500 dark:text-slate-200 dark:hover:text-blue-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
  
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={`absolute top-0 right-0 mt-2 md:hidden  transform transition-all duration-300 
    ${isMenuOpen ? 'translate-x-0 translate-y-0 opacity-100' : 'translate-x-20 -translate-y-20 opacity-0'}
    origin-top-right z-10`} >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-slate-800">
            {['home', 'projects', 'skills', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium  capitalize ${
                  activeSection === section
                    ? 'text-blue-600 font-medium'
                    : 'text-slate-600 hover:text-blue-500 dark:text-slate-200 dark:hover:text-blue-400'
                }`} 
                
              >
                {section}
              </button>
            ))}
           { (theme === 'light') ? 
           <Sun size={24} 
           onClick={toggleTheme} 
           className='ml-4 my-4 mx-3 text-slate-600 hover:text-blue-500 dark:text-slate-200 dark:hover:text-blue-400' 
           /> : <Moon size={24} onClick={toggleTheme} className='ml-4 mx-3text-slate-600 hover:text-blue-500 dark:text-slate-200 dark:hover:text-blue-400' /> }
            <button onClick={toggleLanguage} className="ml-4 flex items-center pt-2">
                <Languages size={24}  className='text-slate-600 hover:text-blue-500 dark:text-slate-200 dark:hover:text-blue-400' /> {language === 'en' ? '🇺🇸' : '🇲🇽'}
              </button>
          </div>
        </div>
      )}
    </nav>
  
    {/* Hero Section */}
    <section
      id="home"
      className="pt-24 pb-12 px-4 md:pt-32 md:pb-24 max-w-6xl mx-auto"
    >
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
          {t('heroTitle')}
        </h1>
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
          {t('heroDescription')}
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="https://github.com/UliBecerra"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/aldo-ulises-becerra-casanova/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:aldoulisesbc@gmail.com"
            className="p-2 text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>
    </section>
  
    {/* Projects Section */}
    <section
      id="projects"
      className="py-12 px-4 bg-white dark:bg-slate-800 pt-24"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
          {t('featuredProjects')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Project Card */}
          {
            projects.projects.map((project, index) => (
              <div className="bg-white rounded-lg shadow-md overflow-hidden dark:bg-slate-700 hover:shadow-white hover:shadow-md"  key={index}>
            {/* <div className="h-48 bg-slate-200 dark:bg-slate-600" /> */}
            <Image src={`https://raw.githubusercontent.com/UliBecerra/uli-beca-portfolio/refs/heads/main/public${project.image}`} alt={project.title} width={400} height={300} />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-slate-100">
                {project.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                {project.description}
              </p>
              <div className="flex justify-between items-center">
                <a
                  href={project.urls[0].url}
                  className="text-blue-600 hover:text-blue-700 flex items-center dark:text-blue-400 dark:hover:text-blue-500"
                >
                  {t('viewMore')} <ExternalLink size={16} className="ml-1" />
                </a>
                <a
                  href={project.urls[1].url}
                  className="text-slate-600 hover:text-slate-700 dark:text-slate-300 dark:hover:text-slate-200"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>
          </div>
            ))
          }
          {/* <div className="bg-white rounded-lg shadow-md overflow-hidden dark:bg-slate-700">
            <div className="h-48 bg-slate-200 dark:bg-slate-600" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-slate-100">
                {t('projectName')}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                {t('projectDescription')}
              </p>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-700 flex items-center dark:text-blue-400 dark:hover:text-blue-500"
                >
                  {t('viewMore')} <ExternalLink size={16} className="ml-1" />
                </a>
                <a
                  href="#"
                  className="text-slate-600 hover:text-slate-700 dark:text-slate-300 dark:hover:text-slate-200"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
    {/* skills section */}

    <section id="skills" className="py-12 px-4 bg-white dark:bg-slate-900 pt-24">
      <div className="max-w-6xl mx-auto ">
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
          {t('skills')}
        </h2>
        <SkillsView  />
      </div>
    
      
    </section>

    {/* contact section */}
    <section id="contact" className="py-12 px-4 bg-white dark:bg-slate-900">
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
          {t('contactForm')}
        </h2>
      <ContactForm  t={t}  />
      </section>
  </div>

  

  
  );
};

export default Portfolio;
