import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import { fadeUp, slideLeft, slideRight, staggerContainer, scaleIn } from '../animations/variants'

const chipGestion = [
  'Representación de Atletas',
  'Negociación de Contratos',
  'Posicionamiento de Marca',
  'Planificación Post-Carrera',
]

const pasos = [
  { num: '01', titulo: 'Consulta Inicial', desc: 'Una discusión confidencial de alto nivel para entender el mandato central, identificar puntos de presión críticos y establecer parámetros.' },
  { num: '02', titulo: 'Evaluación Diagnóstica', desc: 'Análisis riguroso que combina métricas de datos propietarios con auditorías cualitativas profundas de estructuras y personal existentes.' },
  { num: '03', titulo: 'Diseño Estratégico', desc: 'Formulación de soluciones arquitectónicas a medida, marcos operacionales e inteligencia accionable lista para implementación.' },
  { num: '04', titulo: 'Ejecución Continua', desc: 'Apoyo de asesoría continua, monitoreo de la implementación estratégica y recalibración dinámica a medida que las condiciones del mercado evolucionan.' },
]

export default function Servicios() {
  return (
    <PageTransition>
      <div className="pt-20 min-h-screen flex flex-col">
        <div className="flex-grow pt-[80px] pb-stack-lg">

          {/* ── HERO ────────────────────────────────────── */}
          <section className="max-w-container-max mx-auto px-margin py-stack-lg border-b border-surface-container-high">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
              <motion.div
                className="md:col-span-8"
                initial={{ opacity: 0, y: 40, filter: 'blur(6px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <h1 className="font-display-xl text-display-xl text-on-background uppercase mb-stack-md">
                  DISCIPLINAS CENTRALES
                </h1>
              </motion.div>
              <motion.div
                className="md:col-span-4 flex items-end"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                <p className="font-body-lg text-body-lg text-on-surface-variant border-l border-primary-container pl-4 py-2">
                  Servicios especializados para clubes, atletas y organizaciones deportivas que buscan ventaja estratégica.
                </p>
              </motion.div>
            </div>
          </section>

          {/* ── ASESORÍA EN FÚTBOL ──────────────────────── */}
          <section className="max-w-container-max mx-auto px-margin py-stack-lg">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
              <motion.div
                className="md:col-span-6 pr-0 md:pr-12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                variants={slideLeft}
              >
                <div className="inline-block bg-surface-container-low border border-surface-container-high px-3 py-1 mb-6">
                  <span className="font-label-caps text-label-caps text-primary-container uppercase tracking-widest">Asesoría</span>
                </div>
                <h2 className="font-headline-lg text-headline-lg text-on-background uppercase mb-6">Asesoría en Fútbol</h2>
                <div className="space-y-6 text-on-surface-variant">
                  <p>Brindamos asesoramiento confidencial de alto nivel a grupos de propietarios de clubes que navegan transiciones complejas o buscan reestructurar sus operaciones deportivas para el éxito sostenido.</p>
                  <p>Nuestra asesoría se extiende a los Directores Deportivos, ofreciendo una caja de resonancia neutral y experta para la arquitectura del plantel, designaciones de personal técnico y alineación filosófica a largo plazo.</p>
                  <p>Para consejos ejecutivos, entregamos análisis objetivos de las estructuras deportivas actuales, identificando ineficiencias y proponiendo marcos rigurosos y modernos adaptados al contexto y ambiciones específicas del club.</p>
                </div>
              </motion.div>

              <motion.div
                className="md:col-span-5 md:col-start-8 flex flex-col justify-center border-t border-primary-container bg-surface-container-low p-8 mt-8 md:mt-0"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                variants={slideRight}
              >
                <h3 className="font-label-caps text-label-caps text-on-surface-variant uppercase mb-8 tracking-widest">Entregables Clave</h3>
                <motion.ul
                  className="space-y-6"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={staggerContainer}
                >
                  {['Revisiones Estratégicas de Propiedad', 'Mentoría de Director Técnico', 'Auditorías Deportivas a Nivel Directivo', 'Due Diligence Deportivo en M&A'].map((item) => (
                    <motion.li key={item} variants={fadeUp} className="flex items-start gap-4">
                      <span className="material-symbols-outlined text-primary-container mt-1">check_circle</span>
                      <span className="font-body-lg text-body-lg">{item}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </div>
          </section>

          {/* ── CONSULTORÍA DEPORTIVA ───────────────────── */}
          <section className="max-w-container-max mx-auto px-margin py-stack-lg border-t border-surface-container-high bg-surface-container-low">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
              <motion.div
                className="md:col-span-5 flex flex-col justify-center border-t border-primary-container bg-background p-8 order-2 md:order-1 mt-8 md:mt-0 relative overflow-hidden"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                variants={slideLeft}
              >
                <div
                  className="absolute inset-0 opacity-20 pointer-events-none bg-cover bg-center mix-blend-luminosity grayscale"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518605368461-1e1e1a8a25c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')" }}
                />
                <div className="relative z-10">
                  <h3 className="font-label-caps text-label-caps text-on-surface-variant uppercase mb-8 tracking-widest">Capacidades Fundamentales</h3>
                  <motion.ul
                    className="space-y-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                  >
                    {[
                      { icon: 'analytics', label: 'Análisis de Datos Avanzado' },
                      { icon: 'radar', label: 'Inteligencia de Campo' },
                      { icon: 'person_search', label: 'Optimización de Reclutamiento' },
                      { icon: 'fact_check', label: 'Auditoría Operacional' },
                    ].map(({ icon, label }) => (
                      <motion.li key={label} variants={fadeUp} className="flex items-start gap-4">
                        <span className="material-symbols-outlined text-primary-container mt-1">{icon}</span>
                        <span className="font-body-lg text-body-lg">{label}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              </motion.div>

              <motion.div
                className="md:col-span-6 md:col-start-7 pl-0 md:pl-12 order-1 md:order-2"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                variants={slideRight}
              >
                <div className="inline-block bg-surface-container-low border border-surface-container-high px-3 py-1 mb-6">
                  <span className="font-label-caps text-label-caps text-primary-container uppercase tracking-widest">Consultoría</span>
                </div>
                <h2 className="font-headline-lg text-headline-lg text-on-background uppercase mb-6">Consultoría Deportiva</h2>
                <div className="space-y-6 text-on-surface-variant">
                  <p>Aprovechamos herramientas analíticas de vanguardia y profunda experiencia en el dominio para proporcionar inteligencia accionable que impulsa la ventaja competitiva en el terreno de juego.</p>
                  <p>Nuestros servicios de consultoría profundizan en la optimización del reclutamiento, asegurando que la estrategia de adquisición de talento de un club esté alineada tanto con las realidades financieras como con la identidad táctica.</p>
                  <p>A través de una auditoría operacional integral, sometemos a prueba de estrés los flujos de trabajo internos, desde la integración de la academia hasta la logística del primer equipo.</p>
                </div>
              </motion.div>
            </div>
          </section>

          {/* ── GESTIÓN DEPORTIVA ───────────────────────── */}
          <section className="max-w-container-max mx-auto px-margin py-stack-lg border-t border-surface-container-high">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
              <motion.div
                className="md:col-span-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                variants={slideLeft}
              >
                <div className="inline-block bg-surface-container-low border border-surface-container-high px-3 py-1 mb-6">
                  <span className="font-label-caps text-label-caps text-primary-container uppercase tracking-widest">Gestión</span>
                </div>
                <h2 className="font-headline-lg text-headline-lg text-on-background uppercase mb-6">Gestión Deportiva</h2>
                <div className="space-y-6 text-on-surface-variant max-w-3xl">
                  <p>Más allá de la asesoría institucional, ofrecemos un servicio de gestión boutique para atletas de elite que requieren un enfoque integral y estratégico de sus carreras. Actuamos como arquitectos del viaje profesional de un atleta.</p>
                  <p>Esto abarca negociaciones contractuales rigurosas diseñadas para maximizar tanto el valor inmediato como la seguridad a largo plazo, junto con un sofisticado posicionamiento de marca que resuena con socios comerciales premium.</p>
                  <p>Crucialmente, integramos la planificación post-carrera desde el primer día, asegurando que nuestros clientes estén posicionados para transiciones fluidas hacia la propiedad, roles ejecutivos o inversiones estratégicas.</p>
                </div>
              </motion.div>

              <motion.div
                className="md:col-span-4 flex flex-col justify-end gap-4 mt-8 md:mt-0 border-l border-surface-container-high pl-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                variants={staggerContainer}
              >
                {chipGestion.map((chip) => (
                  <motion.div
                    key={chip}
                    variants={fadeUp}
                    whileHover={{ x: 4, borderColor: '#c9a84c' }}
                    transition={{ duration: 0.2 }}
                    className="bg-surface-container-low border border-surface-container-high px-4 py-3"
                  >
                    <span className="font-label-caps text-label-caps text-primary-container uppercase">{chip}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* ── CÓMO TRABAJAMOS ─────────────────────────── */}
          <section className="bg-surface-container-lowest py-stack-lg border-y border-surface-container-high">
            <div className="max-w-container-max mx-auto px-margin">
              <motion.h2
                className="font-headline-lg text-headline-lg text-on-background uppercase mb-stack-md text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                variants={fadeUp}
              >
                CÓMO TRABAJAMOS
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                {/* Connector line */}
                <div className="hidden md:block absolute top-[24px] left-0 w-full h-[1px] bg-surface-container-high z-0" />
                <motion.div
                  className="hidden md:block absolute top-[24px] left-0 h-[1px] bg-primary-container z-0 origin-left"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  style={{ width: '100%' }}
                />

                {pasos.map(({ num, titulo, desc }, i) => (
                  <motion.div
                    key={num}
                    className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                  >
                    <motion.div
                      className="w-12 h-12 bg-background border border-primary-container flex items-center justify-center font-headline-md text-primary-container mb-6"
                      whileHover={{ backgroundColor: '#c9a84c', color: '#0e0e0e' }}
                      transition={{ duration: 0.2 }}
                    >
                      {num}
                    </motion.div>
                    <h4 className="font-headline-md text-xl uppercase mb-3">{titulo}</h4>
                    <p className="text-on-surface-variant font-body-md text-sm">{desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* ── CTA ─────────────────────────────────────── */}
          <motion.section
            className="max-w-container-max mx-auto px-margin py-stack-lg text-center flex flex-col items-center justify-center min-h-[409px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={scaleIn}
          >
            <h2 className="font-headline-lg text-headline-lg text-on-background uppercase mb-8">
              Cada mandato es a medida.
            </h2>
            <Link to="/contacto">
              <motion.span
                className="block bg-primary-container text-surface-container-lowest font-headline-md px-10 py-4 uppercase"
                whileHover={{ backgroundColor: '#e6c364', scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
              >
                SOLICITAR UNA CONSULTA
              </motion.span>
            </Link>
          </motion.section>
        </div>
      </div>
    </PageTransition>
  )
}
