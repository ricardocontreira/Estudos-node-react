import React from 'react';
import LogoIMG from '../../Assets/logo.png';
import { Link} from 'react-router-dom';
import RicardoIMG from '../../Assets/ricardocontreira.jpg'
import Linkedin from '../../Assets/linkedin.png';
import '../../global.css';
import '../Menu/styles.css';
import '../Contact/ContactStyles.css';
import './TeamStyles.css';






export default function team(){


    function changeimage(){

        document.getElementById("img").innerHTML = ""
       
    }

    return(

        <div className="bg-team">

         <div className="tools">     
            <img src={LogoIMG} alt="logo"/>
                <ul>
                    <li><Link to='/'>HOME</Link></li>
                    <li><Link to='/whoweare'>QUEM SOMOS</Link></li>
                    <li><Link style={{color: 'grey'}} to='/team'>EQUIPE</Link></li>
                    <li><Link to='/contact'>CONTATO</Link></li>
                    <li><Link to='/plans'>PLANOS</Link></li>
                </ul>
            </div>

<div className="info-team">

        <div className="grid-container">

                         <div className="grid-item">

                        <img className="photo-guest" src={RicardoIMG} alt=""/>
                        <p>Desenvolvedor</p>
                        <a href="#"><img className="linkedin-icon" src={Linkedin} alt=""/> Linkedin</a>

                        </div>

                        <div className="grid-item">

                        <img className="photo-guest" src={RicardoIMG} alt=""/>
                        <p>Desenvolvedor</p>
                        <a href="#"><img className="linkedin-icon" src={Linkedin} alt=""/> Linkedin</a>

                        </div>

                        <div className="grid-item">

                        <img className="photo-guest" src={RicardoIMG} alt=""/>
                        <p>Desenvolvedor</p>
                        <a href="#"><img className="linkedin-icon" src={Linkedin} alt=""/> Linkedin</a>

                        </div>

                        <div className="grid-item">

                        <img className="photo-guest" src={RicardoIMG} alt=""/>
                        <p>Desenvolvedor</p>
                        <a href="#"><img className="linkedin-icon" src={Linkedin} alt=""/> Linkedin</a>

                        </div>

                        <div className="grid-item">

                        <img className="photo-guest" src={RicardoIMG} alt=""/>
                        <p>Desenvolvedor</p>
                        <a href="#"><img className="linkedin-icon" src={Linkedin} alt=""/> Linkedin</a>

                        </div>

                        <div className="grid-item">

                        <img className="photo-guest" src={RicardoIMG} alt=""/>
                        <p>Desenvolvedor</p>
                        <a href="#"><img className="linkedin-icon" src={Linkedin} alt=""/> Linkedin</a>

                        </div>                        

                        
                                                  
                                                                               
                         </div>
                  </div>

        </div>


    )
}