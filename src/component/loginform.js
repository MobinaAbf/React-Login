import React, { useState } from "react";
import "./loginform.css"

const LoginForm = () => {

    const [popupStyle,shoePopup]= useState("hide")

    const popup =() =>
    {
        shoePopup("login-popup")
        setTimeout(()=> shoePopup("hide"),3000)
    }
    return(
        <div className="cover">

            <h1 className="title">Login</h1>

            <input type="text" placeholder="userName"/>
            <input type="password" placeholder="Password"/>

            <div className="Login-btn" onClick={popup}> Login</div>

            <p className="text">Or Login using </p>

            <div className="alt-login">
                <div className="facebook"></div>
                <div className="google"></div>
            </div>

            <div className={popupStyle}>
                <h3>Login Failed</h3>
                <p> userName or password incorrect</p>
            </div>
        </div>
    )
}

export default LoginForm