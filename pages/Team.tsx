import React from 'react';

const Team: React.FC = () => {
  return (
    <div className="pt-32 pb-32">
      <div className="container mx-auto px-6 lg:px-8">
        
        <div className="mb-24 text-center lg:text-left lg:flex lg:items-center lg:justify-between">
          <div className="lg:max-w-3xl">
            <span className="inline-block bg-primary text-black px-4 py-1 rounded-full font-bold tracking-wider uppercase text-sm mb-4 shadow-sm">Nuestro Equipo</span>
            <h1 className="mt-6 text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              La Guía Experta Detrás de Tu Transformación
            </h1>
            <p className="mt-8 text-xl text-gray-600 dark:text-gray-400">
              En MOVE STUDIO, nuestros entrenadores son mentores, estrategas y tus mayores defensores en el camino hacia tu mejor versión.
            </p>
          </div>
          <div className="hidden lg:block lg:w-1/3">
             <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl rotate-3">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuALuuXkdzRl38_YIr59WwdD4QWFhBFY-DhThNumbReHefuJhnFTGOxmoxQrv3-vfLrxRZtomD31mk-bT1BkbVgpYts39spzMAeGXdrT-PtbfsLBdREy0fqbtsjrFArqkhojVTeA8ooN_tHSUXsJbYTBhiCsSCG72AD0GsDNArTOTKEgZhpG7QTPwxsBmpW0t8uXVL7VtTfRsKdMdMk8tmgzIHkEpcdSQKYBbKeaNwR6GI9dQxahWpAId9qerQkpezcF9x76HU947oc" alt="Team" className="w-full h-full object-cover"/>
             </div>
          </div>
        </div>

        {/* Trainers Detail */}
        <div className="space-y-32">
          
          {/* Elena */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden shadow-lg h-[600px] sticky top-28">
                <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYoRwwBMf2KHTUh5RaqXQgAEWp8CCEJVrYHEp4CqZNfvVHOyA8WVKxql22N4h09a8rJ-kyegIHQqZWvMtzi0ZSaj3geVJC1zHAx3KQ0FR-_V-rw6knmK0uDhmy5Z3UCz49eGEJsnTmJxfqzdP1tDvcuN9emLIaHsBHZaRUocjhPMzi2ku0vDqV3ZHRrIqilJks-TRZsRL8HBUH9VW1ktkm1iwdo7SCkdQoAvMcEJpUDV4L8ri7HX1UsNOfBeVNtBGo56ubkYfx4y0" alt="Elena Rodriguez" />
              </div>
            </div>
            <div className="lg:col-span-7">
              <h2 className="text-5xl font-bold text-gray-900 dark:text-white">Elena Rodriguez</h2>
              <div className="mt-4">
                <span className="bg-primary text-black px-4 py-1 rounded-lg font-bold text-xl inline-block">Lead Instructor, Yoga & Movilidad</span>
              </div>
              <p className="mt-8 text-gray-600 dark:text-gray-400 leading-relaxed text-xl">
                Elena fusiona las antiguas tradiciones del yoga con la ciencia moderna de la movilidad para crear una práctica verdaderamente transformadora. Sus clases se centran en construir una conexión mente-cuerpo profunda, mejorar la flexibilidad funcional y encontrar un equilibrio duradero.
              </p>
              
              <div className="mt-12 pt-10 border-t border-gray-200 dark:border-gray-800">
                <h3 className="text-base font-bold uppercase tracking-wider mb-6 text-white">Especialidades</h3>
                <div className="flex flex-wrap gap-3">
                  {['Vinyasa Flow', 'Recuperación Activa', 'Mindfulness', 'Movilidad'].map(tag => (
                    <span key={tag} className="bg-primary text-black px-4 py-2 rounded-full text-base font-medium">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Marcus */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-7 lg:order-1 order-2">
              <h2 className="text-5xl font-bold text-gray-900 dark:text-white">Marcus Chen</h2>
              <div className="mt-4">
                 <span className="bg-primary text-black px-4 py-1 rounded-lg font-bold text-xl inline-block">Head of Strength & Conditioning</span>
              </div>
              <p className="mt-8 text-gray-600 dark:text-gray-400 leading-relaxed text-xl">
                Con un enfoque meticuloso en la fuerza funcional y el rendimiento atlético, Marcus diseña programas dinámicos que rompen mesetas. Su filosofía se basa en el dominio de los patrones de movimiento fundamentales para construir una base sólida de potencia.
              </p>
              
              <div className="mt-12 pt-10 border-t border-gray-200 dark:border-gray-800">
                <h3 className="text-base font-bold uppercase tracking-wider mb-6 text-white">Especialidades</h3>
                <div className="flex flex-wrap gap-3">
                  {['Fuerza', 'Hipertrofia', 'Rendimiento Atlético', 'Kettlebells'].map(tag => (
                    <span key={tag} className="bg-primary text-black px-4 py-2 rounded-full text-base font-medium">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 lg:order-2 order-1">
              <div className="rounded-3xl overflow-hidden shadow-lg h-[600px] sticky top-28">
                <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuALuuXkdzRl38_YIr59WwdD4QWFhBFY-DhThNumbReHefuJhnFTGOxmoxQrv3-vfLrxRZtomD31mk-bT1BkbVgpYts39spzMAeGXdrT-PtbfsLBdREy0fqbtsjrFArqkhojVTeA8ooN_tHSUXsJbYTBhiCsSCG72AD0GsDNArTOTKEgZhpG7QTPwxsBmpW0t8uXVL7VtTfRsKdMdMk8tmgzIHkEpcdSQKYBbKeaNwR6GI9dQxahWpAId9qerQkpezcF9x76HU947oc" alt="Marcus Chen" />
              </div>
            </div>
          </div>

        </div>

        {/* Process */}
        <div className="mt-40">
           <h2 className="text-4xl font-bold text-center mb-20 text-gray-900 dark:text-white">Cómo Trabajamos</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
             {[
               { title: '1. Consulta', icon: 'fact_check', text: 'Evaluación profunda de tu historial, objetivos y patrones de movimiento.' },
               { title: '2. Entrenamiento', icon: 'model_training', text: 'Guiamos con precisión técnica cada sesión, adaptando los ejercicios.' },
               { title: '3. Progreso', icon: 'trending_up', text: 'Monitoreamos y ajustamos constantemente para asegurar resultados.' },
             ].map((step, i) => (
               <div key={i} className="text-center p-10 bg-gray-50 dark:bg-gray-800/50 rounded-3xl">
                 <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mx-auto mb-8">
                    <span className="material-icons text-4xl text-black">{step.icon}</span>
                 </div>
                 <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{step.title}</h3>
                 <p className="text-xl text-gray-600 dark:text-gray-400">{step.text}</p>
               </div>
             ))}
           </div>
        </div>

      </div>
    </div>
  );
};

export default Team;