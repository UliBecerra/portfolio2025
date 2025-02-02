import React, { useState } from 'react';
import { TFunction } from 'i18next';
import axios from 'axios';
interface ChildProps {
    t: TFunction; // Usamos TFunction para tipar la función de traducción
  }
  const BASE_URL = 'https://formsubmit.co/ajax/'
const EMAIL = 'aldoulisesbc@gmail.com'
const ContactForm : React.FC<ChildProps> = ({ t }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    resume: null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };



  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const URL =BASE_URL+EMAIL
    // Simulando la llamada a la API
    axios.defaults.headers.post['Content-Type'] = 'application/json';
    axios
      .post(URL, formData)
      .then((res) => {console.log(res)
        setFormStatus(t('contactSuccess'));
        setIsSubmitting(false);
      })
      .catch((err) => console.log(err));
   
  };

  return (
    <div className="container max-w-4xl mx-auto p-6">
        
      {/* Mensaje introductorio */}
      <p className="text-lg  text-gray-700 dark:text-gray-300 mb-6 text-center ">
      {t('contactMesaje')}
              <br />
    {t('contactInvitation')}
      </p>

      {/* Formulario */}
      <form onSubmit={handleSubmit} className="max-w-xl mt-4 mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md dark:shadow-xl  ">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 dark:text-gray-300">{t('formUserName')}</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 dark:text-gray-300">{t('formEmail')}</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 dark:text-gray-300">{t('formMessage')}</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-3 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
            rows={4}
            placeholder=""
          ></textarea>
        </div>

        

        <div className="mb-6">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full p-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-blue-600 dark:hover:bg-blue-500 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
           
            {!isSubmitting ? t('contactSendMessage') : t('contactSendMessageStatus')}
          </button>
        </div>

        {formStatus && (
          <div className={`text-center ${formStatus.includes('exitosamente') ? 'text-red-600' : 'text-green-600'}`}>
            {formStatus}
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
