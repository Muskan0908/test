import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';


export default class Welcome extends Component {
    state={
        isLoggedIn:false,
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
      }
    responseFacebook=(response)=>{
        console.log(response);
        this.setState({
            isLoggedIn:true,
            userID:response.userID,
            name:response.name,
            email:response.email,
            picture:response.picture.data.url
        })
    }
    render() {
        let fbContent;
        let googleContent;
        if(this.state.isLoggedIn){
            fbContent=(
                <div>
                    <img src={this.state.picture} alt={this.state.name}/>
                    <h2>Welcome {this.state.name}</h2>
                    <h3>Email:{this.state.email}</h3>
                </div>
            );
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
        googleContent=(
            <GoogleLogin
    clientId="628582513251-8k12u35sjl2t770hj5h5ti72r48537m2.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={this.responseGoogle}
    onFailure={this.responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
        );
        return (
            <div>
                {fbContent}
                {googleContent}
            </div>
        )
    }
}