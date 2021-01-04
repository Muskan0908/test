import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import {Link} from 'react-router-dom';
import './style.css';

export default class Welcome extends Component {
    state={
        isFbLoggedIn:false,
        isGoogleLoggedIn:false,
        userID:"",
        name:"",
        email:"",
        picture:""

    }
    componentClicked=()=>{
        console.log("clicked");
    }
    responseGoogle = (response) => {
        console.log(response);
        this.setState({
            isGoogleLoggedIn:true,
            name:response.profileObj.name,
            email:response.profileObj.email,
            picture:response.profileObj.imageUrl
        })
      }
      responseFailureGoogle=(response)=>{
          console.log(response);
      }
    responseFacebook=(response)=>{
        console.log(response);
        this.setState({
            isFbLoggedIn:true,
            userID:response.userID,
            name:response.name,
            email:response.email,
            picture:response.picture.data.url
        })
        /*return(
            <div>
            <img src={this.state.picture} alt={this.state.name}/>
            <h2>Welcome {this.state.name}</h2>
            <h3>Email:{this.state.email}</h3>
            
        </div>
        )*/
    }
    render() {
        let fbContent;
        let googleContent;
        if(this.state.isFbLoggedIn){
            /*fbContent=(
                <div>
                    <img src={this.state.picture} alt={this.state.name}/>
                    <h2>Welcome {this.state.name}</h2>
                    <h3>Email:{this.state.email}</h3>
                </div>
            );*/
            return(
                <div className="loggedIn">
                    <img src={this.state.picture} alt={this.state.name}/>
                    <h2>Welcome {this.state.name}</h2>
                    <h3>Email:  {this.state.email}</h3>
                    <Link to="/home">Continue</Link>
                </div>
            )
        }
        else{
            fbContent=(
                <FacebookLogin
    appId="118973186652246"
    autoLoad={true}
    fields="name,email,picture"
    onClick={this.componentClicked}
    callback={this.responseFacebook} />
            );
        }

        if(this.state.isGoogleLoggedIn){
            /*googleContent=(
                <div>
                    <h2>Welcome {this.state.name}</h2>
                    <h3>Email:{this.state.email}</h3>
                </div>
            );*/
            return(
                <div className="loggedIn">
                    <img src={this.state.picture} alt={this.state.name}/>
                    <h2>Welcome {this.state.name}</h2>
                    <h3>Email:  {this.state.email}</h3>
                    <Link to="/home">Continue</Link>
                </div>
            )
           
        }
        else{
        googleContent=(
            <GoogleLogin
            clientId="628582513251-0la2kreu7u5738mu9mfmd2e8gov4ouom.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={this.responseGoogle}
            onFailure={this.responseFailureGoogle}
            cookiePolicy={'single_host_origin'}
            />
        );
        }
        return (
            <div className="app">
                <h2>Log in</h2><br/>
                <div className="login-option">
                   <div className="fb">{fbContent}</div> 
                   <div className="ggl">{googleContent}</div>
                </div>
                <br/>
                <p>or Login with email</p>
                <div className="form">
                    <form>
                        <label htmlFor="email">Email</label><br/>
                        <input to="email" type="email" placeholder="Type Here"/><br/><br/>
                        <label htmlFor="password">Password</label><br/>
                        <input to="password" type="password" placeholder="Type Here"/><br/><br/>
                        <button>Log In</button>
                    </form>
                </div>
            </div>
        )
    }
}
