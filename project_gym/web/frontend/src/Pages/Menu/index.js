import React from 'react';
import '../../global.css';
import '../Menu/styles.css';
import LogoIMG from '../../Assets/logo.png';
import { FiUser, FiMapPin } from 'react-icons/fi'
import { Link } from 'react-router-dom';
import WppIcon from '../../Assets/wpp.png'


export default function home(){


     return (

<div className="bg-photo">
        <div className="menu-container">
            <div className="tools">
            <img src={LogoIMG} alt="logo"/>

                <ul>
                    <li><Link to='/whoweare'>QUEM SOMOS</Link></li>
                    <li><Link to='/team'>EQUIPE</Link></li>
                    <li><Link to='/contact'>CONTATO</Link></li>
                    <li><Link to='/plans'>PLANOS</Link></li>
                </ul>

                <div className="Login">
                   <FiUser size={35}/>
                   <span> </span>

               <Link to="/mainuser">Entrar ou Cadastrar</Link>

                </div>

            </div>

            <div className="body-menu">
                
            </div>


            <footer>
                
                <div className="info-footer">

                 <div className="adress"><h3><FiMapPin/> Av ildefonso Simões lopes, 47 - Pelotas/RS</h3></div>

                <div><img className="logo" src={LogoIMG} alt=""/></div>

                <div className="contacts">
                    <ul>
                        <li> <img className="Wpp-icon" src={WppIcon} alt=""/> 984546864</li>
                        <li> <img className="Wpp-icon" src={WppIcon} alt=""/> 981119087</li>
                    </ul>

                </div>
                        
                </div>

            </footer>

        </div>
</div>
    
     )
}
