import { useRef, useState } from "react";
import "./login.scss";

const Login = () => {
    // const [email,setEmail] = useState("")

    
    // const [password,setPassword] = useState("")
    
    // const emailRef = useRef()
    // const passwordRef = useRef()
    // const handleStart = () =>{
    //     setEmail(emailRef.current.value)
        
    // }
    // const handleFinish = () =>{
    //     setPassword(passwordRef.current.value)
        
    // }
    return ( 
        <div className="login">
            <div className="top">
                <div className="wrapper">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="" className="logo" />
                
            </div>
            </div>
            <div className="container">
           <form>
            <h1>Sign In</h1>
            <input type="email" placeholder="Email Address or Phone Number" />
            <input type="password" placeholder="Password" />
            <button className="loginButton">Sign in</button>
            <span>New to Netflix? <b>Sign Up now</b><br/><small className="small-one">This page was created by Lanre-Abass Akeem.</small><br/> <small>This page is protected by Googl reCAPTCH  to ensure you're not a bot<b>Learn more</b></small></span>
           </form>

        
            </div>
        </div>
     );
}
 
export default Login;