import { signInWithEmailAndPassword } from 'firebase/auth';
import {useHistory} from 'react-router-dom'
import {Link} from 'react-router-dom'

function Login(){

    const btn = {
        width:'150px',
        height:'30',
        marginTop:"3%"
    }

    let history = useHistory() ;

    const login = (()=>{

        signInWithEmailAndPassword(auth, email, password).then(()=>{

        }).catch(()=>{
            console.log(err)
        })
        history.push("/home");
    })

    return(

        <div className="container">

            <h1>Login</h1>
            <input type="email" placeholder="Enter your email" /> <br/><br/>
            <input type="password" placeholder="Enter your password" />
            <button style={btn} onClick={login}>Login</button>

            <span>Don't have an account?</span>{" "}
            <span> 
                <Link to="/sign-up">Create one</Link>
             </span>
        </div>
    );
}
export default Login