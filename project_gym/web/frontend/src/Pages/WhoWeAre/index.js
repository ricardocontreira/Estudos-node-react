import React from 'react';
import LogoIMG from '../../Assets/logo.png';
import { Link } from 'react-router-dom';
import './wwaStyles.css';
import AcademiaPhoto from '../../Assets/academia.png';


export default function WWA(){

    return(

        <div className="bg">

         <div className="menu-container">
            <div className="tools">
            <img src={LogoIMG} alt="logo"/>

                <ul>
                    <li><Link to='/'>HOME</Link></li>
                    <li><Link style={{color: 'grey'}} to='/whoweare'>QUEM SOMOS</Link></li>
                    <li><Link to='/team'>EQUIPE</Link></li>
                    <li><Link to='/contact'>CONTATO</Link></li>
                    <li><Link to='/plans'>PLANOS</Link></li>
                </ul>
            </div>


            <div className="body">

                    <div className="text-body">
                 <div>
                        
                         <h3>Academia LIFIT</h3>
                    <p>    Mesmo que falte muito para o seu objetivo final,</p>
                    <p>nada mudará se você não se mexer agora mesmo.</p>
                     <p>Lembre-se sempre que o primeiro passo faz mais</p>
                    <p>diferença na sua trajetória do que o último!</p>
                    </div>
                    </div>

                    <div className="image-body">

                        <img src={AcademiaPhoto} style={{width: 500}}alt=""/>

                    </div>

                </div>

            </div>
        </div>

    )
}

