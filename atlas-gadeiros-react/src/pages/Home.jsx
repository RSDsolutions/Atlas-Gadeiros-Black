import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import { fadeUp, fadeIn, slideLeft, slideRight, staggerContainer, scaleIn } from '../animations/variants'

const servicios = [
  {
    icon: 'strategy',
    titulo: 'Asesoría en Fútbol',
    desc: 'Orientación estratégica para propietarios de clubes, directores deportivos y consejos ejecutivos. Diseñamos proyectos deportivos, optimizamos estructuras técnicas y proporcionamos inteligencia discreta de mercado para asegurar ventaja competitiva.',
  },
  {
    icon: 'monitoring',
    titulo: 'Consultoría Deportiva',
    desc: 'Análisis basado en datos y consultoría operacional. Conectamos la analítica con la realidad del terreno de juego, auditando departamentos de reclutamiento y optimizando operaciones del club para máxima eficiencia.',
  },
  {
    icon: 'manage_accounts',
    titulo: 'Gestión Deportiva',
    desc: 'Representación a medida para atletas de elite y cuerpo técnico. Gestionamos carreras con una mentalidad estratégica a largo plazo, abarcando negociaciones contractuales, posicionamiento de marca y planificación post-carrera.',
  },
]

const ventajas = [
  { icon: 'verified_user', titulo: 'Discreción', desc: 'Operamos estrictamente entre bastidores, garantizando que sus movimientos estratégicos permanezcan confidenciales hasta su ejecución.' },
  { icon: 'language', titulo: 'Red Global', desc: 'Acceso inigualable a los principales tomadores de decisiones en las grandes ligas europeas y mercados emergentes.' },
  { icon: 'architecture', titulo: 'Precisión Estructural', desc: 'No solo resolvemos problemas inmediatos; construimos infraestructuras deportivas resilientes para el éxito sostenible.' },
  { icon: 'analytics', titulo: 'Consejo Empírico', desc: 'Nuestros consejos se basan en un riguroso análisis de datos, mitigando el riesgo en entornos de fútbol de alto impacto.' },
]

