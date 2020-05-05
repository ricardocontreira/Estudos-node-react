import React from 'react';
import '../../global.css';
import '../Menu/styles.css';
import LogoIMG from '../../Assets/logo.png';
import { FiUser, FiMapPin } from 'react-icons/fi'
import { Link } from 'react-router-dom';


export default function mainuser(){

    return(

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
                   <Link to="">Olá, Ricardo</Link>
                </div>

            </div>
        </div>

    </div>

    )

}