import React, { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button';
import { Autenticacion } from '../context/Logeo';
import { Link } from 'react-router-dom';
import RegGoogle from './RegGoogle';

const LogIn = () => {

  const {usuario,login,email,setEmail,password,setPassword}=useContext(Autenticacion)


  return (
    <div>

      <form onSubmit={login} className='formulario'>

        <div className="input">
          <i className="bi bi-envelope-fill"></i>
          <input type="email" value={email} onChange={e=>setEmail(e.target.value)} className='box'  />
        </div>

        <div className="input">
          <i className="bi bi-file-lock2-fill"></i>
          <input type="password" value={password} onChange={e=>setPassword(e.target.value)} className='box' />
        </div>

        <Button variant="primary" type='submit'>INICIAR SESIÓN</Button>

        <RegGoogle/>
      </form>

      <div className="registrarse">
        <h3>No estas registrado?<span><Link to={`/registrar`}>Registarse</Link></span></h3>
      </div>

    </div>
  )
}

export default LogIn