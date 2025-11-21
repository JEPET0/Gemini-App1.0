import React, { useState } from 'react';

const AccordionItem: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 dark:border-gray-700">
      <button 
        className="w-full flex justify-between items-center py-8 text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-xl font-semibold text-gray-900 dark:text-white">{title}</span>
        <span className={`material-icons text-2xl transition-transform duration-300 ${isOpen ? 'rotate-45' : ''} text-black dark:text-white`}>add</span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100 pb-8' : 'max-h-0 opacity-0'}`}>
        <div className="text-xl text-gray-600 dark:text-gray-400">
          {children}
        </div>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <div className="pt-32 pb-32">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        
        {/* Hero Section */}
        <div className="mb-24 lg:mb-40 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
             <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white mb-8 leading-tight">
               Programas diseñados para tu <span className="mark-primary px-2 text-gray-900 dark:text-black transition-colors duration-300">transformación</span>.
             </h1>
             <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
               En MOVE STUDIO, cada servicio está meticulosamente diseñado para ayudarte a alcanzar tus objetivos de salud y rendimiento, combinando ciencia, dedicación y un enfoque personalizado.
             </p>
          </div>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
             <img 
               src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-XpYXSko2T95JtdyE9_8afZPSQq8WcZRqTn2sb17tFd0RH2Q7uJ4IWx70FThQEMGhdK2hY4N8rQH2Sv1cK6G7XHwPEiwDNgv1fNg8R7ZY5kUPLetywci-lqoscPObRZg1QXCIK-2l1GSY3aBz8DOSSrEBjLsj04pTD0MukYgKsMVxIUAne0ZFJvYFE3HHKNrhKjaGkYjhA_6Q5R4-0sBRvaODAyj_RLcBw1UtQy8lh7KA0vIjFBaO6S8uRMFfCrsa_YK9LSbShDU" 
               alt="Fitness training"
               className="w-full h-auto object-cover"
             />
          </div>
        </div>

        {/* Philosophy */}
        <div className="text-center max-w-4xl mx-auto mb-40 bg-gray-100 dark:bg-gray-800/50 p-12 rounded-[2.5rem]">
           <span className="material-icons text-black dark:text-primary text-6xl mb-6">psychology</span>
           <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Nuestra Filosofía</h2>
           <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
             Creemos en un enfoque integral que une mente y cuerpo. No se trata solo de levantar más peso o correr más rápido; se trata de construir una base sólida de movimiento funcional, fuerza sostenible y resiliencia mental.
           </p>
        </div>

        {/* Detailed Services List */}
        <div className="space-y-32">
          
          {/* Personal Training */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-block px-5 py-2 rounded-full bg-primary text-black font-bold text-base mb-6 shadow-sm">1:1</div>
              <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Entrenamiento Personal</h3>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                Maximiza tus resultados con un programa 100% a tu medida. Partiendo de una evaluación inicial exhaustiva, tu entrenador diseñará un plan que se alinee perfectamente con tus objetivos.
              </p>
              <ul className="space-y-4 mb-10">
                {['Programa personalizado y evolutivo', 'Maximización de resultados', 'Flexibilidad horaria total', 'Prevención de lesiones'].map((item, i) => (
                  <li key={i} className="flex items-center text-lg text-gray-700 dark:text-gray-300">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center mr-4">
                        <span className="material-icons text-black text-sm font-bold">check</span>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="px-10 py-4 bg-black dark:bg-white text-white dark:text-black font-bold rounded-xl hover:opacity-90 text-lg transition-colors">Solicitar consulta</button>
            </div>
            <div className="order-1 lg:order-2 rounded-3xl overflow-hidden h-[500px]">
              <img className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAKATQwZWyKdVie1bGOfrY1xjFbUjF6l6pwH1oQnEUrrmthG9ylYdKKLN-jUMmCjWmcR9tCQQPrFvKvROZUB-GHyz53750jpwzgOj0YvlcdFN4g6v5MTgNTcrjt7-ngCNRuSk2ddCMIALtvsb7twG8e3CF0XjC-4SAjtusPmty7wKuwKsxDrD_Y1BpEsSuwN_VAvSJ0evww5Ys1w_ypBiDAs4owIONg56lNUrKrQQL6IhIBrtLTfI-kgI9B9UZ_8vXhY9wn1s4tlY" alt="Personal Trainer" />
            </div>
          </div>

          {/* Groups */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="rounded-3xl overflow-hidden h-[500px]">
              <img className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwNcGTYg-lYU8GiG7W_q13JK7fVf4JvB-C7Hy5baP6snygOgxFzZ7oY3FrT865hSrDPTe3jVeI4IzTaFeDy8Vmm4eUkF2PSySEx87x8N4XJHg1rAMDYbXR5pJfhlCEUxotpAiV0nvvAanCCvNzuY5BEOhO4kr7t5jgIYNYyOEJS03jQjRIttirIHQjQ5C8tjfmeBY2zH5wEZHXTml4f5evv5jn_yXtkte1fGpOin3WgSYDJYSsjDFdbafr6udkBF5bdAVCbRYyhYY" alt="Group Class" />
            </div>
            <div>
              <div className="inline-block px-5 py-2 rounded-full bg-gray-900 text-white dark:bg-gray-800 dark:text-gray-300 font-bold text-base mb-6">Max 6 personas</div>
              <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Grupos Reducidos</h3>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                Combina la energía de la comunidad con la atención de un experto. Ambiente dinámico y motivador sin sacrificar la calidad de la instrucción.
              </p>
              <ul className="space-y-4 mb-10">
                {['Ambiente motivador', 'Supervisión profesional', 'Entrenamientos variados', 'Opción económica'].map((item, i) => (
                  <li key={i} className="flex items-center text-lg text-gray-700 dark:text-gray-300">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center mr-4">
                        <span className="material-icons text-black text-sm font-bold">check</span>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="px-10 py-4 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white font-bold rounded-xl hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors text-lg">Ver horarios</button>
            </div>
          </div>

          {/* Nutrition */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-block px-5 py-2 rounded-full bg-gray-200 text-gray-900 dark:bg-gray-800 dark:text-gray-300 font-bold text-base mb-6">Salud Integral</div>
              <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Nutrición Deportiva</h3>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                El combustible adecuado es clave. Planes de alimentación adaptados a tus objetivos de rendimiento, composición corporal o salud general.
              </p>
              <ul className="space-y-4 mb-10">
                {['Planes 100% personalizados', 'Optimización del rendimiento', 'Mejora de composición corporal', 'Hábitos sostenibles'].map((item, i) => (
                  <li key={i} className="flex items-center text-lg text-gray-700 dark:text-gray-300">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center mr-4">
                        <span className="material-icons text-black text-sm font-bold">check</span>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="px-10 py-4 bg-black dark:bg-white text-white dark:text-black font-bold rounded-xl hover:opacity-90 text-lg transition-colors">Agendar cita</button>
            </div>
            <div className="order-1 lg:order-2 rounded-3xl overflow-hidden h-[500px]">
              <img className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvQoLTXPRw6dlmi9CibGrfe0ukKYpu1L6saC--O3dHr7Mby_DVSnQL7QAX1KG_Zga0NcLVfuIujAIPZXUI63_3Yju4ramYIIOHU3NSzp20zF6ZDAc5PZvEFDVpdRfHHYWTxo8ArHlf_HlyCGyHC_FLPl8LdbDdv9WIr_1ybcf5JUfrQPPy1e6PzJDhwsBS6pTj-yIotI9bAZtCABUIpwXgDmzudvapYKlO5Cuzsk0oKmfeF1ivWS96Rj5To9hrCLRXwlbo3kQ4SVU" alt="Healthy Meal" />
            </div>
          </div>

        </div>

        {/* Comparison Table */}
        <div className="mt-40 max-w-5xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">Comparativa rápida</h3>
          <div className="bg-white dark:bg-surface-dark rounded-3xl overflow-hidden shadow-lg">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[800px] text-left border-collapse">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white">
                    <th className="p-8 font-bold text-xl">Característica</th>
                    <th className="p-8 font-bold text-center text-xl">Entrenamiento Personal</th>
                    <th className="p-8 font-bold text-center text-xl">Grupos Reducidos</th>
                    <th className="p-8 font-bold text-center text-xl">Nutrición</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {[
                    { label: 'Personalización', col1: 'Muy Alta', col2: 'Media', col3: 'Muy Alta' },
                    { label: 'Interacción', col1: '1:1', col2: '1:6', col3: '1:1' },
                    { label: 'Flexibilidad', col1: 'Total', col2: 'Horarios Fijos', col3: 'Total' },
                    { label: 'Inversión', col1: '$$$', col2: '$$', col3: '$$' },
                  ].map((row, idx) => (
                    <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                      <td className="p-8 font-medium text-gray-900 dark:text-white text-lg">{row.label}</td>
                      <td className="p-8 text-center text-gray-600 dark:text-gray-300 text-lg">{row.col1}</td>
                      <td className="p-8 text-center text-gray-600 dark:text-gray-300 text-lg">{row.col2}</td>
                      <td className="p-8 text-center text-gray-600 dark:text-gray-300 text-lg">{row.col3}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-40 max-w-4xl mx-auto">
           <h3 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">Preguntas Frecuentes</h3>
           <div className="space-y-6">
             <AccordionItem title="¿Necesito tener experiencia previa?">
               Absolutamente no. Todos nuestros servicios se adaptan a tu nivel actual. Nuestros entrenadores son expertos en trabajar tanto con principiantes como con atletas avanzados.
             </AccordionItem>
             <AccordionItem title="¿Qué servicio recomiendan para lesiones?">
               Si tienes una lesión activa, recomendamos empezar con Rehabilitación y Readaptación. Un especialista evaluará tu caso.
             </AccordionItem>
             <AccordionItem title="¿Puedo combinar servicios?">
               ¡Sí! Combinar entrenamiento y nutrición es lo más efectivo. Ofrecemos paquetes especiales.
             </AccordionItem>
             <AccordionItem title="¿Con qué frecuencia debo entrenar?">
               Recomendamos entre 2 y 4 sesiones por semana para ver resultados consistentes.
             </AccordionItem>
           </div>
        </div>

      </div>
    </div>
  );
};

export default Services;