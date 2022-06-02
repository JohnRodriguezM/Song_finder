import React from 'react'
import { BiLoader } from "react-icons/bi";
import '../css/SongLoader.css'
// ? se usa componente para simular la carga desde el backend de la informacion
const Loader = () => {
  return (
    <div>
      <BiLoader className="loader" />
    </div>
  )
}

export default Loader