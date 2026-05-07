import { Link } from 'react-router-dom'

const verticales = [
  {
    icon: 'account_tree',
    titulo: 'Estructuración de Clubes',
    desc: 'Rediseño organizacional integral. Definimos líneas de reporte, alcances departamentales y protocolos de comunicación entre el directorio, el director deportivo y el cuerpo técnico para eliminar fricciones y maximizar la eficiencia de recursos.',
  },
  {
    icon: 'swap_horiz',
    titulo: 'Estrategia de Fichajes',
    desc: 'Planificación de plantilla basada en datos, desvinculada del sesgo emocional. Establecemos marcos de reclutamiento robustos, modelos de planificación de sucesión y estrategias de red global para asegurar la apreciación del valor del plantel a largo plazo.',
  },
  {
    icon: 'groups',
    titulo: 'Asesoría del Cuerpo Técnico',
    desc: 'Evaluación, perfilado y selección de personal técnico de elite. Aseguramos la alineación estilística entre entrenadores principales, directores técnicos y la filosofía general del club, mitigando el riesgo de transiciones gerenciales volátiles.',
  },
  {
    icon: 'storefront',
    titulo: 'Posicionamiento Comercial',
    desc: 'Conectando el rendimiento en el campo con los ingresos fuera de él. Asesoramos sobre arquitectura de marca, entrada a mercados globales y alineación de asociaciones de alto valor adaptadas a entidades deportivas de elite.',
  },
]

const clientes = [
  {
    titulo: 'Clubes de Fútbol',
    desc: 'Desde instituciones consolidadas de la Champions League que requieren ganancias marginales, hasta proyectos ambiciosos que necesitan una reestructuración estructural integral.',
  },
  {
    titulo: 'Atletas Individuales',
    desc: 'Jugadores de elite que buscan planificación de carrera independiente y sofisticada, posicionamiento de marca y estructuración de empresas post-carrera.',
  },
  {
    titulo: 'Grupos Inversores',
    desc: 'Capital privado y consorcios que requieren auditorías deportivas pre-adquisición, estudios de viabilidad y hojas de ruta operacionales post-toma de control.',
  },
]

export default function AsesoriaEstrategica() {
  return (
    <div className="pt-24 pb-stack-lg bg-surface-container-lowest text-on-surface">
      {/* Hero */}
      <section className="px-margin max-w-container-max mx-auto py-stack-lg">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <div className="md:col-span-10">
            <h1 className="font-display-xl text-display-xl text-on-surface uppercase mb-stack-md">
              ASESORÍA ESTRATÉGICA
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl border-l-2 border-primary-container pl-stack-sm">
              Pensamiento a largo plazo. Ejecución discreta. Resultados medibles.
            </p>
          </div>
        </div>
      </section>

      {/* Definiendo el Estado Futuro */}
      <section className="px-margin max-w-container-max mx-auto py-stack-lg border-t border-outline-variant">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          <div className="md:col-span-6 pr-0 md:pr-12">
            <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase mb-stack-md">
              Definiendo el Estado Futuro
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-stack-sm">
              En una industria impulsada por resultados inmediatos y volatilidad constante, la
              verdadera ventaja competitiva se forja a través de la claridad estructural y la
              previsión disciplinada. Nuestra práctica de Asesoría Estratégica no trabaja con
              soluciones superficiales; re-arquitectamos los pilares fundamentales de las
              operaciones deportivas y comerciales.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Operamos como un consejo de administración en la sombra para los tomadores de
              decisiones de elite, proporcionando análisis sin adornos, planos operacionales a
              medida y la ejecución clandestina necesaria para transformar la ambición en dominio
              institucional sostenido.
            </p>
          </div>
          <div className="md:col-span-6 bg-surface-container p-stack-md border border-outline-variant">
            <h3 className="font-headline-md text-headline-md text-primary-container uppercase mb-stack-md">
              Principios Fundamentales
            </h3>
            <ul className="flex flex-col gap-stack-sm">
              {[
                {
                  icon: 'target',
                  titulo: 'Alineación Estructural',
                  desc: 'Sincronizando la filosofía deportiva con las realidades financieras.',
                },
                {
                  icon: 'visibility_off',
                  titulo: 'Discreción Absoluta',
                  desc: 'Operando bajo el radar para proteger el apalancamiento institucional.',
                },
                {
                  icon: 'architecture',
                  titulo: 'Arquitectura a Medida',
                  desc: 'Rechazando soluciones plantilla en favor de marcos altamente personalizados.',
                },
              ].map(({ icon, titulo, desc }) => (
                <li
                  key={titulo}
                  className="flex items-start gap-stack-sm border-b border-surface-container-high pb-stack-sm last:border-b-0 last:pb-0"
                >
                  <span
                    className="material-symbols-outlined text-primary-container"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    {icon}
                  </span>
                  <div>
                    <span className="font-label-caps text-label-caps uppercase text-on-surface block mb-unit">
                      {titulo}
                    </span>
                    <span className="font-body-md text-body-md text-on-surface-variant">{desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Verticales de Asesoría */}
      <section className="px-margin max-w-container-max mx-auto py-stack-lg">
        <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase mb-stack-lg">
          Verticales de Asesoría
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          {verticales.map(({ icon, titulo, desc }) => (
            <div
              key={titulo}
              className="bg-surface-container-low p-stack-md border-t border-primary-container flex flex-col gap-stack-sm"
            >
              <span className="material-symbols-outlined text-primary-container text-4xl mb-unit">
                {icon}
              </span>
              <h3 className="font-headline-md text-headline-md text-on-surface uppercase">
                {titulo}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Enfoque Institucional */}
      <section className="px-margin max-w-container-max mx-auto py-stack-lg">
        <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase mb-stack-lg text-center">
          Enfoque Institucional
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {clientes.map(({ titulo, desc }) => (
            <div
              key={titulo}
              className="bg-surface-container border border-surface-container-high p-stack-md text-center flex flex-col items-center"
            >
              <div className="w-16 h-1 bg-primary-container mb-stack-sm" />
              <h3 className="font-headline-md text-headline-md text-on-surface uppercase mb-stack-sm">
                {titulo}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* El Estándar de Discreción */}
      <section className="bg-surface-container py-stack-lg my-stack-lg border-y border-outline-variant">
        <div className="px-margin max-w-container-max mx-auto text-center">
          <span
            className="material-symbols-outlined text-primary-container text-4xl mb-stack-sm block"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            lock
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase mb-stack-md">
            El Estándar de la Discreción
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant italic max-w-3xl mx-auto">
            "Nuestras victorias más significativas son aquellas que el público nunca presencia. En
            el volátil ecosistema del deporte de elite, el silencio es un activo estratégico y la
            confianza es la moneda definitiva."
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-margin max-w-container-max mx-auto py-stack-lg flex justify-center">
        <Link
          to="/contacto"
          className="bg-primary-container text-on-primary-container font-headline-md text-headline-md uppercase px-12 py-6 hover:bg-primary-fixed-dim transition-colors duration-300"
        >
          INICIAR SU ASESORÍA
        </Link>
      </section>
    </div>
  )
}