export default function Home() {
  return (
    <PageTransition>
      {/* ── HERO ─────────────────────────────────────────── */}
      <header className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background image */}
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            alt="Estadio de fútbol"
            className="w-full h-full object-cover opacity-20"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAw7iR1nEG22j420BeAEbWHQVzDv8kqppXrS9jYuvYRC6FAzetFcOoXbCb6cw3X-EK-NHjxJDXBmrflZ37H89GLvcWpfrdGBzeLyBSOoqUN10GRtZ5xRZtRcTiBJqqytaLPL_By5T_ZcQ7ePrVbZOULYRy59W4Yk8qsrB_1Bb6IQSOKnFNPHH3AFLAeTRCcDS0hD4yUcs273hV2ntK97vRNNdPiTN6zR3C4FOx7a6QE4t3ML_VsWfvM4BFPQHkn7D4S0C6mhp8q0Ig"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        </motion.div>

        {/* Gold accent line */}
        <div className="absolute top-0 left-0 w-full h-[1px] overflow-hidden z-10">
          <motion.div
            className="h-full bg-gradient-to-r from-transparent via-primary to-transparent"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>

        <div className="relative z-10 w-full px-margin max-w-container-max mx-auto">
          <div className="max-w-3xl">
            {/* Label chip */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block border border-primary/40 px-3 py-1 mb-8"
            >
              <span className="font-label-caps text-label-caps text-primary uppercase">
                Grupo Deportivo Elite
              </span>
            </motion.div>

            {/* Hero title — blur + fade + slide */}
            <motion.h1
              className="font-display-xl text-display-xl text-on-background mb-stack-md uppercase"
              initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              Asesoría y Gestión Elite en Fútbol
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="font-body-lg text-body-lg text-on-surface-variant mb-stack-lg max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              Un equipo de especialistas que ofrece consultoría estratégica y gestión experta para
              clubes de fútbol, atletas y organizaciones.
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.78 }}
            >
              <Link to="/servicios">
                <motion.span
                  className="block bg-primary-container text-background font-headline-md text-body-lg uppercase px-8 py-4"
                  whileHover={{ backgroundColor: '#e6c364', scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.2 }}
                >
                  Nuestros Servicios
                </motion.span>
              </Link>
              <Link to="/contacto">
                <motion.span
                  className="block border border-primary-container text-primary-container font-headline-md text-body-lg uppercase px-8 py-4"
                  whileHover={{ backgroundColor: 'rgba(201,168,76,0.1)', scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.2 }}
                >
                  Contáctenos
                </motion.span>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
        >
          <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest text-[10px]">
            Scroll
          </span>
          <motion.div
            className="w-[1px] h-8 bg-primary-container"
            animate={{ scaleY: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </header>

      {/* ── NOSOTROS PREVIEW ─────────────────────────────── */}
      <section className="py-stack-lg px-margin bg-surface-container-lowest border-gold-shimmer">
        <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <motion.div
            className="md:col-span-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={slideLeft}
          >
            <h2 className="font-headline-lg text-headline-lg text-primary mb-stack-md uppercase">
              El Estándar de la Excelencia
            </h2>
            <div className="space-y-6 text-on-surface-variant max-w-2xl">
              <p>
                Atlas &amp; Gadeiros opera en la intersección de la ambición deportiva y la
                realidad operacional. Somos una firma exclusiva de asesoría y gestión dedicada
                únicamente a los estratos superiores del fútbol profesional.
              </p>
              <p>
                Nuestra misión es brindar asesoramiento estratégico de alto impacto con absoluta
                discreción. Rechazamos el ruido en favor de la precisión, combinando análisis
                riguroso de datos con décadas de experiencia ejecutiva en el fútbol de élite.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="md:col-span-4 flex flex-col justify-center gap-8 mt-12 md:mt-0 border-l border-surface-container-high pl-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerContainer}
          >
            {[
              { num: '01', label: 'Expertos multidisciplinarios' },
              { num: '02', label: 'Enfoque orientado a resultados' },
              { num: '03', label: 'Visión global del fútbol' },
            ].map(({ num, label }) => (
              <motion.div key={num} variants={fadeUp}>
                <div className="font-headline-md text-headline-md text-primary">{num}</div>
                <div className="font-label-caps text-label-caps text-on-background uppercase mt-2">
                  {label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── SERVICIOS ────────────────────────────────────── */}
      <section className="py-stack-lg px-margin">
        <div className="max-w-container-max mx-auto">
          <motion.h2
            className="font-headline-lg text-headline-lg text-on-background mb-stack-lg uppercase text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
          >
            Disciplinas Centrales
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-gutter"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerContainer}
          >
            {servicios.map(({ icon, titulo, desc }) => (
              <motion.div
                key={titulo}
                variants={fadeUp}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="bg-surface-container-low p-8 border-t border-primary-container hover:bg-surface-container transition-colors group cursor-default"
              >
                <motion.span
                  className="material-symbols-outlined text-4xl text-primary-container mb-6 block"
                  style={{ fontVariationSettings: "'FILL' 0" }}
                  whileHover={{ scale: 1.15, color: '#e6c364' }}
                  transition={{ duration: 0.2 }}
                >
                  {icon}
                </motion.span>
                <h3 className="font-headline-md text-headline-md text-on-background mb-4 uppercase">
                  {titulo}
                </h3>
                <p className="text-on-surface-variant group-hover:text-on-background transition-colors">
                  {desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── LA VENTAJA ATLAS ─────────────────────────────── */}
      <section className="py-stack-lg px-margin bg-surface-container-lowest border-y border-surface-container-high">
        <div className="max-w-container-max mx-auto">
          <motion.h2
            className="font-headline-lg text-headline-lg text-primary mb-stack-lg uppercase"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={slideLeft}
          >
            La Ventaja Atlas
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-gutter"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerContainer}
          >
            {ventajas.map(({ icon, titulo, desc }, i) => (
              <motion.div
                key={titulo}
                variants={i % 2 === 0 ? slideLeft : slideRight}
                className="flex items-start gap-6"
              >
                <motion.span
                  className="material-symbols-outlined text-3xl text-primary-container shrink-0 mt-1"
                  style={{ fontVariationSettings: "'FILL' 0" }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {icon}
                </motion.span>
                <div>
                  <h4 className="font-headline-md text-headline-md text-on-background text-2xl mb-2 uppercase">
                    {titulo}
                  </h4>
                  <p className="text-on-surface-variant">{desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA CONTACTO ─────────────────────────────────── */}
      <section className="py-stack-lg px-margin">
        <motion.div
          className="max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={scaleIn}
        >
          <h2 className="font-headline-lg text-headline-lg text-on-background mb-stack-md uppercase text-center">
            Iniciar Diálogo
          </h2>
          <p className="text-center text-on-surface-variant mb-12">
            Contacte nuestras oficinas para concertar una consulta confidencial.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 text-center border border-primary/20 p-12 bg-surface-container-low gold-glow">
            <a
              className="font-headline-md text-2xl text-primary-container hover:text-primary-fixed-dim transition-colors"
              href="mailto:office@atlasgadeiros.com"
            >
              office@atlasgadeiros.com
            </a>
            <div className="flex items-center gap-2 text-on-surface-variant font-label-caps text-label-caps uppercase mt-2">
              <span
                className="material-symbols-outlined text-sm"
                style={{ fontVariationSettings: "'FILL' 0" }}
              >
                location_on
              </span>
              Londres / Lisboa
            </div>
            <Link to="/contacto">
              <motion.span
                className="mt-4 block bg-primary-container text-background font-headline-md text-body-lg uppercase px-8 py-4"
                whileHover={{ backgroundColor: '#e6c364', scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
              >
                Enviar Consulta
              </motion.span>
            </Link>
          </div>
        </motion.div>
      </section>
    </PageTransition>
  )
}
