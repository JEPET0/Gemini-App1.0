import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 bg-black">
          <img 
            alt="A modern and minimalist fitness studio with exercise equipment" 
            className="w-full h-full object-cover opacity-40" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDHHs-qR8bN_rZQnVGo4CLpptNnDi_zeVCEyT2kxQuPwswsJWLPzHEyh_QuX09E9xH4DVg23NLuMF04iC9Cj09I26oheAbzKXpfGwoOfEC76Nqu8wG_Q4MxtOI_1oqaz4zcStKCOAUA2xTb0BsMbET-RoiFHN3jBZV_DcH25fVrLPcIfDyNmjThyirjYRKFqQy7O65rMgRZufV8CXT6_N9bUMQTipnjBzSN6E4kMiLAT2UVUc5DJwPWuRf25HyN22jmHfb3AbthqA"
          />
        </div>
        <div className="relative z-10 px-6 lg:px-8 animate-fade-in-up">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-tight max-w-6xl mx-auto drop-shadow-lg">
            Entrena mejor. <br/> <span className="text-primary">Vive mejor.</span>
          </h1>
          <p className="mt-8 max-w-2xl mx-auto text-xl md:text-2xl text-gray-200 font-medium drop-shadow-md leading-relaxed">
            Entrenamiento personal y clases reducidas en un estudio moderno donde tú eres la prioridad.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/pricing" className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 text-lg font-bold bg-primary text-black rounded-lg hover:bg-primary-hover transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(130,253,20,0.4)]">
              Reservar sesión
            </Link>
            <Link to="/services" className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 text-lg font-bold bg-transparent text-white border-2 border-white rounded-lg hover:bg-white hover:text-black transition-colors">
              Ver servicios
            </Link>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-6 lg:px-8 py-24 lg:py-32 space-y-32">
        
        {/* Services Preview */}
        <section id="servicios">
          <div className="text-center max-w-3xl mx-auto">
            {/* Badge Style Header for Light Mode Visibility */}
            <span className="inline-block bg-primary text-black px-4 py-1 rounded-full font-bold tracking-wider uppercase text-sm mb-4 shadow-sm">
              Nuestros Servicios
            </span>
            <h2 className="mt-4 text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white">Entrenamiento Adaptado a Ti</h2>
            <p className="mt-6 text-xl text-gray-600 dark:text-gray-400">
              Ofrecemos una variedad de servicios diseñados para ayudarte a alcanzar tus metas de forma eficiente y segura.
            </p>
          </div>
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { icon: "person", title: "Personal Training", desc: "Sesiones uno a uno para un plan 100% personalizado." },
              { icon: "groups", title: "Grupos Reducidos", desc: "La energía del grupo con la atención de un entrenador personal." },
              { icon: "restaurant", title: "Asesoría Nutricional", desc: "Planes de nutrición que complementan tu entrenamiento." },
              { icon: "healing", title: "Rehabilitación", desc: "Recupera tu movilidad y fuerza con nuestros programas." }
            ].map((item, idx) => (
              <div key={idx} className="bg-white dark:bg-surface-dark p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800 group">
                {/* 
                    Icon Contrast Logic:
                    Light Mode: Neon BG + Black Icon (Branded & Contrast)
                    Dark Mode: Dark Gray BG + Neon Icon (Subtle & Cool)
                */}
                <div className="w-16 h-16 rounded-full bg-primary dark:bg-gray-800 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                   <span className="material-icons text-black dark:text-primary text-4xl transition-colors duration-300">{item.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{item.title}</h3>
                <p className="mt-4 text-gray-600 dark:text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link to="/services" className="text-black dark:text-primary font-bold text-lg hover:bg-primary/20 px-4 py-2 rounded-lg inline-flex items-center transition-colors">
              Explorar todos los servicios <span className="material-icons text-lg ml-2">arrow_forward</span>
            </Link>
          </div>
        </section>

        {/* Studio Teaser */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
             <span className="inline-block bg-primary text-black px-4 py-1 rounded-full font-bold tracking-wider uppercase text-sm mb-4 shadow-sm">
              El Estudio
            </span>
            <h2 className="mt-4 text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white">Un Espacio para Crecer</h2>
            <p className="mt-8 text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              Instalaciones modernas, equipamiento de primera y un ambiente que inspira. 
              En MOVE STUDIO, creemos que el entorno es fundamental para el rendimiento y el bienestar.
            </p>
            <div className="mt-10">
              <Link to="/facilities" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold bg-black dark:bg-white text-white dark:text-black rounded-lg hover:opacity-90 transition-all shadow-lg hover:shadow-xl">
                Conoce las instalaciones
              </Link>
            </div>
          </div>
          <div className="order-1 lg:order-2 grid grid-cols-2 gap-6">
             <img alt="Gym interior" className="rounded-2xl shadow-lg w-full h-72 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuz1Y8QKiZSJ3i5XRYYZGycFni4SNvrwQW7jJT0HqadEOua3ws9BHRl37rfqY8U9kE0MtnG0u5mCZShVpY0XfwJAo8e6HZWpK034SxYJ9ILYEhQbdmp4j0mlsW0x4pQ2DPmq8RdFp_HlF6h3XZ8QmE9pk_tcrPcj0a9UEwLKwzvbIczV1SMobAGWHfITJRSjZw6AvoKKmAW6ZG_Fz6c8z-x9ThJ6ItV_s-ffQmc84RTlV5-ZSX_9Z2SrUa31iLFmDIybLi-9mX8t8"/>
             <img alt="Weights" className="rounded-2xl shadow-lg w-full h-72 object-cover mt-12" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZ8_I7YNuW8js9zflPqZx1lZkYFJGOmuPUQ8fhPMlD2idIeY7WWJTJDW4C-j7MIE_j1OKqfLflD6Wy2RZw1SOKi_IXWPY4Q43zGnMTRvkTSMmuyvo3053mEsC63Qos6a0UEp2wR16cFp3GvqQisS1K6oYXUGn4vbBJZ7-uqWR4xdex1gU6M3zbwyHsZag3_5201c9oF11QEnPL--3j0vO0MrMgwRQr97NIIteaGDcLhCrF4-kl4kaoVWIWPtUENj0Qwk2GvI95Y3Y"/>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-gray-100 dark:bg-gray-800/50 -mx-6 lg:-mx-8 px-6 lg:px-8 py-24 rounded-[3rem]">
          <div className="max-w-7xl mx-auto">
             <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">Qué dicen nuestros miembros</h2>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {[
                  {
                    quote: "El ambiente es increíble y los entrenadores son de primer nivel. He logrado resultados que nunca pensé posibles.",
                    name: "Laura M.",
                    role: "Miembro desde 2022",
                    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBqQ2EnNlhEvqnqlVua7hIU0hX4lMilhVL56PkVHAwC1LlXEB-Fw1G5tUpUl6xKGBtb1FlV5gDUGDSKgytRgNsdm_2X1MVyIlZtLzmxJ0IejM7qBh-RQoaP913D4t1s5b-fMHI5PF6e_wYcZoejj54JoTC52ve8QjtVDa6EmqK9Nyxuh8yKL60tEBQsQbxu1ZtnJ6kx63iPZTOnhwIJOHyk8a87awWWKtO78lm8DYeUVDtLo3xr4foRtnCO0MNI7L4zaKx-xNC8sok"
                  },
                  {
                    quote: "Gracias a Move Studio he recuperado la confianza y la fuerza después de mi lesión. ¡Totalmente recomendado!",
                    name: "David S.",
                    role: "Miembro desde 2021",
                    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCzSplnFUIgHZ3xILHyY_Tmgyj2cnlqKMrS8wYcsHP898z0CA2WKCN4FXeLkknU1Ytt63pvu2GhLaRJaZDWmhJPcoTS5V26lBdw1jFvXgjjlXlpUeSr8NyWrGt6P3qp7eMTxgzRzAH1eU62QNBZVFPZcUK7WuiCJ6iVQRMAWE5hwMg3eAsKHUdypW6_VAbonWFZdgcMUAqlcAEmP4NEXDrhqaTi1p3jH6X3RkFHPqhNbb6znLY7esR6AebWWtpUimild-rFLOhufSE"
                  },
                  {
                    quote: "Las clases en grupo son muy dinámicas y divertidas. Es el mejor momento de mi día.",
                    name: "Sofía P.",
                    role: "Miembro desde 2023",
                    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDQXBmP-ghi2H_udNBAizY9rLujnTgIM_3Ry5WRtUWcZF9stELqpAiDT5ErfsWr4UOhGr97Rf_RBJ-m5hy0y1SJpNocDJHMjmbIV1OwAo3LbtuG6SGckmj_OA8v2NEALW7V0GPUUhucTp7nFQlmJoy81yWp_OaW6hE0sdCK57U-p4i4Lugl7sWx27g6BWfKvoKfM9MGZF-koKlmEDoZTZ6li5QorflUHhKCCu33skseLN7N6BDR2x5qt-dssQrc2SP2i3OP-bi2I0w"
                  }
                ].map((t, i) => (
                  <div key={i} className="bg-white dark:bg-surface-dark p-10 rounded-2xl shadow-sm">
                    <div className="flex gap-1 mb-6 text-primary">
                      {[...Array(5)].map((_, i) => <span key={i} className="material-icons text-lg">star</span>)}
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-8 italic text-xl">"{t.quote}"</p>
                    <div className="flex items-center">
                      <img alt={t.name} className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20" src={t.img} />
                      <div className="ml-4">
                        <p className="font-bold text-lg text-gray-900 dark:text-white">{t.name}</p>
                        <p className="text-base text-gray-500 dark:text-gray-500">{t.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
             </div>
          </div>
        </section>

        {/* CTA Contact */}
        <section className="relative rounded-[3rem] overflow-hidden bg-black text-white">
           <div className="absolute inset-0 opacity-30">
             <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBX3KSfVM9Tng6-aRDrSW6_KhcXrcVGA5GJ1HBknhH87-6ZzWyd_81itY0vt36CG3uYnyUEH5zvz9fGgb1PMXccBV7xaCgEcdQ5kd0Zbu0dWJOfZ43wO-TEV1zR8sCC2NdT1GGBntF3LTfJF_e2H1rL2ix-FvOX9BXhtfx9RxfQzS1GUTVTK9blrK_3BO4OYgJK0bo2qMfajq2xBs7Lo3UqkyS-ysFoVAb5RAAF9LYuvPtT9Chx4DVWVi0yhbaHP3HfWeBWVGnfKxk" alt="Map background" />
           </div>
           <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2">
              <div className="p-12 lg:p-24 bg-gradient-to-r from-black/95 to-transparent">
                <h2 className="text-5xl font-bold">Empieza tu transformación</h2>
                <p className="mt-6 text-gray-300 text-xl">Visítanos y descubre por qué somos el mejor estudio boutique de la ciudad.</p>
                <div className="mt-10 space-y-6 text-lg">
                  <div className="flex items-start">
                    <span className="material-icons text-primary mr-4 text-2xl">location_on</span>
                    <span>Calle Ficticia 123, <br/>08001 Barcelona, España</span>
                  </div>
                  <div className="flex items-center">
                    <span className="material-icons text-primary mr-4 text-2xl">phone</span>
                    <span>+34 912 345 678</span>
                  </div>
                </div>
                <div className="mt-12">
                  <Link to="/pricing" className="inline-block px-10 py-5 bg-primary text-black font-bold rounded-xl hover:bg-primary-hover transition-colors text-lg shadow-[0_0_20px_rgba(130,253,20,0.3)]">
                    Reserva tu primera sesión
                  </Link>
                </div>
              </div>
           </div>
        </section>

      </main>
    </>
  );
};

export default Home;