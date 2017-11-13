import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <div className="home-page">
        <div id="titleDiv">

      		<h1 id="titleMed">Med</h1>
          <h1 id="titleLite">Lite</h1>

      	</div>

      	<div>
      		<form>
      			<input type="radio" name="user" value="ExistingUser" checked></input>
            Existing User
      			<input type="radio" name="user" value="NewUser"></input>
            New User
            <br></br>
            <br></br>

            E-mail:
            <br></br>
      			<input type="text" name="email"></input>
            <br></br><br></br>

            Password:
            <br></br>
      			<input type="password" name="password"></input>
            <br></br>
            <br></br>
      			<input type="submit" value="Sign In" onClick={() => {
              this.props.router.push('/home');
            }}></input>
            <br></br>

      		</form>
      	</div>
      </div>
    )
  };
};

export default Login;
