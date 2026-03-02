import React from 'react';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans selection:bg-emerald-500 selection:text-white">
      
      {/* NAVBAR */}
      <nav className="container mx-auto px-6 py-6 flex justify-between items-center border-b border-gray-800">
        <div className="text-2xl font-bold tracking-tighter">
          PI<span className="text-emerald-500 animate-pulse">V</span>OT <span className="text-sm font-normal text-gray-600 ml-2">&lt;DevStudio /&gt;</span>
        </div>
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          <a href="#ventajas" className="hover:text-emerald-400 transition-colors">Por qué elegirnos</a>
          <a href="#planes" className="hover:text-emerald-400 transition-colors">Planes</a>
        </div>
        <a 
          href="https://wa.link/nofyhp" 
          target="_blank" 
          rel="noreferrer"
          className="bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2 rounded-md font-semibold transition-all"
        >
          Hablemos
        </a>
      </nav>

      {/* HERO SECTION */}
      <header className="container mx-auto px-6 py-24 flex flex-col items-center text-center overflow-hidden">
        
        {/* Etiqueta animada */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block px-4 py-1 mb-6 rounded-full bg-gray-900 border border-gray-800 text-emerald-400 text-sm font-semibold tracking-wide"
        >
          📍 Soluciones Digitales en Rafaela y Zona
        </motion.div>

        {/* Título animado */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 max-w-4xl"
        >
          El cambio en la <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">
            dirección correcta
          </span> para tu Pyme.
        </motion.h1>

        {/* Párrafo animado */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed"
        >
          Olvidate de las plantillas lentas y el soporte automatizado. Creamos sitios web a medida, ultrarrápidos y seguros. Nos juntamos, lo charlamos presencialmente y lo hacemos realidad.
        </motion.p>

        {/* Botones animados */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a href="https://wa.link/nofyhp" className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg shadow-emerald-900/50 transition-all flex items-center justify-center gap-2">
            ☕ Agendar un café
          </a>
          <a href="#planes" className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-bold text-lg border border-gray-700 transition-all flex items-center justify-center">
            Ver paquetes
          </a>
        </motion.div>
      </header>

      {/* VALUE PROPOSITION / FEATURES (Animaciones al hacer Scroll) */}
      <section id="ventajas" className="bg-gray-900 py-24 border-t border-gray-800 overflow-hidden">
        <div className="container mx-auto px-6">
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            Tu negocio necesita una web, <span className="text-gray-500 block mt-2">no un dolor de cabeza.</span>
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* Feature 1 */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gray-950 p-8 rounded-2xl border border-gray-800 hover:border-emerald-500/50 transition-colors"
            >
              <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center text-2xl mb-6 border border-gray-800">🤝</div>
              <h3 className="text-xl font-bold mb-3 text-white">100% Local y Presencial</h3>
              <p className="text-gray-400 leading-relaxed">
                Si tenés un problema, no hablás con un bot ni mandás un ticket a otro país. Voy a tu local y lo resolvemos cara a cara.
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gray-950 p-8 rounded-2xl border border-gray-800 hover:border-emerald-500/50 transition-colors"
            >
              <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center text-2xl mb-6 border border-gray-800">⚡</div>
              <h3 className="text-xl font-bold mb-3 text-white">Tecnología de Alta Gama</h3>
              <p className="text-gray-400 leading-relaxed">
                No usamos WordPress. Desarrollamos con React y bases de datos robustas para que tu página vuele y posicione en Google.
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-gray-950 p-8 rounded-2xl border border-gray-800 hover:border-emerald-500/50 transition-colors"
            >
              <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center text-2xl mb-6 border border-gray-800">🔒</div>
              <h3 className="text-xl font-bold mb-3 text-white">Llave en Mano</h3>
              <p className="text-gray-400 leading-relaxed">
                Vos te ocupás de vender. Nosotros gestionamos los servidores, la seguridad, los dominios y los respaldos de tu información.
              </p>
            </motion.div>

          </div>
        </div>
      </section>
      {/* PORTAFOLIO / PROYECTOS */}
      <section id="portafolio" className="bg-gray-950 py-24 border-t border-gray-800 overflow-hidden">
        <div className="container mx-auto px-6">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nuestros Trabajos: Potencia Web en Cada Pantalla.
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Adaptamos tu negocio para que vuele en cualquier dispositivo, de la mano de tecnologías modernas.
            </p>
          </motion.div>
          
          {/* Grilla de Dispositivos */}
          <div className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto items-end">
            
            {/* Celular - Ejemplo 1 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, x: -30 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="bg-gray-900 p-3 rounded-3xl border-2 border-gray-800 shadow-xl inline-block max-w-[280px] hover:border-emerald-500 transition-colors">
                <img src="/mockup-phone.png" alt="Ejemplo Pizzería El Rafa" className="rounded-[20px] aspect-[9/16] object-cover bg-gray-800" />
              </div>
              <h3 className="text-lg font-bold text-white mt-6">Pizzería 'El Rafa'</h3>
              <p className="text-sm text-gray-500">Plan Básico</p>
            </motion.div>

            {/* Notebook - Ejemplo 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <div className="bg-gray-900 p-4 rounded-xl border-2 border-gray-800 shadow-xl inline-block hover:border-emerald-500 transition-colors">
                <img src="/mockup-notebook.png" alt="Ejemplo Metalúrgica San Martín" className="rounded-lg aspect-[16/10] object-cover bg-gray-800" />
              </div>
              <h3 className="text-xl font-bold text-white mt-6">Metalúrgica San Martín</h3>
              <p className="text-sm text-gray-500">Plan Catálogo</p>
            </motion.div>

            {/* PC Escritorio - Ejemplo 3 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, x: 30 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-center"
            >
              <div className="bg-gray-900 p-5 rounded-lg border-2 border-gray-800 shadow-xl inline-block hover:border-emerald-500 transition-colors">
                <img src="/mockup-desktop.png" alt="Ejemplo Inmobiliaria Ciudad" className="rounded aspect-[16/9] object-cover bg-gray-800" />
              </div>
              <h3 className="text-xl font-bold text-white mt-6">Inmobiliaria Ciudad</h3>
              <p className="text-sm text-gray-500">Plan E-Commerce</p>
            </motion.div>

          </div>
          
          <div className="text-center mt-12">
            <p className="text-xs text-gray-600">Adaptamos tu negocio para que vuele en cualquier dispositivo.</p>
          </div>
        </div>
      </section>

      {/* PLANES Y PRECIOS */}
      <section id="planes" className="bg-gray-900 py-24 border-t border-gray-800 overflow-hidden">
        <div className="container mx-auto px-6">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Planes claros, <span className="text-emerald-500">sin sorpresas.</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Elegí el nivel de transformación digital que tu negocio necesita hoy. Cotizados en ARS, pagaderos en pesos al cambio del día.
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
            
            {/* Plan 1: Básico */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gray-950 p-8 rounded-2xl border border-gray-800 hover:border-gray-600 transition-colors"
            >
              <h3 className="text-2xl font-bold text-white mb-2">Inicio</h3>
              <p className="text-gray-400 text-sm mb-6">La tarjeta de presentación digital perfecta para profesionales.</p>
              <div className="mb-6">
                <span className="text-4xl font-extrabold text-white">$300.000</span>
                <span className="text-gray-500 font-medium"> ARS</span>
              </div>
              <ul className="text-gray-300 space-y-4 mb-8 text-sm">
                <li className="flex items-start gap-3"><span className="text-emerald-500">✓</span> Landing Page (Carga instantánea)</li>
                <li className="flex items-start gap-3"><span className="text-emerald-500">✓</span> Formulario de contacto directo</li>
                <li className="flex items-start gap-3"><span className="text-emerald-500">✓</span> Botón flotante de WhatsApp</li>
                <li className="flex items-start gap-3"><span className="text-emerald-500">✓</span> Diseño Adaptable (Celulares)</li>
              </ul>
              <div className="p-4 bg-gray-900 rounded-lg border border-gray-800 mb-8">
                <p className="text-xs text-gray-400 text-center">Mantenimiento y Hosting</p>
                <p className="text-emerald-400 font-bold text-center mt-1">$30 USD / mes</p>
              </div>
              <a href="https://wa.link/apw83b" className="block w-full py-3 px-4 bg-gray-800 hover:bg-gray-700 text-white text-center font-bold rounded-lg transition-colors border border-gray-700">
                Consultar Plan
              </a>
            </motion.div>

            {/* Plan 2: Medio (Destacado) */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gray-950 p-8 rounded-2xl border-2 border-emerald-500 relative transform lg:-translate-y-4 shadow-2xl shadow-emerald-900/20"
            >
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-emerald-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                Más Elegido
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Catálogo</h3>
              <p className="text-gray-400 text-sm mb-6">Ideal para comercios que quieren mostrar sus productos.</p>
              <div className="mb-6">
                <span className="text-4xl font-extrabold text-white">$500.000</span>
                <span className="text-gray-500 font-medium"> ARS</span>
              </div>
              <ul className="text-gray-300 space-y-4 mb-8 text-sm">
                <li className="flex items-start gap-3"><span className="text-emerald-500">✓</span> Todo lo del Plan Inicio</li>
                <li className="flex items-start gap-3"><span className="text-emerald-500">✓</span> <b>Panel de Control Propio</b></li>
                <li className="flex items-start gap-3"><span className="text-emerald-500">✓</span> Catálogo de productos autogestionable</li>
                <li className="flex items-start gap-3"><span className="text-emerald-500">✓</span> Buscador rápido con PostgreSQL</li>
              </ul>
              <div className="p-4 bg-gray-900 rounded-lg border border-gray-800 mb-8">
                <p className="text-xs text-gray-400 text-center">Mantenimiento y Hosting</p>
                <p className="text-emerald-400 font-bold text-center mt-1">$40 USD / mes</p>
              </div>
              <a href="https://wa.link/7x3t3q" className="block w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white text-center font-bold rounded-lg transition-colors shadow-lg shadow-emerald-900/50">
                Elegir Plan
              </a>
            </motion.div>

            {/* Plan 3: Tope */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-gray-950 p-8 rounded-2xl border border-gray-800 hover:border-gray-600 transition-colors"
            >
              <h3 className="text-2xl font-bold text-white mb-2">E-Commerce</h3>
              <p className="text-gray-400 text-sm mb-6">La solución total para vender online 24/7 y procesar pagos.</p>
              <div className="mb-6">
                <span className="text-4xl font-extrabold text-white">$700.000</span>
                <span className="text-gray-500 font-medium"> ARS</span>
              </div>
              <ul className="text-gray-300 space-y-4 mb-8 text-sm">
                <li className="flex items-start gap-3"><span className="text-emerald-500">✓</span> Todo lo del Plan Catálogo</li>
                <li className="flex items-start gap-3"><span className="text-emerald-500">✓</span> Carrito de compras avanzado</li>
                <li className="flex items-start gap-3"><span className="text-emerald-500">✓</span> Integración con MercadoPago</li>
                <li className="flex items-start gap-3"><span className="text-emerald-500">✓</span> Login y registro de usuarios</li>
              </ul>
              <div className="p-4 bg-gray-900 rounded-lg border border-gray-800 mb-8">
                <p className="text-xs text-gray-400 text-center">Mantenimiento y Hosting</p>
                <p className="text-emerald-400 font-bold text-center mt-1">$50 USD / mes</p>
              </div>
              <a href="https://wa.link/7x3t3q" className="block w-full py-3 px-4 bg-gray-800 hover:bg-gray-700 text-white text-center font-bold rounded-lg transition-colors border border-gray-700">
                Consultar Plan
              </a>
            </motion.div>

          </div>
        </div>
      </section>
      {/* PREGUNTAS FRECUENTES (FAQ) */}
      <section id="faq" className="bg-gray-900 py-24 border-t border-gray-800 overflow-hidden">
        <div className="container mx-auto px-6 max-w-4xl">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Preguntas <span className="text-emerald-500">Frecuentes.</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Despejá tus dudas antes de arrancar. Sin tecnicismos, directo al grano.
            </p>
          </motion.div>
          
          <div className="space-y-4">
            
            {/* Pregunta 1 */}
            <motion.details 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group bg-gray-950 border border-gray-800 rounded-xl [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex items-center justify-between p-6 cursor-pointer text-white font-bold text-lg hover:text-emerald-400 transition-colors">
                ¿Tengo que saber de computación o diseño?
                <span className="text-emerald-500 transition duration-300 group-open:-rotate-180">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                No, para nada. El servicio de PIVOT es "llave en mano". Nosotros nos encargamos de todo el código, el diseño y la configuración técnica. Si elegís un plan con panel de control, te enseñamos a usarlo en 15 minutos para que puedas subir fotos y cambiar precios vos mismo, tan fácil como usar Facebook.
              </div>
            </motion.details>

            {/* Pregunta 2 */}
            <motion.details 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group bg-gray-950 border border-gray-800 rounded-xl [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex items-center justify-between p-6 cursor-pointer text-white font-bold text-lg hover:text-emerald-400 transition-colors">
                ¿Qué diferencia hay con Tiendanube o Wix?
                <span className="text-emerald-500 transition duration-300 group-open:-rotate-180">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                Wix o Tiendanube son plataformas de "hacelo vos mismo" donde alquilás una plantilla genérica. PIVOT es desarrollo profesional a medida. Utilizamos código real que usan las grandes empresas para que tu web cargue al instante y posicione mejor en Google. Además, no hablás con un chat de soporte; nos sentamos a tomar un café en tu local y lo resolvemos en persona.
              </div>
            </motion.details>

            {/* Pregunta 3 */}
            <motion.details 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="group bg-gray-950 border border-gray-800 rounded-xl [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex items-center justify-between p-6 cursor-pointer text-white font-bold text-lg hover:text-emerald-400 transition-colors">
                ¿Qué incluye el abono mensual de mantenimiento?
                <span className="text-emerald-500 transition duration-300 group-open:-rotate-180">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                El abono funciona como un seguro para tu tranquilidad. Cubre el pago del servidor en la nube (Hosting de alta velocidad), la renovación del certificado de seguridad (el candadito HTTPS), copias de seguridad de tu base de datos y un monitoreo constante para asegurar que tu web esté siempre funcionando. Vos te ocupás de tu negocio, PIVOT cuida tu web.
              </div>
            </motion.details>

            {/* Pregunta 4 */}
            <motion.details 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="group bg-gray-950 border border-gray-800 rounded-xl [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex items-center justify-between p-6 cursor-pointer text-white font-bold text-lg hover:text-emerald-400 transition-colors">
                ¿Quién es el dueño de la página web?
                <span className="text-emerald-500 transition duration-300 group-open:-rotate-180">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                Vos sos el dueño absoluto. Una vez finalizado el pago del desarrollo, el código, el dominio y la base de datos te pertenecen. No te cobramos comisiones por ventas ni "secuestramos" tu página si el día de mañana decidís mudar tu servicio a otro lado.
              </div>
            </motion.details>

          </div>
        </div>
      </section>
      {/* CALL TO ACTION FINAL */}
      <section className="bg-emerald-600 py-20 relative overflow-hidden">
        {/* Fondo decorativo */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute transform rotate-45 bg-white w-96 h-96 rounded-[100px] -top-20 -left-20"></div>
          <div className="absolute transform rotate-45 bg-white w-96 h-96 rounded-[100px] bottom-10 right-10"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-6"
          >
            ¿Listo para digitalizar tu negocio en serio?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-emerald-100 text-lg md:text-xl max-w-2xl mx-auto mb-10"
          >
            Escribinos hoy. Nos acercamos a tu empresa, escuchamos qué necesitás y te armamos un presupuesto sin compromiso.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a 
              href="https://wa.link/nofyhp"  
              className="inline-flex items-center gap-3 bg-gray-950 hover:bg-gray-900 text-white px-10 py-5 rounded-xl font-bold text-xl shadow-2xl transition-transform hover:scale-105"
            >
              💬 Iniciar chat por WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-950 py-12 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8 items-center text-center md:text-left">
            
            {/* Marca */}
            <div>
              <div className="text-3xl font-bold tracking-tighter mb-2">
                PI<span className="text-emerald-500">V</span>OT
              </div>
              <p className="text-gray-500 text-sm">El cambio en la dirección correcta.</p>
            </div>

            {/* Ubicación y Contacto */}
            <div className="flex flex-col items-center md:items-start text-gray-400 text-sm space-y-2">
              <p className="flex items-center gap-2">
                <span>📍</span> Rafaela, Santa Fe, Argentina.
              </p>
              <p className="flex items-center gap-2">
                <span>🤝</span> Atención presencial exclusiva.
              </p>
            </div>

            {/* Redes Sociales */}
            <div className="flex justify-center md:justify-end gap-4">
              <a href="https://www.instagram.com/pivot.web/" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:text-emerald-400 hover:bg-gray-800 transition-colors">
                {/* Ícono de Instagram (SVG simplificado) */}
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:text-emerald-400 hover:bg-gray-800 transition-colors">
                {/* Ícono de LinkedIn (SVG simplificado) */}
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
            </div>

          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
            <p>&copy; {new Date().getFullYear()} PIVOT Desarrollo Web. Todos los derechos reservados.</p>
            <p className="mt-2 md:mt-0">Diseñado y programado con <span className="text-emerald-500">&lt;/&gt;</span> en Argentina.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;