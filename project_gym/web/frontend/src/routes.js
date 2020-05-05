import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import menu from './Pages/Menu';
import register from './Pages/Register';
import contact from './Pages/Contact';
import team from './Pages/Team';
import plans from './Pages/Plans';
import wwa from './Pages/WhoWeAre';
import mainuser from './Pages/mainuser';


export default function routes(){
    return (
        <BrowserRouter>
            <Switch>
                 <Route path="/" exact component={menu}/>
                 <Route path="/registerandLogin" component={register}/>
                 <Route path="/contact" component={contact}/>
                 <Route path="/team" component={team}/>
                 <Route path="/plans" component={plans}/>
                 <Route path="/whoweare" component={wwa}/>
                 <Route path="/mainuser" component={mainuser}/>
            </Switch> 
        </BrowserRouter>
    )
}