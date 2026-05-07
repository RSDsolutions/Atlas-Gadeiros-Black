import { useState } from 'react'

export default function Contacto() {
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    organizacion: '',
    tipoConsulta: '',
    mensaje: '',
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Consulta enviada. Nos pondremos en contacto dentro de las 48 horas.')
  }

  return (
    <div className="bg-[#0A0A0A] text-on-background min-h-screen flex flex-col">
      {/* Main */}
      <main className="flex-grow pt-[120px] pb-stack-lg max-w-container-max mx-auto w-full px-margin">
        {/* Hero */}
        <header className="text-center mb-stack-lg pt-stack-lg">
          <h1 className="font-display-xl text-display-xl text-on-background mb-stack-sm uppercase">
            INICIAR DIÁLOGO
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Todas las consultas son manejadas con total discreción.
          </p>
        </header>

        {/* Formulario */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-start">
          <div className="md:col-span-8 md:col-start-3 bg-[#1C1C1C] border-t border-primary-container p-stack-md sm:p-margin">
            <form className="space-y-stack-md flex flex-col" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
                <div className="flex flex-col gap-unit">
                  <label
                    className="font-label-caps text-label-caps uppercase text-on-background"
                    htmlFor="nombre"
                  >
                    Nombre Completo
                  </label>
                  <input
                    className="bg-[#141414] border border-[#2A2A2A] text-on-background font-body-md p-3 focus:border-primary-container focus:ring-0 outline-none rounded-none w-full transition-colors"
                    id="nombre"
                    name="nombre"
                    required
                    type="text"
                    value={form.nombre}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col gap-unit">
                  <label
                    className="font-label-caps text-label-caps uppercase text-on-background"
                    htmlFor="email"
                  >
                    Correo Electrónico
                  </label>
                  <input
                    className="bg-[#141414] border border-[#2A2A2A] text-on-background font-body-md p-3 focus:border-primary-container focus:ring-0 outline-none rounded-none w-full transition-colors"
                    id="email"
                    name="email"
                    required
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
                <div className="flex flex-col gap-unit">
                  <label
                    className="font-label-caps text-label-caps uppercase text-on-background"
                    htmlFor="organizacion"
                  >
                    Organización (Opcional)
                  </label>
                  <input
                    className="bg-[#141414] border border-[#2A2A2A] text-on-background font-body-md p-3 focus:border-primary-container focus:ring-0 outline-none rounded-none w-full transition-colors"
                    id="organizacion"
                    name="organizacion"
                    type="text"
                    value={form.organizacion}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col gap-unit">
                  <label
                    className="font-label-caps text-label-caps uppercase text-on-background"
                    htmlFor="tipoConsulta"
                  >
                    Naturaleza de la Consulta
                  </label>
                  <div className="relative">
                    <select
                      className="bg-[#141414] border border-[#2A2A2A] text-on-background font-body-md p-3 focus:border-primary-container focus:ring-0 outline-none rounded-none w-full appearance-none transition-colors cursor-pointer"
                      id="tipoConsulta"
                      name="tipoConsulta"
                      value={form.tipoConsulta}
                      onChange={handleChange}
                    >
                      <option disabled value="">
                        Seleccione una opción
                      </option>
                      <option value="asesoria_estrategica">Asesoría Estratégica</option>
                      <option value="busqueda_ejecutiva">Búsqueda Ejecutiva</option>
                      <option value="gestion_portafolio">Gestión de Portafolio</option>
                      <option value="otro">Otro</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-primary-container">
                      <span className="material-symbols-outlined">expand_more</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-unit">
                <label
                  className="font-label-caps text-label-caps uppercase text-on-background"
                  htmlFor="mensaje"
                >
                  Mensaje
                </label>
                <textarea
                  className="bg-[#141414] border border-[#2A2A2A] text-on-background font-body-md p-3 focus:border-primary-container focus:ring-0 outline-none rounded-none w-full resize-y transition-colors"
                  id="mensaje"
                  name="mensaje"
                  required
                  rows="5"
                  value={form.mensaje}
                  onChange={handleChange}
                />
              </div>

              <div className="pt-stack-sm flex justify-end">
                <button
                  className="bg-primary-container text-[#0A0A0A] font-headline-md text-headline-md uppercase px-8 py-4 hover:bg-primary-fixed-dim transition-colors duration-300 w-full md:w-auto"
                  type="submit"
                >
                  ENVIAR CONSULTA
                </button>
              </div>
            </form>
          </div>

          {/* Información de Contacto */}
          <div className="md:col-span-8 md:col-start-3 mt-stack-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter border-t border-[#2A2A2A] pt-stack-md">
              <div className="flex items-start gap-4">
                <span
                  className="material-symbols-outlined text-primary-container text-3xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  mail
                </span>
                <div>
                  <h3 className="font-label-caps text-label-caps uppercase text-on-surface-variant mb-1">
                    Correspondencia Directa
                  </h3>
                  <a
                    className="font-body-lg text-body-lg text-on-background hover:text-primary-container transition-colors"
                    href="mailto:office@atlasgadeiros.com"
                  >
                    office@atlasgadeiros.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span
                  className="material-symbols-outlined text-primary-container text-3xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  location_on
                </span>
                <div>
                  <h3 className="font-label-caps text-label-caps uppercase text-on-surface-variant mb-1">
                    Oficinas Globales
                  </h3>
                  <p className="font-body-lg text-body-lg text-on-background">
                    Londres{' '}
                    <span className="text-primary-container mx-2">|</span>
                    Lisboa
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Nota de cierre */}
        <div className="text-center mt-stack-lg">
          <p className="font-body-md text-body-md text-on-surface-variant italic">
            "Respondemos a todas las consultas serias dentro de las 48 horas."
          </p>
        </div>
      </main>
    </div>
  )
}
