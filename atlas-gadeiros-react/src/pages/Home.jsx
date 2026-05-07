import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      {/* Hero */}
      <header className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img
            alt="Estadio de fútbol"
            className="w-full h-full object-cover opacity-20"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAw7iR1nEG22j420BeAEbWHQVzDv8kqppXrS9jYuvYRC6FAzetFcOoXbCb6cw3X-EK-NHjxJDXBmrflZ37H89GLvcWpfrdGBzeLyBSOoqUN10GRtZ5xRZtRcTiBJqqytaLPL_By5T_ZcQ7ePrVbZOULYRy59W4Yk8qsrB_1Bb6IQSOKnFNPHH3AFLAeTRCcDS0hD4yUcs273hV2ntK97vRNNdPiTN6zR3C4FOx7a6QE4t3ML_VsWfvM4BFPQHkn7D4S0C6mhp8q0Ig"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        </div>
        <div className="relative z-10 w-full px-margin max-w-container-max mx-auto">
          <div className="max-w-3xl">
            <h1 className="font-display-xl text-display-xl text-on-background mb-stack-md uppercase">
              Asesoría y Gestión Elite en Fútbol
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-stack-lg max-w-2xl">
              Un equipo de especialistas que ofrece consultoría estratégica y gestión experta para
              clubes de fútbol, atletas y organizaciones.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/servicios"
                className="bg-primary-container text-background font-headline-md text-body-lg uppercase px-8 py-4 hover:bg-primary-fixed-dim transition-colors"
              >
                Nuestros Servicios
              </Link>
              <Link
                to="/contacto"
                className="border border-primary-container text-primary-container font-headline-md text-body-lg uppercase px-8 py-4 hover:bg-primary-container/10 transition-colors"
              >
                Contáctenos
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Nosotros */}
      <section className="py-stack-lg px-margin bg-surface-container-lowest" id="nosotros">
        <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <div className="md:col-span-8">
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
                Construimos estructuras duraderas para clubes y caminos a medida para el talento
                de elite.
              </p>
            </div>
          </div>
          <div className="md:col-span-4 flex flex-col justify-center gap-8 mt-12 md:mt-0 border-l border-surface-container-high pl-8">
            <div>
              <div className="font-headline-md text-headline-md text-primary">01</div>
              <div className="font-label-caps text-label-caps text-on-background uppercase mt-2">
                Expertos multidisciplinarios
              </div>
            </div>
            <div>
              <div className="font-headline-md text-headline-md text-primary">02</div>
              <div className="font-label-caps text-label-caps text-on-background uppercase mt-2">
                Enfoque orientado a resultados
              </div>
            </div>
            <div>
              <div className="font-headline-md text-headline-md text-primary">03</div>
              <div className="font-label-caps text-label-caps text-on-background uppercase mt-2">
                Visión global del fútbol
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="py-stack-lg px-margin" id="servicios">
        <div className="max-w-container-max mx-auto">
          <h2 className="font-headline-lg text-headline-lg text-on-background mb-stack-lg uppercase text-center">
            Disciplinas Centrales
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            <div className="bg-surface-container-low p-8 border-t border-primary-container hover:bg-surface-container transition-colors group">
              <span
                className="material-symbols-outlined text-4xl text-primary-container mb-6 block"
                style={{ fontVariationSettings: "'FILL' 0" }}
              >
                strategy
              </span>
              <h3 className="font-headline-md text-headline-md text-on-background mb-4 uppercase">
                Asesoría en Fútbol
              </h3>
              <p className="text-on-surface-variant group-hover:text-on-background transition-colors">
                Orientación estratégica para propietarios de clubes, directores deportivos y
                consejos ejecutivos. Diseñamos proyectos deportivos, optimizamos estructuras
                técnicas y proporcionamos inteligencia discreta de mercado para asegurar ventaja
                competitiva.
              </p>
            </div>
            <div className="bg-surface-container-low p-8 border-t border-primary-container hover:bg-surface-container transition-colors group">
              <span
                className="material-symbols-outlined text-4xl text-primary-container mb-6 block"
                style={{ fontVariationSettings: "'FILL' 0" }}
              >
                monitoring
              </span>
              <h3 className="font-headline-md text-headline-md text-on-background mb-4 uppercase">
                Consultoría Deportiva
              </h3>
              <p className="text-on-surface-variant group-hover:text-on-background transition-colors">
                Análisis basado en datos y consultoría operacional. Conectamos la analítica con la
                realidad del terreno de juego, auditando departamentos de reclutamiento y
                optimizando operaciones del club para máxima eficiencia.
              </p>
            </div>
            <div className="bg-surface-container-low p-8 border-t border-primary-container hover:bg-surface-container transition-colors group">
              <span
                className="material-symbols-outlined text-4xl text-primary-container mb-6 block"
                style={{ fontVariationSettings: "'FILL' 0" }}
              >
                manage_accounts
              </span>
              <h3 className="font-headline-md text-headline-md text-on-background mb-4 uppercase">
                Gestión Deportiva
              </h3>
              <p className="text-on-surface-variant group-hover:text-on-background transition-colors">
                Representación a medida para atletas de elite y cuerpo técnico. Gestionamos
                carreras con una mentalidad estratégica a largo plazo, abarcando negociaciones
                contractuales, posicionamiento de marca y planificación post-carrera.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* La Ventaja Atlas */}
      <section className="py-stack-lg px-margin bg-surface-container-lowest border-y border-surface-container-high">
        <div className="max-w-container-max mx-auto">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-stack-lg uppercase">
            La Ventaja Atlas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-gutter">
            <div className="flex items-start gap-6">
              <span
                className="material-symbols-outlined text-3xl text-primary-container shrink-0 mt-1"
                style={{ fontVariationSettings: "'FILL' 0" }}
              >
                verified_user
              </span>
              <div>
                <h4 className="font-headline-md text-headline-md text-on-background text-2xl mb-2 uppercase">
                  Discreción
                </h4>
                <p className="text-on-surface-variant">
                  Operamos estrictamente entre bastidores, garantizando que sus movimientos
                  estratégicos permanezcan confidenciales hasta su ejecución.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <span
                className="material-symbols-outlined text-3xl text-primary-container shrink-0 mt-1"
                style={{ fontVariationSettings: "'FILL' 0" }}
              >
                language
              </span>
              <div>
                <h4 className="font-headline-md text-headline-md text-on-background text-2xl mb-2 uppercase">
                  Red Global
                </h4>
                <p className="text-on-surface-variant">
                  Acceso inigualable a los principales tomadores de decisiones en las grandes
                  ligas europeas y mercados emergentes.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <span
                className="material-symbols-outlined text-3xl text-primary-container shrink-0 mt-1"
                style={{ fontVariationSettings: "'FILL' 0" }}
              >
                architecture
              </span>
              <div>
                <h4 className="font-headline-md text-headline-md text-on-background text-2xl mb-2 uppercase">
                  Precisión Estructural
                </h4>
                <p className="text-on-surface-variant">
                  No solo resolvemos problemas inmediatos; construimos infraestructuras deportivas
                  resilientes para el éxito sostenible.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <span
                className="material-symbols-outlined text-3xl text-primary-container shrink-0 mt-1"
                style={{ fontVariationSettings: "'FILL' 0" }}
              >
                analytics
              </span>
              <div>
                <h4 className="font-headline-md text-headline-md text-on-background text-2xl mb-2 uppercase">
                  Consejo Empírico
                </h4>
                <p className="text-on-surface-variant">
                  Nuestros consejos se basan en un riguroso análisis de datos, mitigando el riesgo
                  en entornos de fútbol de alto impacto.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto CTA */}
      <section className="py-stack-lg px-margin relative" id="contacto">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-headline-lg text-headline-lg text-on-background mb-stack-md uppercase text-center">
            Iniciar Diálogo
          </h2>
          <p className="text-center text-on-surface-variant mb-12">
            Contacte nuestras oficinas para concertar una consulta confidencial.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 text-center border border-surface-container-high p-12 bg-surface-container-low">
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
            <Link
              to="/contacto"
              className="mt-4 bg-primary-container text-background font-headline-md text-body-lg uppercase px-8 py-4 hover:bg-primary-fixed-dim transition-colors"
            >
              Enviar Consulta
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
