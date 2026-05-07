import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Nosotros from './pages/Nosotros'
import Servicios from './pages/Servicios'
import AsesoriaEstrategica from './pages/AsesoriaEstrategica'
import BusquedaEjecutiva from './pages/BusquedaEjecutiva'
import Contacto from './pages/Contacto'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/asesoria-estrategica" element={<AsesoriaEstrategica />} />
          <Route path="/busqueda-ejecutiva" element={<BusquedaEjecutiva />} />
          <Route path="/contacto" element={<Contacto />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
