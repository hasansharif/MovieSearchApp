import React, { Component } from 'react';

class HomeScreen extends Component{

   componentWillMount(){
      this.state = {label: "hello"};
      this.navigateToSignIn = this.navigateToSignIn.bind(this);
      this.navigateToLogin = this.navigateToLogin.bind(this);
      this.updateLabel = this.updateLabel.bind(this);
   }

   updateLabel(){
      var list = [
         {name: "test0"},
         {name: "test1"},
         {name: "test2"},
         {name: "test3"},
         {name: "test4"},
         {name: "test5"},
   ]
      this.setState({label: "aa gaya bhai", list: list})
   }

   navigateToSignIn(){
      this.props.history.push('/signin');
   }


   navigateToLogin(){
      this.props.history.push('/login');
   }

   render(){
      return(
         <div>
            <h1>Home Screen</h1>
            <button onClick={this.navigateToSignIn}>Signin</button>
            <button onClick={this.navigateToLogin}>Login</button>
            <button onClick={this.updateLabel}>Click me</button>
            <p>{this.state.label}</p>
            {(this.state.list && this.state.list.length > 0) && <ul>
               {this.state.list.map(function(item, index){
                  return <li>{item.name}</li>
               })}
            </ul>}
         </div>
      );
   }
}
export default HomeScreen;