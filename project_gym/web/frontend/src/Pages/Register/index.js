import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import LogoImG from '../../Assets/logo.png';
import { FiArrowLeft } from 'react-icons/fi'
import '../../global.css';
import '../Register/RegisterStyles.css';
import api from '../../Services/api';


export default function Register(){

    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [age, setAge] = useState('');
    const [adress, setAdress] = useState('');
    const [email, setEmail] = useState('');
    const [ddd, setddd] = useState('');
    const [phone, setPhone] = useState('');
    const [user_name, setUser_name] = useState('');
    const [password, setPassword] = useState('');


    const history = useHistory();

        async function handleregister(e){

            e.preventDefault();

            const data = {
                name,
                lastname,
                age,
                adress,
                email,
                ddd,
                phone,
                user_name,
                password
            };

            try {

                const response =  await api.post('/user', data);
                console.log(response);

                history.push();

            } catch(err){
                alert('error on register, try again '+err)
            }

        }


     return (
    <div className="register-container">
        <div className="content">

         <section>           

            <img src={LogoImG} alt="logo"/>

         <h1>Login</h1>

        <form>
         <input type="text" placeholder="user"/>
         <input  type="password" placeholder="password"/>

         <button className="button">Entrar</button>   

         </form>

         <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color = "rgb(139, 139, 139)"/>
                        Voltar a HOME
         </Link> 

        </section>

        <form onSubmit={handleregister}>
            <h1>Cadastre-se</h1>
            <input placeholder="Nome"
            value={name}
            onChange={e => setName(e.target.value)}/>

            <input placeholder="Sobrenome"
            value={lastname}
            onChange={e => setLastname(e.target.value)}/>

            <input type="date" placeholder="Idade"
             value={age}
            onChange={e => setAge(e.target.value)}/>

            <input placeholder="Endereço"
             value={adress}
            onChange={e => setAdress(e.target.value)}/>

            <input type="email" placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}/>

            <div className="input-group">
            <input style={{ width: 90}} placeholder="DDD"
                        value={ddd}
                        onChange={e => setddd(e.target.value)}/>

            <input placeholder="Telefone"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}/>
            </div>

            <input placeholder="Nome de usuário"
                        value={user_name}
                        onChange={e => setUser_name(e.target.value)}/>

            <input  type ="password" placeholder="senha"
                        value={password}
                        onChange={e => setPassword(e.target.value)}/>

            <input type="password" placeholder="Repita Senha"/>

            <button className="button">Cadastrar</button>  

        </form>

        </div>
    </div>

     )

}