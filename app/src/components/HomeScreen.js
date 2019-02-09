import React, { Component } from 'react';

class HomeScreen extends Component{

   componentWillMount(){
      this.state = {label: "hello"};
      this.navigateToSignIn = this.navigateToSignIn.bind(this);
      this.updateLabel = this.updateLabel.bind(this);
   }

   updateLabel(){
      this.setState({label: "aa gaya bhai"})
   }

   navigateToSignIn(){
      this.props.history.push('/signin');
   }

   render(){
      return(
         <div>
            <h1>Home Screen</h1>
            <button onClick={this.navigateToSignIn}>Signin</button>
            <button onClick={this.updateLabel}>Click me</button>
            <p>{this.state.label}</p>
         </div>
      );
   }
}
export default HomeScreen;