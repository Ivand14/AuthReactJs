import React, { createContext,useState } from "react";
import { getAuth, signInWithEmailAndPassword,createUserWithEmailAndPassword,signInWithPopup, GoogleAuthProvider,signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {  toast } from 'react-toastify';

export const Autenticacion=createContext();

const Logeo = ({children}) => {
    
    
const provider = new GoogleAuthProvider();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    const [usuario,setUsuario] = useState([]);

  const auth = getAuth();  
  const navigate=useNavigate();

  const login = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        setUsuario(user)
        console.log(user.email)
        navigate('/')
        toast(`Bienvenido nuevamente ${email}`)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  

  const crearUsuario=()=>{
    const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user)
            toast.success(`Usuario : ${email} registrado correctamente!`)
            navigate('/usuario')
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            toast.error('Usuario ya registrado!');
        });

}

    const handleSubmit=(e) => {
    e.preventDefault();
    crearUsuario();
    }


    const logInGoogle=()=>{
        const auth = getAuth();
            signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // IdP data available using getAdditionalUserInfo(result)
                // ...
                console.log(user)
                setUsuario(user)
                navigate('/')
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }


    console.log(usuario)

    const cerrarSesion=()=>{
            signOut(auth).then(() => {
            // Sign-out successful.
            setUsuario(false);
            toast('Cerraste sesion correctamente!')
            navigate('/usuario')
            }).catch((error) => {
            // An error happened.
            console.log(error)
            });
    }


  return (

    <Autenticacion.Provider value={{email,setEmail,password,setPassword,provider,auth,logInGoogle,login,handleSubmit,crearUsuario,usuario,cerrarSesion}}>{children}</Autenticacion.Provider>

  )

    
};

export default Logeo;
