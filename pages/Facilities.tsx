import React from 'react';
import { Link } from 'react-router-dom';

const Facilities: React.FC = () => {
  return (
    <div className="bg-white dark:bg-background-dark">
      {/* Hero Section with Parallax-like feel */}
      <section className="relative h-[80vh] w-full flex items-end pb-20 justify-start text-left overflow-hidden group">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img 
          alt="Move Studio Interior" 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] ease-in-out scale-105 group-hover:scale-100" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuHLVyxLMZP7FwIPFn8INICWge5Hxb5ZHeTnPukTSpIhXmnvXIvyODL78dVcWLmqoDiy1EwSlu7VxnLrdFctYflSl42Vk_dFKLjtJwLpdKdUIGm2CpGjeRUafj2Nu16yL9cB0fdDQOR25lAZz9dOSsg3pOmGRcsgMMq6hoLACzOjK22-aHbQ9GaXjNsBQu5U4I_9eaZ1_nsWd_7-MrqwHEHXeVyHZ206kjTGoMGoWjQQbWVL1CUEOz2n0BP7KvBAmp2qE0tC6q4mw"
        />
        <div className="relative z-20 container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl animate-fade-in-up">
            <span className="inline-block bg-primary text-black px-4 py-1 rounded-full font-bold tracking-wider uppercase text-sm mb-6 shadow-[0_0_15px_rgba(130,253,20,0.6)]">
              El Espacio
            </span>
            <h1 className="text-6xl md:text-8xl font-black text-white leading-none tracking-tighter mb-6 drop-shadow-xl">
              DISEÑADO PARA <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">LA EXCELENCIA</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-xl leading-relaxed font-medium drop-shadow-md">
              800m² de diseño industrial, tecnología de vanguardia y equipamiento premium. Un santuario donde el esfuerzo se encuentra con el estilo.
            </p>
          </div>
        </div>
      </section>

      {/* Manifesto / Intro */}
      <section className="py-24 lg:py-32 container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
           <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-8">
                Más que un gimnasio, <br/> tu <span className="mark-primary px-2 text-gray-900 dark:text-black transition-colors duration-300">segundo hogar</span>.
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                En MOVE STUDIO, hemos eliminado lo innecesario para potenciar lo esencial. Cada textura, luz y sonido ha sido calibrado para inducir un estado de flujo (flow state) en tus entrenamientos.
              </p>
              <div className="grid grid-cols-2 gap-8">
                 <div>
                    <h4 className="text-5xl font-black text-gray-900 dark:text-white mb-2">800<span className="text-primary text-3xl align-top">+</span></h4>
                    <p className="text-sm text-gray-500 uppercase tracking-widest font-bold">Metros Cuadrados</p>
                 </div>
                 <div>
                    <h4 className="text-5xl font-black text-gray-900 dark:text-white mb-2">4<span className="text-primary text-3xl align-top">Zonas</span></h4>
                    <p className="text-sm text-gray-500 uppercase tracking-widest font-bold">Especializadas</p>
                 </div>
              </div>
           </div>
           <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl group">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCVfyDMNFMZsl30KqteSs9SjG1LtZ9T6o_zHHFhAf49nwp2wTZy8ctG4G7137s4NndPaGTlk0BiscoE2KDUP2xoZIVIZXNp9b8EBpQD_PvF8-Pohfr8C-hHHS933mPPhmo8dRCMM6-BmrwmRBpXn9t4PelbdgngGEqqhrsuUdc9VoEZzqjitIYIwOVkOsZq43CS10uZPmHgjk15eWZFSWy1LPfHncgeNIp8Wye__q0Bbh0sk4VH75pPPM2oEW40an4hWMPDjnEJrE" alt="Interior Detail" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>
              <div className="absolute bottom-8 left-8 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 max-w-xs">
                 <p className="text-white font-medium italic">"La arquitectura influye en el comportamiento. Aquí, te invita a superarte."</p>
              </div>
           </div>
        </div>
      </section>

      {/* Detailed Zones with Hover Effects */}
      <section className="py-20 bg-gray-50 dark:bg-surface-dark transition-colors duration-500">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">Explora las Zonas</h2>
          </div>
          
          <div className="space-y-32">
             {[
               {
                 title: "The Iron Zone",
                 subtitle: "Entrenamiento de Fuerza",
                 desc: "Donde se forja el carácter. Equipado con racks de potencia Hammer Strength, plataformas de levantamiento olímpico y mancuernas calibradas hasta 50kg. Un entorno crudo y profesional.",
                 features: ["Racks Hammer Strength", "Discos Calibrados Eleiko", "Suelo de alta absorción de impacto"],
                 img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB570jh5ZUom8vLtPrhowBoRrIpIEuWGWZ0bkDdrkBu1u0IVeaSee-47HY8xIlkXV6WK1RCqhG1zGOD5RBFDGdtERsKnQT2yhhKOFGv-eusPw5RU6x460KshaaDcfSUEfk5eQJwhx8xnoK2euGkvXfo3p-tzSTy4qMqQg3pNxA-WBD7sz69u_DPieV_4AQdmtJrzY_9vCpCsTvW5vqIuBTmX2T0UzUSm3nAv7q4JpMcHRb48MNV5lpb8RSHwQbqGJdV-ll5bg_Q2Ps",
                 align: "left"
               },
               {
                 title: "Athletic Performance",
                 subtitle: "Funcional & Metabólico",
                 desc: "Espacio diáfano diseñado para el movimiento humano. Pista de arrastre de 20m, SkiErgs, Assault Bikes y una estructura funcional central para calistenia y pliometría.",
                 features: ["Turf Track 20m", "Cardio Concept2 & Assault", "Kettlebells de Competición"],
                 img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAt5Yff1Be7pBmEogMf36KWhGVA-VlObXnDmB7TzYflmBVJDdbKb6JanVQP-YomZPQUk4RR7iPL0lRJaqK_xXUdwlXZBR4XKWJb56e1Ibu8FskhEa3LiFQXyPhW2XVhDLsaGihuNWf6s6UM2sWHkFQ_TxIHdsylsPcYTuqJzwCXit1nZvcOJYThEtdVXF0zKSqqYRG57vO8LpFEZkemNz0tYdUXUUKNLI6vmaMxk36ArU_L1WOo9-ZHvtIKCCVwBE8hTxF4xpBcfzM",
                 align: "right"
               },
               {
                 title: "The Zen Lab",
                 subtitle: "Mind & Body",
                 desc: "Un oasis acústicamente aislado. Iluminación circadiana que se adapta a la energía de la clase, desde el Vinyasa más dinámico hasta el Yin Yoga más restaurativo. Suelo de madera natural.",
                 features: ["Sonido Envolvente Hi-Fi", "Iluminación Dinámica RGB", "Material de Yoga Premium Manduka"],
                 img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD3hgc2HHWazjzAA86NUJuwZnlo638rt0EoNvb0qQG_I-r8qRUM_pAyx54Jsuxi4__a-bUZfPV2dZSK9wX7UVwFyUV0t9JZomCR8iO2KOZkg1XpfnghEMTQzEvwed_JyrP8Uy1NtzI2Tzd1QKTxnjvLa4k6_8JdvBgIlSPEmedjc21LzaCeRtYYrtPxCuEozw0XTw97D6J5Oyjl1PTZr86U2YsCE36iSmDfUYhnOAFH6KZ5Sta-AC7WgM3o2Hbig-lXBGB2Pfn7AY8",
                 align: "left"
               }
             ].map((zone, idx) => (
                <div key={idx} className={`flex flex-col lg:flex-row gap-16 items-center ${zone.align === 'right' ? 'lg:flex-row-reverse' : ''}`}>
                   <div className="lg:w-1/2 space-y-8 animate-fade-in-up" style={{ animationDelay: `${idx * 200}ms` }}>
                      <div className="inline-block border border-gray-900 dark:border-gray-500 rounded-full px-4 py-1 text-sm font-bold uppercase tracking-widest text-gray-900 dark:text-gray-400">
                         {zone.subtitle}
                      </div>
                      <h3 className="text-4xl lg:text-6xl font-black text-gray-900 dark:text-white leading-none">{zone.title}</h3>
                      <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                        {zone.desc}
                      </p>
                      <ul className="pt-4 space-y-4">
                        {zone.features.map((feat, i) => (
                          <li key={i} className="flex items-center text-lg font-medium text-gray-800 dark:text-gray-200">
                             <span className="w-3 h-3 bg-primary rounded-full mr-4 shadow-[0_0_10px_rgba(130,253,20,0.8)]"></span>
                             {feat}
                          </li>
                        ))}
                      </ul>
                   </div>
                   <div className="lg:w-1/2 w-full">
                      <div className="relative h-[500px] rounded-[2rem] overflow-hidden shadow-2xl group">
                         <img src={zone.img} alt={zone.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-95 group-hover:brightness-100"/>
                         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                            <span className="text-white font-bold text-lg tracking-wide">Ver equipamiento detallado <span className="material-icons align-middle ml-2 text-primary">arrow_forward</span></span>
                         </div>
                      </div>
                   </div>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* Amenities Bento Grid */}
      <section className="py-24 container mx-auto px-6 lg:px-8">
         <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">Experiencia Premium</h2>
            <p className="mt-4 text-xl text-gray-500 dark:text-gray-400">Detalles que marcan la diferencia en tu rutina diaria.</p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 h-auto md:h-[600px]">
            {/* Card 1 - Large - Changing Rooms */}
            <div className="md:col-span-2 md:row-span-2 relative rounded-[2rem] overflow-hidden group shadow-lg">
               <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGqHCRIqF_UP1bF6b3e_LtlyicKk03M-trqwzURByVSl6caACumnDv_JpUbfXMkExKUYW31wDn0CYy5JnB7rfEA5OnH6PzuVu3HBPCr-GBVIoG9UEkLmTfLkinP6Tkkyd4x-OvWOPs4ZdxtHDEErVj2L9Ug5RMt_1Y61I4j8Irxg_zzQZrhZPov0OfZFFZsCn1Ucy8nRPFY7UlGNWQDoHY_rUbnUo2K5wrGKCxKwDHx6f1rTFjy1PvcvZHxAxn4oM4uR1DWIj9dWY" alt="Changing Rooms" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"/>
               <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-10 flex flex-col justify-end">
                  <div className="bg-primary w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(130,253,20,0.5)]">
                     <span className="material-icons text-black text-3xl">spa</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">Vestuarios Spa</h3>
                  <p className="text-gray-200 text-lg max-w-lg">Diseñados para tu recuperación. Duchas efecto lluvia, amenities orgánicos, secadores profesionales y toallas de algodón egipcio.</p>
               </div>
            </div>

            {/* Card 2 - Air Quality */}
            <div className="bg-gray-100 dark:bg-gray-800/60 border border-transparent dark:border-gray-700 p-8 rounded-[2rem] flex flex-col justify-between hover:bg-white dark:hover:bg-gray-700 transition-all shadow-md hover:shadow-xl group">
               <div className="flex justify-between items-start">
                   <span className="material-icons text-5xl text-gray-400 group-hover:text-primary transition-colors">air</span>
                   <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
               </div>
               <div>
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Aire Puro</h4>
                  <p className="text-gray-600 dark:text-gray-400">Sistemas de filtración HEPA de grado hospitalario que renuevan el aire cada 15 minutos.</p>
               </div>
            </div>

            {/* Card 3 - Security */}
            <div className="bg-black p-8 rounded-[2rem] flex flex-col justify-between group overflow-hidden relative shadow-lg">
               <div className="absolute top-0 right-0 w-40 h-40 bg-primary/20 rounded-full blur-3xl -mr-20 -mt-20 transition-opacity duration-500 group-hover:bg-primary/30"></div>
               <span className="material-icons text-5xl text-primary relative z-10">lock_open</span>
               <div className="relative z-10">
                  <h4 className="text-2xl font-bold text-white mb-2">Seguridad Smart</h4>
                  <p className="text-gray-400 group-hover:text-gray-300">Taquillas inteligentes con código RFID y acceso biométrico. Tu pertenencias, siempre seguras.</p>
               </div>
            </div>
         </div>
      </section>

      {/* CTA - Bold */}
      <section className="py-24 bg-primary mt-10">
         <div className="container mx-auto px-6 text-center">
            <h2 className="text-5xl md:text-7xl font-black text-black mb-8 tracking-tighter leading-none">
              VEN A VERLO <br/> TÚ MISMO
            </h2>
            <p className="text-xl md:text-2xl text-black/80 max-w-3xl mx-auto mb-12 font-bold">
               Las fotos no hacen justicia a la energía del lugar. Reserva un tour guiado de 15 minutos, conoce al equipo y siente la diferencia.
            </p>
            <Link 
              to="/pricing" 
              className="inline-flex items-center justify-center bg-black text-white font-bold py-5 px-12 rounded-2xl text-xl hover:scale-105 transition-transform shadow-2xl hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
            >
               Reservar Tour del Club <span className="material-icons ml-3">calendar_today</span>
            </Link>
         </div>
      </section>
    </div>
  );
};

export default Facilities;