
import './App.css'
import NavBar from './components/NavBar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import LogIn from './components/LogIn'
import RegContrasena from './components/RegContrasena'
import { useState } from 'react'
import Logeo from './context/Logeo'




function App() {
 

  return (
    <div className="App">

    
          <BrowserRouter>
            <Logeo>

              <NavBar/>
            

              <Routes>
                
                <Route exact path='/' element={<Home/>}/>

                <Route exact path='/usuario' element={<LogIn/>}/>

                <Route exact path='/registrar' element={<RegContrasena/>}/>

              </Routes>
          
          
            </Logeo>
          </BrowserRouter>

      
    </div>
  )
}

export default App
