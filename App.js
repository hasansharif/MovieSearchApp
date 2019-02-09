import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'
import {routesArray} from './routes';

class App extends Component{
   render(){
      return(
         <div>
            <Switch>
               {routesArray.map(function(item, index){
                  return <Route exact path={item.path} component={item.component}/>
               })}
            </Switch>
         </div>
      );
   }
}
export default withRouter(App);