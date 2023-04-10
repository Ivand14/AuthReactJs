import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import { Autenticacion } from '../context/Logeo';


const LogOut = () => {

    const{cerrarSesion}=useContext(Autenticacion)

  return (
    <div>
        <Button variant="primary" onClick={cerrarSesion}>CERRAR SESION</Button>
    </div>
  )
}

export default LogOut