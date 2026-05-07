import { useState } from 'react'
import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import { fadeUp, staggerContainer, scaleIn } from '../animations/variants'

const campos = [
  { id: 'nombre', label: 'Nombre Completo', type: 'text', required: true, colSpan: 1 },
  { id: 'email', label: 'Correo Electrónico', type: 'email', required: true, colSpan: 1 },
  { id: 'organizacion', label: 'Organización (Opcional)', type: 'text', required: false, colSpan: 1 },
]

export default function Contacto() {
  const [form, setForm] = useState({ nombre: '', email: '', organizacion: '', tipoConsulta: '', mensaje: '' })
  const [enviado, setEnviado] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setEnviado(true)
    setTimeout(() => setEnviado(false), 4000)
    setForm({ nombre: '', email: '', organizacion: '', tipoConsulta: '', mensaje: '' })
  }

  return (
    <PageTransition>
      <div className="bg-[#0A0A0A] text-on-background min-h-screen flex flex-col">
        <main className="flex-grow pt-[120px] pb-stack-lg max-w-container-max mx-auto w-full px-margin">

          {/* ── HERO ─────────────────────────────────────── */}
          <header className="text-center mb-stack-lg pt-stack-lg">
            <motion.h1
              className="font-display-xl text-display-xl text-on-background mb-stack-sm uppercase"
              initial={{ opacity: 0, y: 40, filter: 'blur(6px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              INICIAR DIÁLOGO
            </motion.h1>
            <motion.p
              className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
            >
              Todas las consultas son manejadas con total discreción.
            </motion.p>
          </header>

          {/* ── FORMULARIO ───────────────────────────────── */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-start">
            <motion.div
              className="md:col-span-8 md:col-start-3 bg-[#1C1C1C] border-t border-primary-container p-stack-md sm:p-margin"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
            >
              {/* Mensaje de éxito */}
              {enviado && (
                <motion.div
                  className="mb-6 p-4 border border-primary-container bg-primary-container/10 text-primary-container font-label-caps text-label-caps uppercase text-center"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  Consulta enviada. Nos pondremos en contacto dentro de las 48 horas.
                </motion.div>
              )}

              <form className="space-y-stack-md flex flex-col" onSubmit={handleSubmit}>
                {/* Nombre y Email */}
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 gap-gutter"
                  initial="hidden"
                  animate="visible"
                  variants={staggerContainer}
                >
                  {campos.slice(0, 2).map(({ id, label, type, required }) => (
                    <motion.div key={id} className="flex flex-col gap-unit" variants={fadeUp}>
                      <label className="font-label-caps text-label-caps uppercase text-on-background" htmlFor={id}>{label}</label>
                      <motion.input
                        className="bg-[#141414] border border-[#2A2A2A] text-on-background font-body-md p-3 outline-none rounded-none w-full transition-colors"
                        id={id}
                        name={id}
                        required={required}
                        type={type}
                        value={form[id]}
                        onChange={handleChange}
                        whileFocus={{ borderColor: '#c9a84c' }}
                      />
                    </motion.div>
                  ))}
                </motion.div>

                {/* Organización y Tipo de consulta */}
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 gap-gutter"
                  initial="hidden"
                  animate="visible"
                  variants={staggerContainer}
                >
                  <motion.div className="flex flex-col gap-unit" variants={fadeUp}>
                    <label className="font-label-caps text-label-caps uppercase text-on-background" htmlFor="organizacion">Organización (Opcional)</label>
                    <motion.input
                      className="bg-[#141414] border border-[#2A2A2A] text-on-background font-body-md p-3 outline-none rounded-none w-full transition-colors"
                      id="organizacion"
                      name="organizacion"
                      type="text"
                      value={form.organizacion}
                      onChange={handleChange}
                      whileFocus={{ borderColor: '#c9a84c' }}
                    />
                  </motion.div>

                  <motion.div className="flex flex-col gap-unit" variants={fadeUp}>
                    <label className="font-label-caps text-label-caps uppercase text-on-background" htmlFor="tipoConsulta">Naturaleza de la Consulta</label>
                    <div className="relative">
                      <select
                        className="bg-[#141414] border border-[#2A2A2A] text-on-background font-body-md p-3 outline-none rounded-none w-full appearance-none cursor-pointer transition-colors focus:border-primary-container"
                        id="tipoConsulta"
                        name="tipoConsulta"
                        value={form.tipoConsulta}
                        onChange={handleChange}
                      >
                        <option disabled value="">Seleccione una opción</option>
                        <option value="asesoria_estrategica">Asesoría Estratégica</option>
                        <option value="busqueda_ejecutiva">Búsqueda Ejecutiva</option>
                        <option value="gestion_portafolio">Gestión de Portafolio</option>
                        <option value="otro">Otro</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-primary-container">
                        <span className="material-symbols-outlined">expand_more</span>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Mensaje */}
                <motion.div
                  className="flex flex-col gap-unit"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <label className="font-label-caps text-label-caps uppercase text-on-background" htmlFor="mensaje">Mensaje</label>
                  <motion.textarea
                    className="bg-[#141414] border border-[#2A2A2A] text-on-background font-body-md p-3 outline-none rounded-none w-full resize-y transition-colors"
                    id="mensaje"
                    name="mensaje"
                    required
                    rows="5"
                    value={form.mensaje}
                    onChange={handleChange}
                    whileFocus={{ borderColor: '#c9a84c' }}
                  />
                </motion.div>

                {/* Submit */}
                <div className="pt-stack-sm flex justify-end">
                  <motion.button
                    className="bg-primary-container text-[#0A0A0A] font-headline-md text-headline-md uppercase px-8 py-4 w-full md:w-auto"
                    type="submit"
                    whileHover={{ backgroundColor: '#e6c364', scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ duration: 0.2 }}
                  >
                    ENVIAR CONSULTA
                  </motion.button>
                </div>
              </form>
            </motion.div>

            {/* ── INFO CONTACTO ────────────────────────── */}
            <motion.div
              className="md:col-span-8 md:col-start-3 mt-stack-md"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter border-t border-[#2A2A2A] pt-stack-md">
                {[
                  {
                    icon: 'mail',
                    titulo: 'Correspondencia Directa',
                    content: <a className="font-body-lg text-body-lg text-on-background hover:text-primary-container transition-colors" href="mailto:office@atlasgadeiros.com">office@atlasgadeiros.com</a>,
                  },
                  {
                    icon: 'location_on',
                    titulo: 'Oficinas Globales',
                    content: <p className="font-body-lg text-body-lg text-on-background">Londres <span className="text-primary-container mx-2">|</span> Lisboa</p>,
                  },
                ].map(({ icon, titulo, content }) => (
                  <motion.div key={titulo} variants={fadeUp} className="flex items-start gap-4">
                    <motion.span
                      className="material-symbols-outlined text-primary-container text-3xl"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                      whileHover={{ scale: 1.15 }}
                      transition={{ duration: 0.2 }}
                    >
                      {icon}
                    </motion.span>
                    <div>
                      <h3 className="font-label-caps text-label-caps uppercase text-on-surface-variant mb-1">{titulo}</h3>
                      {content}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ── CIERRE ───────────────────────────────────── */}
          <motion.div
            className="text-center mt-stack-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleIn}
          >
            <p className="font-body-md text-body-md text-on-surface-variant italic">
              "Respondemos a todas las consultas serias dentro de las 48 horas."
            </p>
          </motion.div>
        </main>
      </div>
    </PageTransition>
  )
}
