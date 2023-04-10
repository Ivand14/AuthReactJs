import React, { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button';
import { Autenticacion } from '../context/Logeo';







const RegContrasena = () => {
    
  const{handleSubmit,setEmail,setPassword,email,password}=useContext(Autenticacion)

  return (
    <div className='containerForm'>

        <h2>BIENVENIDO A LA MEJOR PAGINA DEL MUNDO!</h2>
        <h3>REGISTRATE PARA CONTINUAR</h3>

       <form onSubmit={handleSubmit} className='formulario' >

            <label >Email</label>
            <input type="email" value={email} required onChange={e=>setEmail(e.target.value)}  className='input' />



            <label >Password</label>
            <input type="password" value={password}  required onChange={e=>setPassword(e.target.value)} className='input' />


            <Button variant="primary" type='submit'>REGISTRARSE</Button>
        </form>


    </div>
  )
}

export default RegContrasena;