import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import { fadeUp, slideLeft, staggerContainer, scaleIn } from '../animations/variants'

const rolesGrandes = [
  { icon: 'sports_soccer', titulo: 'Directores Deportivos', desc: 'Arquitectos de la estrategia de fútbol, adquisición de talento y visión deportiva a largo plazo.' },
  { icon: 'group', titulo: 'Entrenadores Principales', desc: 'Líderes tácticos capaces de gestionar plantillas de elite y entregar resultados inmediatos.' },
]

const rolesMenores = [
  { icon: 'business_center', titulo: 'CEOs de Clubes', desc: 'Líderes ejecutivos que impulsan el crecimiento comercial y la excelencia operacional.' },
  { icon: 'architecture', titulo: 'Coordinadores Técnicos', desc: 'Nexo entre el directorio, el cuerpo técnico y el plantel de jugadores.' },
  { icon: 'school', titulo: 'Directores de Academia', desc: 'Visionarios dedicados al desarrollo de talento joven y la metodología del club.' },
]

const procesoPasos = [
  { num: '1', titulo: 'Definir el Perfil', desc: 'Consulta rigurosa para establecer requisitos exactos, compatibilidad cultural y objetivos estratégicos.', activo: false },
  { num: '2', titulo: 'Mapeo de Mercado', desc: 'Análisis integral del panorama ejecutivo global para identificar candidatos de alto potencial.', activo: false },
  { num: '3', titulo: 'Contacto con Candidatos', desc: 'Acercamiento discreto y dirigido a líderes prospectivos.', activo: false },
  { num: '4', titulo: 'Evaluación', desc: 'Evaluación profunda de capacidades estratégicas, trayectoria y alineación cultural.', activo: false },
  { num: '5', titulo: 'Colocación e Incorporación', desc: 'Facilitación de negociaciones e integración estructurada en la nueva organización.', activo: true },
]

