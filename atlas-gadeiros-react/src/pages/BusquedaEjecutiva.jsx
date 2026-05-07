import { Link } from 'react-router-dom'

const rolesGrandes = [
  {
    icon: 'sports_soccer',
    titulo: 'Directores Deportivos',
    desc: 'Arquitectos de la estrategia de fútbol, adquisición de talento y visión deportiva a largo plazo.',
  },
  {
    icon: 'group',
    titulo: 'Entrenadores Principales',
    desc: 'Líderes tácticos capaces de gestionar plantillas de elite y entregar resultados inmediatos.',
  },
]

const rolesMenores = [
  {
    icon: 'business_center',
    titulo: 'CEOs de Clubes',
    desc: 'Líderes ejecutivos que impulsan el crecimiento comercial y la excelencia operacional.',
  },
  {
    icon: 'architecture',
    titulo: 'Coordinadores Técnicos',
    desc: 'Nexo entre el directorio, el cuerpo técnico y el plantel de jugadores.',
  },
  {
    icon: 'school',
    titulo: 'Directores de Academia',
    desc: 'Visionarios dedicados al desarrollo de talento joven y la metodología del club.',
  },
]

const procesoPasos = [
  {
    num: '1',
    titulo: 'Definir el Perfil',
    desc: 'Consulta rigurosa para establecer requisitos exactos, compatibilidad cultural y objetivos estratégicos.',
    activo: false,
  },
  {
    num: '2',
    titulo: 'Mapeo de Mercado',
    desc: 'Análisis integral del panorama ejecutivo global para identificar candidatos de alto potencial.',
    activo: false,
  },
  {
    num: '3',
    titulo: 'Contacto con Candidatos',
    desc: 'Acercamiento discreto y dirigido a líderes prospectivos.',
    activo: false,
  },
  {
    num: '4',
    titulo: 'Evaluación',
    desc: 'Evaluación profunda de capacidades estratégicas, trayectoria y alineación cultural.',
    activo: false,
  },
  {
    num: '5',
    titulo: 'Colocación e Incorporación',
    desc: 'Facilitación de negociaciones e integración estructurada en la nueva organización.',
    activo: true,
  },
]

export default function BusquedaEjecutiva() {
  return (
    <div className="pt-32 pb-stack-lg max-w-container-max mx-auto px-margin space-y-stack-lg">
      {/* Hero */}
      <header className="grid grid-cols-12 gap-gutter pt-stack-lg pb-stack-lg border-b border-surface-container-high">
        <div className="col-span-12 md:col-span-8">
          <h1 className="font-display-xl text-display-xl text-on-background uppercase mb-6">
            BÚSQUEDA EJECUTIVA
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            Identificando y colocando liderazgo elite en fútbol en clubes, federaciones y
            organizaciones.
          </p>
        </div>
        <div className="col-span-12 md:col-span-4 hidden md:flex items-end justify-end">
          <div className="w-16 h-[1px] bg-primary-container" />
        </div>
      </header>

      {/* El Desafío */}
      <section className="max-w-3xl mx-auto text-center py-stack-lg">
        <h2 className="font-headline-md text-headline-md text-primary mb-8 uppercase">
          El Desafío
        </h2>
        <div className="font-body-lg text-body-lg text-on-background space-y-6">
          <p>
            Encontrar al ejecutivo de fútbol correcto es una tarea compleja. El juego moderno
            requiere líderes que posean no solo un profundo entendimiento de las operaciones de
            fútbol, sino también la perspicacia comercial para navegar una industria globalizada y
            altamente escrutada. Demanda visión, discreción absoluta y un historial probado de
            ejecución estratégica bajo presión.
          </p>
          <p>
            Aprovechamos nuestra red clandestina y metodologías de evaluación rigurosas para
            identificar individuos capaces de transformar estructuras organizacionales. Nuestro
            enfoque está en colocar visionarios que se alineen perfectamente con las ambiciones
            culturales y estratégicas específicas de nuestra clientela de elite.
          </p>
        </div>
      </section>

      {/* Lo Que Colocamos */}
      <section className="py-stack-lg">
        <h2 className="font-headline-md text-headline-md text-on-background uppercase mb-12 flex items-center gap-4">
          Lo Que Colocamos
          <span className="h-[1px] flex-grow bg-surface-container-high" />
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter mb-gutter">
          {rolesGrandes.map(({ icon, titulo, desc }) => (
            <div
              key={titulo}
              className="bg-surface-container-low border-t border-primary-container p-8 hover:bg-surface-container transition-colors group"
            >
              <span
                className="material-symbols-outlined text-primary-container text-4xl mb-6 block"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                {icon}
              </span>
              <h3 className="font-headline-md text-[24px] text-on-background uppercase mb-4">
                {titulo}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">{desc}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {rolesMenores.map(({ icon, titulo, desc }) => (
            <div
              key={titulo}
              className="bg-surface-container-low p-8 border border-surface-container-high hover:border-outline-variant transition-colors"
            >
              <span
                className="material-symbols-outlined text-primary-container text-3xl mb-4 block"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                {icon}
              </span>
              <h3 className="font-headline-md text-[20px] text-on-background uppercase mb-2">
                {titulo}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Proceso */}
      <section className="py-stack-lg border-t border-surface-container-high">
        <div className="grid grid-cols-12 gap-gutter">
          <div className="col-span-12 md:col-span-4">
            <h2 className="font-headline-lg text-headline-lg text-on-background uppercase sticky top-32">
              Nuestro Proceso de Búsqueda
            </h2>
          </div>
          <div className="col-span-12 md:col-span-8 relative">
            <div className="absolute left-[23px] top-4 bottom-4 w-[1px] bg-surface-container-high" />
            <div className="space-y-12">
              {procesoPasos.map(({ num, titulo, desc, activo }) => (
                <div key={num} className="flex gap-8 relative z-10">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 font-headline-md text-[20px] ${
                      activo
                        ? 'bg-primary-container text-on-primary-fixed'
                        : 'bg-surface-container border border-primary-container text-primary-container'
                    }`}
                  >
                    {num}
                  </div>
                  <div className="pt-2">
                    <h3
                      className={`font-headline-md text-[24px] uppercase mb-2 ${
                        activo ? 'text-primary-container' : 'text-on-background'
                      }`}
                    >
                      {titulo}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cláusula de Discreción */}
      <section className="bg-surface-container-low py-8 px-margin text-center border-y border-surface-container-high my-stack-lg">
        <p className="font-body-lg text-body-lg text-outline italic">
          "Todas las búsquedas se realizan con absoluta confidencialidad."
        </p>
      </section>

      {/* CTA */}
      <section className="py-stack-lg text-center bg-surface-dim border border-surface-container-high p-margin">
        <h2 className="font-headline-lg text-headline-lg text-on-background uppercase mb-8">
          ¿Buscando a su próximo líder en fútbol?
        </h2>
        <Link
          to="/contacto"
          className="bg-primary-container text-on-primary-fixed uppercase font-headline-md text-[18px] tracking-widest px-10 py-4 hover:bg-primary-fixed transition-colors inline-flex items-center gap-2"
        >
          ENVIAR UN MANDATO DE BÚSQUEDA
          <span className="material-symbols-outlined">arrow_forward</span>
        </Link>
      </section>
    </div>
  )
}
