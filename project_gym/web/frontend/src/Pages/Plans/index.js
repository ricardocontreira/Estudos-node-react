import React from 'react';
import LogoIMG from '../../Assets/logo.png';
import {Link} from 'react-router-dom';
import './PlansStyles.css';


export default function Plans(){

    return (

    <div className="bg-team">

        <div className="tools">     
           <img src={LogoIMG} alt="logo"/>
               <ul>
                   <li><Link to='/'>HOME</Link></li>
                   <li><Link to='/whoweare'>QUEM SOMOS</Link></li>
                   <li><Link to='/team'>EQUIPE</Link></li>
                   <li><Link to='/contact'>CONTATO</Link></li>
                   <li><Link style={{color: 'grey'}} to='/plans'>PLANOS</Link></li>
               </ul>
           </div>


    <div className="body-plans">

        <div className="main-plans">

                <div className="plan-1">

                    <div className="plan">
                        <h1>PLANO SOMENTE MUSCULAÇÃO</h1>
                    </div>

                    <div className="value">
                        <h1>R$ 100,00</h1>
                    </div>


                </div>

                <div className="plan-1">
                    
                    <div className="plan">
                       <h1>PLANO MUSCULAÇÃO + FUNCIONAL</h1>
                    </div>

                    <div className="value">
                        <h1>R$ 200,00</h1>
                    </div>

                </div>
                
                <div className="plan-1">

                     <div className="plan">
                     <h1>PLANO MUSCULAÇÃO + FUNCIONAL + NATAÇÃO</h1>
                    </div>

                    <div className="value">
                        <h1>R$ 300,00</h1>
                    </div>
                </div>
        </div>
    </div>        

    </div>
    )

}