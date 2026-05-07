import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import { fadeUp, fadeIn, slideLeft, slideRight, staggerContainer, staggerContainerSlow, scaleIn } from '../animations/variants'

const equipo = [
  {
    nombre: 'Especialista I',
    rol: 'Adquisición Estratégica',
    descripcion: 'Diseñando tomas de control estructurales y transiciones de propiedad complejas en las principales ligas europeas.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDea0H9kIK7WmiLyHMwJOh7883yOpjyeYgEvcy2-nR3eimtZoh7osS1l_FPjKL5OOwS5FVf6RmQ4LMOzbMUDaRxjChpU-qCVI1D4lRa5oWtSdN0EB42qBNXT7XHGENvUdecKR6H01OQ1XfOqZ8Y1GnbpWSJVDCGoDEEzLWDlM5QTV4gWRjieYF1kUfmJ6bXMaPBktGi1VK7TnajHunW10pkZp-ogGuB2wye2ovVY_9m0S1OGzD-v9JqwViPQzhdM20axG-XoyLvFjk',
  },
  {
    nombre: 'Especialista II',
    rol: 'Arquitectura Deportiva',
    descripcion: 'Diseñando marcos técnicos de alto rendimiento y alineando perfiles de gestión con la visión de los propietarios.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCpC75k0aJXzZG4pOCdxLd1lGf2h-AJFR2_6-aPUTE_Wm1zvwCV32FP7qsTGLPhP3Wfn62SgdQNeHowY8Y530MPPW2PiGMeVK2CCjm9IQmI3qJLT3JL84edJ4bt1_Tl6lfBeyy4vV-8fKA5XBuqt-SMUABB8_QVCuqczpirMKKaFtvM_cquO_6e3BUDQWCpYgdWmfQW52sHwgpNs464i3BRF8LG0gBM_EbW7PbL3EaJ8lIhSfBS20kZajay64iRQ_0u-aWl7vW8OvE',
  },
  {
    nombre: 'Especialista III',
    rol: 'Riesgo y Capital',
    descripcion: 'Mitigando exposición y optimizando el despliegue de capital en mercados de jugadores hiperinflados.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-1uYoojQu1GOJqqLkVtHBKc9pBgVSMCRJsrCfvI6T5o5Nq-FqY86a8UBojXp1EGXSCigeo_KjttE1SQGdXxmdxL0QacwdHCB5_Z3Jso6HBWD2YoO5qndGkv4UoGEkFWXu19iUY0Sq7arjw61rSFLn_g1YRWVNgSr-Map88tqhT1sjxCM1gANjL2wUtTfAWXtZxpdGTkNF0Wk7-ela-kBzNj1f14KiGdg0lhaPd8aRaIydUltXeNxiEaW4rAArB-YeHuk2Y0bVCk8',
  },
]

const principios = [
  { titulo: 'Discreción', desc: 'Operando con absoluta confidencialidad en entornos de alta exposición.' },
  { titulo: 'Precisión', desc: 'Ejecutando estrategias con exactitud y cero margen de error.' },
  { titulo: 'Lealtad', desc: 'Compromiso inquebrantable con el éxito a largo plazo de nuestros clientes.' },
  { titulo: 'Excelencia', desc: 'Exigiendo el más alto estándar en cada esfuerzo analítico y operacional.' },
]

const enfoque = [
  { num: '01', titulo: 'Evaluación', desc: 'Una auditoría forense de las estructuras deportivas y corporativas existentes, identificando vulnerabilidades y capital latente.' },
  { num: '02', titulo: 'Estrategia', desc: 'Formulación de hojas de ruta clandestinas y a medida diseñadas para superar a los rivales institucionales.' },
  { num: '03', titulo: 'Ejecución', desc: 'Implementación implacable de políticas a través de nuestra red de operadores en la sombra, garantizando resultados limpios.' },
]

