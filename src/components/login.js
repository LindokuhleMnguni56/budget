import React, {useState} from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {useHistory} from 'react-router-dom'
import {Link} from 'react-router-dom'

import {auth} from '../config/firebase'

function Login(){

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const btn = {
        width:'150px',
        height:'30',
        marginTop:"3%"
    }

    let history = useHistory() ;

    const login = (()=>{

        signInWithEmailAndPassword(auth, email, password).then(()=>{
        history.push("/home");

        }).catch((err)=>{
            console.log(err)
        })
        history.push("/home");
    })

    return(

        <div className="container">

            <h1>Login</h1>
            <input type="email" placeholder="Enter your email" 
            onChange = {(e)=> setEmail(e.target.value)}/> <br/><br/>

            <input type="password" placeholder="Enter your password" 
            onChange = {(e)=> setPassword(e.target.value)}/> <br/><br/>
            
            <button style={btn} onClick={login}>
                Login{" "}
            </button>

            <span>Don't have an account?</span>{" "}
            <span> 
                <Link to="/sign-up">Create one</Link>
             </span>
        </div>
    );
}
export default Login