import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Alerta from './componentes/Alerta';
import 'bootstrap/dist/css/bootstrap.min.css';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <h2>Aqui van los componentes</h2>
   <Alerta/>
  </StrictMode>,
)
