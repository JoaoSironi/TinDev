import React from 'react';
import './Login.css';

import logo from '../assets/logo.svg';

export default function login() {
    return(
        <div className="login-container">
            <form>
           <img src={logo} alt="Tindev" /> 
            <input placeholder="Insira seu usuario do GitHub" />
            <button type="submit">Enviar</button>
            </form>
        </div>
    );
}