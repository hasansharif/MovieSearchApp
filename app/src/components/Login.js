import React, { Component } from 'react';

class Login extends Component{

  componentWillMount(){
    this.state = {value: ""};
    this.setMovieName = this.setMovieName.bind(this);
    this.getMovieData = this.getMovieData.bind(this);
  }

  setMovieName(e){
   this.setState({value: e.target.value});
  }

  getMovieData(e) {
    console.log("MOvieName: " + this.state.value);
    fetch("http://www.omdbapi.com/?apikey=566be8e5&t="+this.state.value)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.Title
            
          });
          console.log(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

   render(){

    const { error, isLoaded, items } = this.state;
      return(
         <div style={{color: "blue"}}>
            <h1>MovieSerchApp</h1>
            <div style={{ borderRadius: 4, borderWidth: 0.5, borderColor: '#d6d7da',}}> 
              <center> 
                  <label>
                    <input type="text" onChange={this.setMovieName} name="movie_name" value={this.state.value} placeholder="Enter Movie Name" />
                  </label>
                    <button onClick={this.getMovieData}>Submit</button> 
              </center> 
            </div>
         </div>
         
      );
   }
}
export default Login;