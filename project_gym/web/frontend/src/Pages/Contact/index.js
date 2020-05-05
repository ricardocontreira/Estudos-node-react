import React from 'react';
import '../../global.css';
import '../Menu/styles.css';
import LogoIMG from '../../Assets/logo.png';
import { Link } from 'react-router-dom';
import './ContactStyles.css';


export default function contact(){
    
    return (
     
        <div className="background">

        <div className="tools">     
            <img src={LogoIMG} alt="logo"/>

                <ul>
                    <li><Link to='/'>HOME</Link></li>
                    <li><Link to='/whoweare'>QUEM SOMOS</Link></li>
                    <li><Link to='/team'>EQUIPE</Link></li>
                    <li><Link style={{color: 'grey'}} to='/contact'>CONTATO</Link></li>
                    <li><Link to='/plans'>PLANOS</Link></li>
                </ul>
            </div>
            
            <div className="container-contact">
                
                <div className="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3393.825361527066!2d-52.31423488484449!3d-31.720665181303794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9511b4dbbf40ea59%3A0xdef8cd851f883b0b!2sAv.%20Engenheiro%20Ildefonso%20Sim%C3%B5es%20Lopes%2C%202202%20-%20Tr%C3%AAs%20Vendas%2C%20Pelotas%20-%20RS%2C%2096060-290%2C%20Brasil!5e0!3m2!1spt-PT!2spt!4v1586533283394!5m2!1spt-PT!2spt"></iframe>
                </div>

                <div className="items-contact">
                    
                    <div className="info-contact">

                         <h1>DEIXE SEU RECADO</h1>
                    
                    <form action="">

                        <input placeholder="Nome"/>
                        <input type="email" placeholder="E-mail"/>
                        <input placeholder="Titulo"/>
                        <textarea placeholder="Escreva sua mensagem..."/>
                        <button className="button">Enviar</button>
                    </form>

                    </div>

                    <div className="info-text-contact">

                    <div>
                        <h1>ACADEMIA LIFIT</h1> 
               
                        <p>Av. Ildefonso Simões Lopes, 47</p>
                        <p>Pelotas, RS 96060-290</p> 
                        <p>lifit@gmail.com</p>   
                        <p>Tel: 53-98111-9087</p>         
                    </div>

                    </div>
                </div>

            </div>


        </div>
        
    )
}

