import React, { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "../styles/login.css";
import CatamarcaLogo from "../img/catamarca_logo.jpeg";
import LogoLow from "../img/logo_low.jpg";
import LoadingGif from "../img/loadingGif.gif";
const Login = () => {
    const [loading,setLoading] = useState(false);
    const [user,setUser] = useState("");
    const [password,setPassword] = useState("");
    const handleChangeUser = (e) => {
        setUser(e.target.value);
    }
    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    }
    const handleLogin = (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(()=>{
            setLoading(false);
        },2000)
    }
    return(
        <div className="login-component">
            <div className="login-form">
                <div className="img-left-container">
                    <img src={CatamarcaLogo} alt="logo"/>
                </div>
                <div className="form-container">
                    <img src={LogoLow} alt="logo low"/>
                    <div className="form-input">
                        <h3>Inicie sesión para continuar</h3>
                        <Box component="form" sx={{   '& > :not(style)': { m: 1, width: '25ch' }, }} noValidate autoComplete="off">
                          <TextField onChange={handleChangeUser} value={user} id="user" label="Usuario" variant="outlined"/>
                        </Box>
                        <Box component="form" sx={{   '& > :not(style)': { m: 1, width: '25ch' }, }} noValidate autoComplete="off">
                          <TextField onChange={handleChangePassword} value={password} id="password" type="password" label="Contraseña" variant="outlined"/>
                        </Box>
                    </div>
                    {
                        loading ? 
                        <button type="button" className="login-button loading">
                            <img src={LoadingGif} alt="loading"/>
                        </button> :
                        <button onClick={(e)=>{handleLogin(e)}} type="button" className="login-button">Iniciar sesión</button>
                    }
                </div>
            </div>
        </div>
    )
}

export default Login;