export default function BusquedaEjecutiva() {
  return (
    <PageTransition>
      <div className="pt-32 pb-stack-lg max-w-container-max mx-auto px-margin space-y-stack-lg">

        {/* ── HERO ─────────────────────────────────────── */}
        <header className="grid grid-cols-12 gap-gutter pt-stack-lg pb-stack-lg border-b border-surface-container-high">
          <div className="col-span-12 md:col-span-8">
            <motion.h1
              className="font-display-xl text-display-xl text-on-background uppercase mb-6"
              initial={{ opacity: 0, y: 40, filter: 'blur(6px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              BÚSQUEDA EJECUTIVA
            </motion.h1>
            <motion.p
              className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
            >
              Identificando y colocando liderazgo elite en fútbol en clubes, federaciones y organizaciones.
            </motion.p>
          </div>
          <div className="col-span-12 md:col-span-4 hidden md:flex items-end justify-end">
            <motion.div
              className="h-[1px] bg-primary-container"
              initial={{ width: 0 }}
              animate={{ width: 64 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        </header>

        {/* ── EL DESAFÍO ───────────────────────────────── */}
        <motion.section
          className="max-w-3xl mx-auto text-center py-stack-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={scaleIn}
        >
          <h2 className="font-headline-md text-headline-md text-primary mb-8 uppercase">El Desafío</h2>
          <div className="font-body-lg text-body-lg text-on-background space-y-6">
            <p>Encontrar al ejecutivo de fútbol correcto es una tarea compleja. El juego moderno requiere líderes que posean no solo un profundo entendimiento de las operaciones de fútbol, sino también la perspicacia comercial para navegar una industria globalizada y altamente escrutada. Demanda visión, discreción absoluta y un historial probado de ejecución estratégica bajo presión.</p>
            <p>Aprovechamos nuestra red clandestina y metodologías de evaluación rigurosas para identificar individuos capaces de transformar estructuras organizacionales. Nuestro enfoque está en colocar visionarios que se alineen perfectamente con las ambiciones culturales y estratégicas específicas de nuestra clientela de elite.</p>
          </div>
        </motion.section>

        {/* ── LO QUE COLOCAMOS ─────────────────────────── */}
        <section className="py-stack-lg">
          <motion.h2
            className="font-headline-md text-headline-md text-on-background uppercase mb-12 flex items-center gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={slideLeft}
          >
            Lo Que Colocamos
            <motion.span
              className="flex-grow bg-surface-container-high block"
              style={{ height: 1 }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-gutter mb-gutter"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerContainer}
          >
            {rolesGrandes.map(({ icon, titulo, desc }) => (
              <motion.div
                key={titulo}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.22 }}
                className="bg-surface-container-low border-t border-primary-container p-8 hover:bg-surface-container transition-colors group cursor-default"
              >
                <span className="material-symbols-outlined text-primary-container text-4xl mb-6 block" style={{ fontVariationSettings: "'FILL' 1" }}>{icon}</span>
                <h3 className="font-headline-md text-[24px] text-on-background uppercase mb-4">{titulo}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">{desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-gutter"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerContainer}
          >
            {rolesMenores.map(({ icon, titulo, desc }) => (
              <motion.div
                key={titulo}
                variants={fadeUp}
                whileHover={{ y: -4, borderColor: '#c9a84c' }}
                transition={{ duration: 0.22 }}
                className="bg-surface-container-low p-8 border border-surface-container-high cursor-default"
              >
                <span className="material-symbols-outlined text-primary-container text-3xl mb-4 block" style={{ fontVariationSettings: "'FILL' 1" }}>{icon}</span>
                <h3 className="font-headline-md text-[20px] text-on-background uppercase mb-2">{titulo}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ── PROCESO ──────────────────────────────────── */}
        <section className="py-stack-lg border-t border-surface-container-high">
          <div className="grid grid-cols-12 gap-gutter">
            <div className="col-span-12 md:col-span-4">
              <motion.h2
                className="font-headline-lg text-headline-lg text-on-background uppercase sticky top-32"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                variants={slideLeft}
              >
                Nuestro Proceso de Búsqueda
              </motion.h2>
            </div>
            <div className="col-span-12 md:col-span-8 relative">
              {/* Vertical connecting line */}
              <div className="absolute left-[23px] top-4 bottom-4 w-[1px] bg-surface-container-high" />
              <motion.div
                className="absolute left-[23px] top-4 w-[1px] bg-primary-container origin-top"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                style={{ height: 'calc(100% - 32px)' }}
              />

              <div className="space-y-12">
                {procesoPasos.map(({ num, titulo, desc, activo }, i) => (
                  <motion.div
                    key={num}
                    className="flex gap-8 relative z-10"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, delay: 0.15 + i * 0.1 }}
                  >
                    <motion.div
                      className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 font-headline-md text-[20px] ${activo ? 'bg-primary-container text-on-primary-fixed' : 'bg-surface-container border border-primary-container text-primary-container'}`}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {num}
                    </motion.div>
                    <div className="pt-2">
                      <h3 className={`font-headline-md text-[24px] uppercase mb-2 ${activo ? 'text-primary-container' : 'text-on-background'}`}>{titulo}</h3>
                      <p className="font-body-md text-body-md text-on-surface-variant">{desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CLÁUSULA DE DISCRECIÓN ───────────────────── */}
        <motion.section
          className="bg-surface-container-low py-8 px-margin text-center border-y border-surface-container-high my-stack-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={scaleIn}
        >
          <p className="font-body-lg text-body-lg text-outline italic">
            "Todas las búsquedas se realizan con absoluta confidencialidad."
          </p>
        </motion.section>

        {/* ── CTA ─────────────────────────────────────── */}
        <motion.section
          className="py-stack-lg text-center bg-surface-dim border border-surface-container-high p-margin"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={scaleIn}
        >
          <h2 className="font-headline-lg text-headline-lg text-on-background uppercase mb-8">
            ¿Buscando a su próximo líder en fútbol?
          </h2>
          <Link to="/contacto">
            <motion.span
              className="block bg-primary-container text-on-primary-fixed uppercase font-headline-md text-[18px] tracking-widest px-10 py-4 inline-flex items-center gap-2"
              whileHover={{ backgroundColor: '#e6c364', scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
            >
              ENVIAR UN MANDATO DE BÚSQUEDA
              <span className="material-symbols-outlined">arrow_forward</span>
            </motion.span>
          </Link>
        </motion.section>
      </div>
    </PageTransition>
  )
}
