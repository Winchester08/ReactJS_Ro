import { useState } from 'react'
import './App.css'
import Navbar from './componentes/NavBar.tsx';

function App() {
  return (
    <div className='App'>
    <Navbar/>
      <main>
        <h1>Bienvenidos a React JS</h1>
        <p>Ejemplo de uso de una navbar</p>
      </main>
    </div>
  )
}

export default App
