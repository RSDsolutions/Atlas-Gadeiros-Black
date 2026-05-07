import { Link } from 'react-router-dom'

const chipGestion = [
  'Representación de Atletas',
  'Negociación de Contratos',
  'Posicionamiento de Marca',
  'Planificación Post-Carrera',
]

const pasos = [
  {
    num: '01',
    titulo: 'Consulta Inicial',
    desc: 'Una discusión confidencial de alto nivel para entender el mandato central, identificar puntos de presión críticos y establecer parámetros.',
  },
  {
    num: '02',
    titulo: 'Evaluación Diagnóstica',
    desc: 'Análisis riguroso que combina métricas de datos propietarios con auditorías cualitativas profundas de estructuras y personal existentes.',
  },
  {
    num: '03',
    titulo: 'Diseño Estratégico',
    desc: 'Formulación de soluciones arquitectónicas a medida, marcos operacionales e inteligencia accionable lista para implementación.',
  },
  {
    num: '04',
    titulo: 'Ejecución Continua',
    desc: 'Apoyo de asesoría continua, monitoreo de la implementación estratégica y recalibración dinámica a medida que las condiciones del mercado evolucionan.',
  },
]

export default function Servicios() {
  return (
    <div className="pt-20 min-h-screen flex flex-col">
      <main className="flex-grow pt-[80px] pb-stack-lg">
        {/* Hero */}
        <section className="max-w-container-max mx-auto px-margin py-stack-lg border-b border-surface-container-high">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            <div className="md:col-span-8">
              <h1 className="font-display-xl text-display-xl text-on-background uppercase mb-stack-md">
                DISCIPLINAS CENTRALES
              </h1>
            </div>
            <div className="md:col-span-4 flex items-end">
              <p className="font-body-lg text-body-lg text-on-surface-variant border-l border-primary-container pl-4 py-2">
                Servicios especializados para clubes, atletas y organizaciones deportivas que buscan
                ventaja estratégica.
              </p>
            </div>
          </div>
        </section>

        {/* Asesoría en Fútbol */}
        <section className="max-w-container-max mx-auto px-margin py-stack-lg">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            <div className="md:col-span-6 pr-0 md:pr-12">
              <div className="inline-block bg-surface-container-low border border-surface-container-high px-3 py-1 mb-6">
                <span className="font-label-caps text-label-caps text-primary-container uppercase tracking-widest">
                  Asesoría
                </span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-background uppercase mb-6">
                Asesoría en Fútbol
              </h2>
              <div className="space-y-6 text-on-surface-variant">
                <p>
                  Brindamos asesoramiento confidencial de alto nivel a grupos de propietarios de
                  clubes que navegan transiciones complejas o buscan reestructurar sus operaciones
                  deportivas para el éxito sostenido.
                </p>
                <p>
                  Nuestra asesoría se extiende a los Directores Deportivos, ofreciendo una caja de
                  resonancia neutral y experta para la arquitectura del plantel, designaciones de
                  personal técnico y alineación filosófica a largo plazo.
                </p>
                <p>
                  Para consejos ejecutivos, entregamos análisis objetivos de las estructuras
                  deportivas actuales, identificando ineficiencias y proponiendo marcos rigurosos y
                  modernos adaptados al contexto y ambiciones específicas del club.
                </p>
              </div>
            </div>
            <div className="md:col-span-5 md:col-start-8 flex flex-col justify-center border-t border-primary-container bg-surface-container-low p-8 mt-8 md:mt-0">
              <h3 className="font-label-caps text-label-caps text-on-surface-variant uppercase mb-8 tracking-widest">
                Entregables Clave
              </h3>
              <ul className="space-y-6">
                {[
                  'Revisiones Estratégicas de Propiedad',
                  'Mentoría de Director Técnico',
                  'Auditorías Deportivas a Nivel Directivo',
                  'Due Diligence Deportivo en M&A',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-primary-container mt-1">
                      check_circle
                    </span>
                    <span className="font-body-lg text-body-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Consultoría Deportiva */}
        <section className="max-w-container-max mx-auto px-margin py-stack-lg border-t border-surface-container-high bg-surface-container-low">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            <div className="md:col-span-5 flex flex-col justify-center border-t border-primary-container bg-background p-8 order-2 md:order-1 mt-8 md:mt-0 relative overflow-hidden group">
              <div
                className="absolute inset-0 opacity-20 pointer-events-none bg-cover bg-center mix-blend-luminosity grayscale"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1518605368461-1e1e1a8a25c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')",
                }}
              />
              <div className="relative z-10">
                <h3 className="font-label-caps text-label-caps text-on-surface-variant uppercase mb-8 tracking-widest">
                  Capacidades Fundamentales
                </h3>
                <ul className="space-y-6">
                  {[
                    { icon: 'analytics', label: 'Análisis de Datos Avanzado' },
                    { icon: 'radar', label: 'Inteligencia de Campo' },
                    { icon: 'person_search', label: 'Optimización de Reclutamiento' },
                    { icon: 'fact_check', label: 'Auditoría Operacional' },
                  ].map(({ icon, label }) => (
                    <li key={label} className="flex items-start gap-4">
                      <span className="material-symbols-outlined text-primary-container mt-1">
                        {icon}
                      </span>
                      <span className="font-body-lg text-body-lg">{label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:col-span-6 md:col-start-7 pl-0 md:pl-12 order-1 md:order-2">
              <div className="inline-block bg-surface-container-low border border-surface-container-high px-3 py-1 mb-6">
                <span className="font-label-caps text-label-caps text-primary-container uppercase tracking-widest">
                  Consultoría
                </span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-background uppercase mb-6">
                Consultoría Deportiva
              </h2>
              <div className="space-y-6 text-on-surface-variant">
                <p>
                  Aprovechamos herramientas analíticas de vanguardia y profunda experiencia en el
                  dominio para proporcionar inteligencia accionable que impulsa la ventaja
                  competitiva en el terreno de juego.
                </p>
                <p>
                  Nuestros servicios de consultoría profundizan en la optimización del
                  reclutamiento, asegurando que la estrategia de adquisición de talento de un club
                  esté alineada tanto con las realidades financieras como con la identidad táctica.
                </p>
                <p>
                  A través de una auditoría operacional integral, sometemos a prueba de estrés los
                  flujos de trabajo internos, desde la integración de la academia hasta la logística
                  del primer equipo, recomendando intervenciones precisas que elevan el rendimiento
                  organizacional general.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Gestión Deportiva */}
        <section className="max-w-container-max mx-auto px-margin py-stack-lg border-t border-surface-container-high">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            <div className="md:col-span-8">
              <div className="inline-block bg-surface-container-low border border-surface-container-high px-3 py-1 mb-6">
                <span className="font-label-caps text-label-caps text-primary-container uppercase tracking-widest">
                  Gestión
                </span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-background uppercase mb-6">
                Gestión Deportiva
              </h2>
              <div className="space-y-6 text-on-surface-variant max-w-3xl">
                <p>
                  Más allá de la asesoría institucional, ofrecemos un servicio de gestión boutique
                  para atletas de elite que requieren un enfoque integral y estratégico de sus
                  carreras. Actuamos como arquitectos del viaje profesional de un atleta.
                </p>
                <p>
                  Esto abarca negociaciones contractuales rigurosas diseñadas para maximizar tanto
                  el valor inmediato como la seguridad a largo plazo, junto con un sofisticado
                  posicionamiento de marca que resuena con socios comerciales premium.
                </p>
                <p>
                  Crucialmente, integramos la planificación post-carrera desde el primer día,
                  asegurando que nuestros clientes estén posicionados para transiciones fluidas
                  hacia la propiedad, roles ejecutivos o inversiones estratégicas una vez que
                  concluyan sus días como jugadores.
                </p>
              </div>
            </div>
            <div className="md:col-span-4 flex flex-col justify-end gap-4 mt-8 md:mt-0 border-l border-surface-container-high pl-8">
              {chipGestion.map((chip) => (
                <div
                  key={chip}
                  className="bg-surface-container-low border border-surface-container-high px-4 py-3"
                >
                  <span className="font-label-caps text-label-caps text-primary-container uppercase">
                    {chip}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cómo Trabajamos */}
        <section className="bg-surface-container-lowest py-stack-lg border-y border-surface-container-high">
          <div className="max-w-container-max mx-auto px-margin">
            <h2 className="font-headline-lg text-headline-lg text-on-background uppercase mb-stack-md text-center">
              CÓMO TRABAJAMOS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              <div className="hidden md:block absolute top-[24px] left-0 w-full h-[1px] bg-surface-container-high z-0" />
              {pasos.map(({ num, titulo, desc }) => (
                <div
                  key={num}
                  className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left mt-8 md:mt-0 first:mt-0"
                >
                  <div className="w-12 h-12 bg-background border border-primary-container flex items-center justify-center font-headline-md text-primary-container mb-6">
                    {num}
                  </div>
                  <h4 className="font-headline-md text-xl uppercase mb-3">{titulo}</h4>
                  <p className="text-on-surface-variant font-body-md text-sm">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-container-max mx-auto px-margin py-stack-lg text-center flex flex-col items-center justify-center min-h-[409px]">
          <h2 className="font-headline-lg text-headline-lg text-on-background uppercase mb-8">
            Cada mandato es a medida.
          </h2>
          <Link
            to="/contacto"
            className="bg-primary-container text-surface-container-lowest font-headline-md px-10 py-4 uppercase hover:bg-primary-fixed-dim transition-colors"
          >
            SOLICITAR UNA CONSULTA
          </Link>
        </section>
      </main>
    </div>
  )
}
