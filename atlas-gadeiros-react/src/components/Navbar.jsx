import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const links = [
  { to: '/nosotros', label: 'Nosotros' },
  { to: '/servicios', label: 'Servicios' },
  { to: '/asesoria-estrategica', label: 'Asesoría Estratégica' },
  { to: '/busqueda-ejecutiva', label: 'Búsqueda Ejecutiva' },
  { to: '/contacto', label: 'Contacto' },
]

export default function Navbar() {
  const { pathname } = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-primary/20 bg-background/95 backdrop-blur-sm">
      <div className="flex justify-between items-center h-20 px-margin max-w-container-max mx-auto">
        <Link to="/" className="font-headline-md text-headline-md text-primary tracking-tight">
          ATLAS &amp; GADEIROS
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8 font-label-caps text-label-caps uppercase">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={
                pathname === to
                  ? 'text-primary border-b-2 border-primary pb-1'
                  : 'text-on-background hover:text-primary transition-colors duration-300'
              }
            >
              {label}
            </Link>
          ))}
          <Link
            to="/contacto"
            className="bg-primary-container text-on-primary-container px-6 py-3 font-label-caps text-label-caps hover:bg-primary-fixed-dim transition-colors"
          >
            Consultar
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-primary"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
            {menuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-background border-t border-primary/20 px-margin py-6 flex flex-col gap-4">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setMenuOpen(false)}
              className={
                pathname === to
                  ? 'text-primary font-label-caps text-label-caps uppercase'
                  : 'text-on-background hover:text-primary font-label-caps text-label-caps uppercase transition-colors'
              }
            >
              {label}
            </Link>
          ))}
          <Link
            to="/contacto"
            onClick={() => setMenuOpen(false)}
            className="bg-primary-container text-on-primary-container px-6 py-3 font-label-caps text-label-caps text-center hover:bg-primary-fixed-dim transition-colors"
          >
            Consultar
          </Link>
        </div>
      )}
    </nav>
  )
}