export default function Nosotros() {
  return (
    <PageTransition>
      <div className="pt-20">
        {/* ── HERO ──────────────────────────────────────── */}
        <header className="relative w-full min-h-[614px] flex items-center bg-surface-container-lowest overflow-hidden">
          <motion.div
            className="absolute inset-0 z-0"
            initial={{ scale: 1.06, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="w-full h-full bg-cover bg-center opacity-30"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1577983088926-77884eb535eb?q=80&w=2070&auto=format&fit=crop')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
          </motion.div>

          <div className="relative z-10 w-full max-w-container-max mx-auto px-margin">
            <div className="max-w-3xl">
              <motion.h1
                className="font-display-xl text-display-xl text-primary mb-stack-sm uppercase"
                initial={{ opacity: 0, y: 40, filter: 'blur(6px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                QUIÉNES SOMOS
              </motion.h1>
              <motion.p
                className="font-body-lg text-body-lg text-on-surface-variant max-w-xl border-l border-primary pl-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
              >
                Una firma de asesoría clandestina que opera en los más altos niveles del fútbol profesional.
              </motion.p>
            </div>
          </div>
        </header>

        {/* ── NUESTRA HISTORIA ──────────────────────────── */}
        <section className="py-stack-lg px-margin max-w-container-max mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            <motion.div
              className="md:col-span-7 flex flex-col gap-stack-md font-body-md text-on-surface"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={staggerContainerSlow}
            >
              {[
                'Atlas & Gadeiros nació en respuesta a un vacío singular en el panorama global del fútbol: la ausencia de servicios de asesoría verdaderamente discretos e hiperespecializados para el estrato elite de ejecutivos y grupos de propietarios. No cortejamos la prensa; dictamos los movimientos silenciosos detrás de las decisiones que marcan épocas.',
                'Nuestra filosofía se basa en el minimalismo absoluto y el máximo impacto. Entendemos que en una industria saturada de ruido, el lujo definitivo es la precisión silenciosa e inquebrantable. Cada estrategia formulada, cada negociación supervisada, se ejecuta con un distanciamiento quirúrgico enfocado únicamente en la dominación institucional a largo plazo.',
                'Operamos fuera de los modelos tradicionales de agencia, funcionando en cambio como un consejo de administración en la sombra. Nuestro compromiso con la discreción significa que nuestras victorias nunca se reivindican públicamente—simplemente se materializan en el terreno de juego y en la sala de juntas por las entidades a las que servimos.',
              ].map((text, i) => (
                <motion.p key={i} variants={fadeUp}>{text}</motion.p>
              ))}
            </motion.div>

            <motion.div
              className="md:col-span-4 md:col-start-9 flex flex-col justify-center gap-stack-md mt-stack-md md:mt-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={staggerContainer}
            >
              {principios.map(({ titulo, desc }) => (
                <motion.div
                  key={titulo}
                  variants={slideRight}
                  className="border-l border-primary pl-6 py-2 hover:border-primary-fixed-dim transition-colors"
                >
                  <h3 className="font-headline-md text-headline-md text-primary uppercase mb-2">{titulo}</h3>
                  <p className="font-body-md text-on-surface-variant">{desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── EQUIPO ────────────────────────────────────── */}
        <section className="py-stack-lg bg-surface-container-lowest px-margin">
          <div className="max-w-container-max mx-auto">
            <motion.h2
              className="font-headline-lg text-headline-lg text-on-surface uppercase text-center mb-stack-lg"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={fadeUp}
            >
              LAS MENTES DETRÁS DEL GRUPO
            </motion.h2>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-gutter"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={staggerContainer}
            >
              {equipo.map(({ nombre, rol, descripcion, img }) => (
                <motion.div
                  key={nombre}
                  variants={fadeUp}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="bg-surface-container-low border-t border-primary overflow-hidden group cursor-default"
                >
                  <div className="aspect-[3/4] bg-surface-dim relative overflow-hidden">
                    <motion.img
                      className="w-full h-full object-cover grayscale"
                      src={img}
                      alt={nombre}
                      initial={{ opacity: 0.5, scale: 1 }}
                      whileHover={{ opacity: 0.8, scale: 1.04 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-headline-md text-headline-md text-primary uppercase">{nombre}</h3>
                    <p className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest mt-1 mb-4">{rol}</p>
                    <p className="font-body-md text-on-surface line-clamp-3">{descripcion}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── ENFOQUE ───────────────────────────────────── */}
        <section className="py-stack-lg bg-surface-container px-margin border-y border-outline-variant/30">
          <div className="max-w-container-max mx-auto">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-stack-md divide-y md:divide-y-0 md:divide-x divide-outline-variant/50"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={staggerContainer}
            >
              {enfoque.map(({ num, titulo, desc }) => (
                <motion.div key={num} variants={fadeUp} className="pb-8 md:pb-0 md:px-8 first:pl-0 last:pr-0 flex flex-col">
                  <span className="font-headline-md text-headline-md text-primary mb-4 opacity-50">{num}</span>
                  <h3 className="font-headline-md text-headline-md text-on-surface uppercase mb-2">{titulo}</h3>
                  <p className="font-body-md text-on-surface-variant">{desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────── */}
        <motion.section
          className="bg-surface-container-high py-16 px-margin"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={scaleIn}
        >
          <div className="max-w-container-max mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase text-center md:text-left tracking-tight">
              ¿Listo para elevar su operación?
            </h2>
            <Link to="/contacto">
              <motion.span
                className="block bg-primary text-on-primary font-label-caps text-label-caps uppercase px-8 py-4 whitespace-nowrap"
                whileHover={{ backgroundColor: '#e6c364', scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
              >
                INICIAR DIÁLOGO
              </motion.span>
            </Link>
          </div>
        </motion.section>
      </div>
    </PageTransition>
  )
}
