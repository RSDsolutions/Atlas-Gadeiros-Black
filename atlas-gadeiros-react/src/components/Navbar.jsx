import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

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
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <motion.nav
      className="fixed top-0 w-full z-50 border-b"
      animate={{
        backgroundColor: scrolled ? 'rgba(19,19,19,1)' : 'rgba(19,19,19,0.95)',
        borderColor: scrolled ? 'rgba(230,195,100,0.35)' : 'rgba(230,195,100,0.2)',
        height: scrolled ? 64 : 80,
      }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      style={{ backdropFilter: 'blur(8px)' }}
    >
      <div className="flex justify-between items-center h-full px-margin max-w-container-max mx-auto">
        {/* Logo */}
        <Link to="/">
          <motion.span
            className="font-headline-md text-headline-md text-primary tracking-tight block"
            whileHover={{ opacity: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            ATLAS &amp; GADEIROS
          </motion.span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8 font-label-caps text-label-caps uppercase">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="relative group"
            >
              <span
                className={
                  pathname === to
                    ? 'text-primary'
                    : 'text-on-background hover:text-primary transition-colors duration-300'
                }
              >
                {label}
              </span>
              {/* Animated underline */}
              <motion.span
                className="absolute -bottom-1 left-0 h-[1px] bg-primary block"
                initial={false}
                animate={{ width: pathname === to ? '100%' : '0%' }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              />
              <motion.span
                className="absolute -bottom-1 left-0 h-[1px] bg-primary-container block"
                initial={{ width: '0%' }}
                whileHover={{ width: pathname === to ? '0%' : '100%' }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
              />
            </Link>
          ))}
          <Link to="/contacto">
            <motion.span
              className="block bg-primary-container text-on-primary-container px-6 py-3 font-label-caps text-label-caps"
              whileHover={{ backgroundColor: '#e6c364', scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
            >
              Consultar
            </motion.span>
          </Link>
        </div>

        {/* Mobile toggle */}
        <motion.button
          className="md:hidden text-primary"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
          whileTap={{ scale: 0.9 }}
        >
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
            {menuOpen ? 'close' : 'menu'}
          </span>
        </motion.button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden bg-background border-t border-primary/20 px-margin flex flex-col gap-4 overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="py-6 flex flex-col gap-4">
              {links.map(({ to, label }, i) => (
                <motion.div
                  key={to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.3 }}
                >
                  <Link
                    to={to}
                    className={
                      pathname === to
                        ? 'text-primary font-label-caps text-label-caps uppercase block'
                        : 'text-on-background hover:text-primary font-label-caps text-label-caps uppercase block transition-colors'
                    }
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: links.length * 0.06, duration: 0.3 }}
              >
                <Link
                  to="/contacto"
                  className="bg-primary-container text-on-primary-container px-6 py-3 font-label-caps text-label-caps text-center block hover:bg-primary-fixed-dim transition-colors"
                >
                  Consultar
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
