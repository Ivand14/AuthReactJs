import React, { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { Autenticacion } from '../context/Logeo';

const NavBar = () => {

  const {usuario,cerrarSesion}=useContext(Autenticacion)


  return (
    <div className='navbar'>
        <Navbar bg="light" expand="lg" className='navbar'>
      <Container className='navbar'>
        <Link to={`/`}>
          INICIO           
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">{usuario.email}</Nav.Link>
            <Nav.Link href="#link"><img src={usuario.photoURL
              } alt="" className='imgNav' /></Nav.Link>

              {usuario.email  ? <Button variant="primary" className='btnNav' onClick={cerrarSesion}>Cerrar Sesion</Button> :<Link to={`/usuario`}> <Button variant="primary">LogIn</Button></Link>  }


          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </div>
  )
}

export default NavBar