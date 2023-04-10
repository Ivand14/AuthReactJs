import React, { useContext, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import { Autenticacion } from '../context/Logeo';
import LogOut from './LogOut';




const RegGoogle = () => {

     const{logInGoogle,usuario}=useContext(Autenticacion)

  return (
    <div>
        <Button variant="primary" onClick={()=>{logInGoogle()}}>INGRESAR CON GOOGLE</Button>
    </div>
  )
}

export default RegGoogle;