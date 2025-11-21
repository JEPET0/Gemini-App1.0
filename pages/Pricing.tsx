import React from 'react';

const Pricing: React.FC = () => {
  return (
    <div className="pt-32 pb-32">
      <div className="container mx-auto px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-24">
           <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white mb-8">Planes y Precios</h1>
           <p className="text-2xl text-gray-600 dark:text-gray-400">
             Encuentra el plan perfecto para transformar tu cuerpo y mente. Sin matrículas ocultas.
           </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-32">
          
          {/* Basic Plan */}
          <div className="bg-white dark:bg-surface-dark rounded-3xl p-10 border border-gray-200 dark:border-gray-800 flex flex-col">
            <h3 className="text-gray-500 dark:text-gray-400 uppercase tracking-wider font-semibold text-base">Esencial</h3>
            <div className="mt-6 flex items-baseline">
               <span className="text-6xl font-extrabold text-gray-900 dark:text-white">$89</span>
               <span className="ml-2 text-gray-500 text-xl">/mes</span>
            </div>
            <p className="mt-6 text-gray-600 dark:text-gray-400 text-base">Para construir una base sólida.</p>
            <ul className="mt-10 space-y-5 flex-1">
               {['Hasta 4 clases grupales', 'Acceso total instalaciones', 'Reserva 7 días antelación', 'Vestuarios premium'].map((item, i) => (
                 <li key={i} className="flex items-center text-base text-gray-700 dark:text-gray-300">
                   <span className="material-icons text-black dark:text-primary mr-4 text-xl">check_circle</span>
                   {item}
                 </li>
               ))}
               <li className="flex items-center text-base text-gray-400">
                  <span className="material-icons mr-4 text-xl">cancel</span>
                  Sin clases especialidad
               </li>
            </ul>
            <button className="mt-10 w-full py-4 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white font-bold rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-lg">Empezar Ahora</button>
          </div>

          {/* Pro Plan */}
          <div className="bg-gray-900 dark:bg-white rounded-3xl p-10 relative transform lg:-translate-y-6 shadow-2xl flex flex-col">
            <div className="absolute top-0 right-0 bg-primary text-black text-sm font-bold px-4 py-2 rounded-bl-2xl rounded-tr-2xl">POPULAR</div>
            <h3 className="text-gray-400 dark:text-gray-500 uppercase tracking-wider font-semibold text-base">Performance</h3>
            <div className="mt-6 flex items-baseline">
               <span className="text-6xl font-extrabold text-white dark:text-gray-900">$150</span>
               <span className="ml-2 text-gray-400 dark:text-gray-500 text-xl">/mes</span>
            </div>
            <p className="mt-6 text-gray-300 dark:text-gray-600 text-base">Compromiso regular y resultados visibles.</p>
            <ul className="mt-10 space-y-5 flex-1">
               {['12 clases grupales', 'Acceso total instalaciones', 'Reserva 14 días antelación', 'Vestuarios premium', '1 clase especialidad', '10% descuento talleres'].map((item, i) => (
                 <li key={i} className="flex items-center text-base text-white dark:text-gray-900">
                   <span className="material-icons text-primary dark:text-black mr-4 text-xl">check_circle</span>
                   {item}
                 </li>
               ))}
            </ul>
            <button className="mt-10 w-full py-4 bg-primary text-black font-bold rounded-xl hover:brightness-110 transition-colors text-lg">Elegir Plan</button>
          </div>

          {/* Elite Plan */}
          <div className="bg-white dark:bg-surface-dark rounded-3xl p-10 border border-gray-200 dark:border-gray-800 flex flex-col">
            <h3 className="text-gray-500 dark:text-gray-400 uppercase tracking-wider font-semibold text-base">Elite</h3>
            <div className="mt-6 flex items-baseline">
               <span className="text-6xl font-extrabold text-gray-900 dark:text-white">$350</span>
               <span className="ml-2 text-gray-500 text-xl">/mes</span>
            </div>
            <p className="mt-6 text-gray-600 dark:text-gray-400 text-base">Transformación total personalizada.</p>
            <ul className="mt-10 space-y-5 flex-1">
               {['Clases Ilimitadas', '4 Entrenamientos Personales', 'Plan Nutrición', 'Seguimiento mensual', 'Lavandería ropa entreno'].map((item, i) => (
                 <li key={i} className="flex items-center text-base text-gray-700 dark:text-gray-300">
                   <span className="material-icons text-black dark:text-primary mr-4 text-xl">check_circle</span>
                   {item}
                 </li>
               ))}
            </ul>
            <button className="mt-10 w-full py-4 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white font-bold rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-lg">Obtener Elite</button>
          </div>

        </div>

        {/* Enhanced Steps Section */}
        <div className="text-center mb-12">
           <h2 className="text-4xl md:text-5xl font-bold mb-20 text-gray-900 dark:text-white">Tu Camino al Éxito</h2>
           
           <div className="relative max-w-6xl mx-auto">
              {/* Connecting Line (Desktop) - Precise positioning to center of first and last columns */}
              <div className="hidden md:block absolute top-12 left-[16.66%] right-[16.66%] h-1 bg-gray-200 dark:bg-gray-800 z-0 rounded-full"></div>
              
              {/* Connecting Line (Mobile) - Continuous vertical line */}
              <div className="md:hidden absolute top-12 bottom-0 left-1/2 w-1 bg-gray-200 dark:bg-gray-800 -translate-x-1/2 z-0 rounded-full"></div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative z-10">
                 
                 {/* Step 1 */}
                 <div className="group relative flex flex-col items-center">
                    <div className="relative z-10 bg-white dark:bg-surface-dark w-24 h-24 rounded-full border-4 border-primary flex items-center justify-center shadow-[0_0_20px_rgba(130,253,20,0.2)] group-hover:shadow-[0_0_30px_rgba(130,253,20,0.6)] transition-shadow duration-300 mb-8">
                       <span className="material-icons text-4xl text-gray-900 dark:text-white">checklist</span>
                       <div className="absolute -top-2 -right-2 w-8 h-8 bg-black dark:bg-primary rounded-full flex items-center justify-center text-white dark:text-black font-bold border-2 border-white dark:border-black">1</div>
                    </div>
                    {/* Card - Added relative z-10 and OPAQUE background to hide the line behind it */}
                    <div className="relative z-10 bg-gray-50 dark:bg-surface-dark p-8 rounded-3xl w-full hover:-translate-y-2 transition-transform duration-300 border border-transparent hover:border-primary/30 shadow-sm">
                       <h4 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Elige tu Plan</h4>
                       <p className="text-lg text-gray-600 dark:text-gray-400">Selecciona la opción que mejor se adapte a tus metas y presupuesto.</p>
                    </div>
                 </div>

                 {/* Step 2 */}
                 <div className="group relative flex flex-col items-center">
                    <div className="relative z-10 bg-white dark:bg-surface-dark w-24 h-24 rounded-full border-4 border-primary flex items-center justify-center shadow-[0_0_20px_rgba(130,253,20,0.2)] group-hover:shadow-[0_0_30px_rgba(130,253,20,0.6)] transition-shadow duration-300 mb-8">
                       <span className="material-icons text-4xl text-gray-900 dark:text-white">smartphone</span>
                       <div className="absolute -top-2 -right-2 w-8 h-8 bg-black dark:bg-primary rounded-full flex items-center justify-center text-white dark:text-black font-bold border-2 border-white dark:border-black">2</div>
                    </div>
                    <div className="relative z-10 bg-gray-50 dark:bg-surface-dark p-8 rounded-3xl w-full hover:-translate-y-2 transition-transform duration-300 border border-transparent hover:border-primary/30 shadow-sm">
                       <h4 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Descarga la App</h4>
                       <p className="text-lg text-gray-600 dark:text-gray-400">Crea tu perfil, reserva tus primeras clases y conecta con tu coach.</p>
                    </div>
                 </div>

                 {/* Step 3 */}
                 <div className="group relative flex flex-col items-center">
                    <div className="relative z-10 bg-white dark:bg-surface-dark w-24 h-24 rounded-full border-4 border-primary flex items-center justify-center shadow-[0_0_20px_rgba(130,253,20,0.2)] group-hover:shadow-[0_0_30px_rgba(130,253,20,0.6)] transition-shadow duration-300 mb-8">
                       <span className="material-icons text-4xl text-gray-900 dark:text-white">fitness_center</span>
                       <div className="absolute -top-2 -right-2 w-8 h-8 bg-black dark:bg-primary rounded-full flex items-center justify-center text-white dark:text-black font-bold border-2 border-white dark:border-black">3</div>
                    </div>
                    <div className="relative z-10 bg-gray-50 dark:bg-surface-dark p-8 rounded-3xl w-full hover:-translate-y-2 transition-transform duration-300 border border-transparent hover:border-primary/30 shadow-sm">
                       <h4 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Entrena</h4>
                       <p className="text-lg text-gray-600 dark:text-gray-400">Asiste al estudio, supera tus límites y disfruta del proceso.</p>
                    </div>
                 </div>

              </div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default Pricing;