import { Link, useLocation } from 'react-router-dom'

const links = [
  { to: '/nosotros', label: 'Nosotros' },
  { to: '/servicios', label: 'Servicios' },
  { to: '/asesoria-estrategica', label: 'Asesoría Estratégica' },
  { to: '/busqueda-ejecutiva', label: 'Búsqueda Ejecutiva' },
  { to: '/contacto', label: 'Contacto' },
]

export default function Footer() {
  const { pathname } = useLocation()

  return (
    <footer className="w-full py-stack-lg bg-surface-container-lowest border-t border-outline-variant">
      <div className="flex flex-col items-center text-center gap-stack-md px-margin max-w-container-max mx-auto">
        <Link to="/" className="font-headline-lg text-headline-lg text-primary">
          ATLAS &amp; GADEIROS
        </Link>
        <div className="flex flex-wrap justify-center gap-6 font-body-md text-body-md">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={
                pathname === to
                  ? 'text-primary opacity-80 hover:opacity-100 transition-opacity'
                  : 'text-on-surface-variant hover:text-primary transition-colors opacity-80 hover:opacity-100'
              }
            >
              {label}
            </Link>
          ))}
        </div>
        <div className="font-label-caps text-label-caps text-on-surface-variant uppercase mt-8 opacity-60 tracking-widest">
          © 2025 GRUPO DEPORTIVO ATLAS &amp; GADEIROS. TODOS LOS DERECHOS RESERVADOS.
        </div>
      </div>
    </footer>
  )
}
