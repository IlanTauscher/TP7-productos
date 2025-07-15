import './App.css'
import Home from './Pages/Home/Home.jsx';
import Productos from './Pages/Productos/Productos.jsx';
import QuienesSomos from './Pages/QuienesSomos/QuienesSomos.jsx';
import Contacto from './Pages/Contacto/Contacto.jsx';
import MainLayout from './Layout/MainLayout.jsx';
import ProductoDetalle from './Pages/ProductoDetalle/ProductoDetalle.jsx';
import { Routes, Route, Navigate } from 'react-router-dom';

function App() {

  return (
    <>
      <div className="row">
        <Routes>
          <Route path="/" element={<MainLayout/>}>
            <Route index element={<Home/>}/>
            <Route path="productos" element={<Productos/>}/>
            <Route path="quienesSomos" element={<QuienesSomos/>}/>
            <Route path="contacto" element={<Contacto/>}/>
            <Route path='ProductoDetalle/:id' element={<ProductoDetalle/>}/>
            <Route path="*" element={<Navigate to="/" replace/>}/>
          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App
