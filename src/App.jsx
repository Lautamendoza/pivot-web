import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import logotipo from './assets/LOGOTIPO.jpg';

// 1. DEFINIDO FUERA para que no se destruya al re-renderizar
const Reveal = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

function App() {
  const [vista, setVista] = useState('landing');
  const [mostrarBoton, setMostrarBoton] = useState(false);

  useEffect(() => {
    const controlarScroll = () => {
      setMostrarBoton(window.scrollY > 400);
    };
    window.addEventListener('scroll', controlarScroll);
    return () => window.removeEventListener('scroll', controlarScroll);
  }, []);

  const irA = (nuevaVista) => {
    setVista(nuevaVista);
    // Usamos un timeout mínimo para asegurar que el contenido cargue antes de subir
    setTimeout(() => window.scrollTo(0, 0), 10);
  };

  const volverArriba = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-prestige text-blanco-hueso font-sans selection:bg-blanco-hueso selection:text-verde-bosque overflow-x-hidden flex flex-col">
      
      {/* NAVBAR GLOBAL */}
      <nav className="w-full border-b border-white/10 z-50 bg-verde-bosque/80 backdrop-blur-md sticky top-0">
        <div className="container mx-auto px-6 md:px-8 py-4 md:py-6 flex justify-between items-center">
          <button 
            onClick={() => irA('landing')} 
            className="flex items-center gap-3 bg-transparent border-none p-0 cursor-pointer"
          >
            <img src={logotipo} alt="PIVOT" className="h-8 md:h-10 w-auto" />
            <span className="hidden sm:block text-[10px] tracking-[0.3em] opacity-40 uppercase text-white">PIVOT DEVSTUDIO</span>
          </button>
          
          <div className="flex items-center space-x-6 md:space-x-12">
            <button 
              onClick={() => irA(vista === 'landing' ? 'terminos' : 'landing')} 
              className="text-[10px] uppercase tracking-[0.3em] opacity-70 hover:opacity-100 bg-transparent border-none text-white cursor-pointer font-bold"
            >
              {vista === 'landing' ? 'Acuerdos' : 'Inicio'}
            </button>
            <a href="https://wa.link/nofyhp" target="_blank" rel="noreferrer" className="bg-blanco-hueso text-verde-bosque px-4 md:px-6 py-2 font-bold text-[10px] uppercase tracking-widest no-underline hover:scale-105 transition-transform">
              Hablemos
            </a>
          </div>
        </div>
      </nav>

      {/* CONTENIDO PRINCIPAL */}
      <main className="flex-grow">
        {vista === 'landing' ? (
          <div>
            {/* HERO */}
            <header className="container mx-auto px-6 py-24 md:py-40 text-center">
              <Reveal>
                <div className="inline-block px-4 py-1.5 mb-8 border border-white/20 text-white text-[10px] uppercase tracking-[0.3em] bg-white/5">📍 Rafaela, Santa Fe</div>
                <h1 className="text-5xl md:text-[100px] font-serif font-bold tracking-tighter mb-12 text-white leading-tight">
                  El cambio en la <br/> <span className="italic font-normal opacity-60">dirección correcta.</span>
                </h1>
                <p className="text-lg md:text-2xl opacity-90 max-w-3xl mx-auto mb-12 font-serif italic">
                  Desarrollamos sistemas de gestión y plataformas web bajo estándares de <span className="text-white font-bold not-italic underline decoration-white/20">alto prestigio</span>.
                </p>
                <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                  <a href="https://wa.link/nofyhp" className="text-white border-b border-white/40 pb-2 text-sm uppercase tracking-[0.3em] font-bold no-underline hover:border-white">Iniciar Auditoría</a>
                  <a href="#ventajas" className="text-[10px] uppercase tracking-[0.3em] opacity-50 hover:opacity-100 text-white no-underline">Explorar más ↓</a>
                </div>
              </Reveal>
            </header>

            {/* SECCIÓN VALORES */}
            <section id="ventajas" className="py-24 bg-white/5 border-y border-white/10">
              <div className="container mx-auto px-6 md:px-8 grid lg:grid-cols-2 gap-20 items-center">
                <Reveal>
                  <h2 className="text-4xl md:text-7xl font-serif font-bold text-white mb-8">Trayectoria <br/> <span className="italic font-normal opacity-50">y distinción.</span></h2>
                  <p className="text-xs uppercase tracking-widest opacity-60 leading-loose max-w-md">No somos una agencia convencional. Somos ingeniería aplicada al éxito de tu empresa.</p>
                </Reveal>
                <div className="space-y-16">
                  {["Trato Personalizado", "Ingeniería Web", "Exclusividad"].map((t, i) => (
                    <Reveal key={i}>
                      <div className="flex gap-6 border-l border-white/10 pl-8">
                        <span className="text-3xl font-serif italic opacity-20">0{i+1}</span>
                        <div>
                          <h3 className="text-xl font-serif font-bold mb-2 italic text-white">{t}</h3>
                          <p className="text-sm opacity-60">Soluciones robustas diseñadas para Rafaela y zona con alcance global.</p>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </section>

            {/* MAPA */}
            <section className="py-24 bg-verde-bosque">
              <div className="container mx-auto px-6">
                <div className="aspect-video w-full border border-white/10 grayscale invert brightness-75 contrast-125">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54522.012476566275!2d-61.53039148560089!3d-31.258832822457816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95ca630f92f25f2b%3A0xc3f7a63d9196b278!2sRafaela%2C%20Santa%20Fe!5e0!3m2!1ses-419!2sar!4v1709200000000!5m2!1ses-419!2sar" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
                </div>
              </div>
            </section>
          </div>
        ) : (
          <div className="container mx-auto px-6 py-24 max-w-4xl">
            <h2 className="text-5xl font-serif font-bold text-white mb-20 uppercase tracking-tighter text-balance">Términos de Servicio</h2>
            <div className="space-y-12 text-sm md:text-base opacity-80 leading-loose font-sans">
              {[
                { t: "1. OBJETO", p: "PIVOT provee servicios de desarrollo web y sistemas de gestión a medida bajo estándares de alto prestigio." },
                { t: "2. PAGOS", p: "Desarrollo en ARS. Mantenimiento mensual en USD (cotización Dólar MEP)." },
                { t: "3. PROPIEDAD", p: "El cliente posee la propiedad estética. La lógica interna y el código base son propiedad intelectual de PIVOT." },
                { t: "4. JURISDICCIÓN", p: "Tribunales Ordinarios de la Ciudad de Rafaela, Santa Fe." }
              ].map((sec, i) => (
                <div key={i} className="border-l border-white/20 pl-8 py-2">
                  <h3 className="text-xl font-serif font-bold mb-4 text-white italic">{sec.t}</h3>
                  <p>{sec.p}</p>
                </div>
              ))}
            </div>
            <button onClick={() => irA('landing')} className="mt-20 bg-white text-verde-bosque px-10 py-4 font-bold uppercase text-xs cursor-pointer border-none shadow-lg">Volver al inicio</button>
          </div>
        )}
      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-12 mt-auto bg-white/2">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8 opacity-40 text-[10px] uppercase tracking-[0.3em]">
          <div className="flex items-center gap-4">
            <img src={logotipo} alt="PIVOT" className="h-6 w-auto" />
            <span>© 2026 PIVOT. RAFAELA.</span>
          </div>
          <div className="flex gap-10">
            <button onClick={() => irA('terminos')} className="bg-transparent border-none text-white cursor-pointer uppercase text-[10px] tracking-widest font-bold">Términos</button>
            <a href="https://wa.link/nofyhp" target="_blank" rel="noreferrer" className="text-white no-underline">WhatsApp</a>
          </div>
        </div>
      </footer>

      {/* BOTÓN TOP */}
      {mostrarBoton && vista === 'landing' && (
        <button onClick={volverArriba} className="fixed bottom-8 right-8 bg-white text-verde-bosque p-4 rounded-full shadow-2xl z-50 cursor-pointer border-none hover:-translate-y-2 transition-transform">
          ↑
        </button>
      )}
    </div>
  );
}

export default App;
