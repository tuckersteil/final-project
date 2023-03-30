import { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import video from './hp_hero_video_v3.mp4'
function Login({onLogin}){
    const [showLogin, setShowLogin] = useState(true);

   
    return (
        <div className="divy"> 
            <video  src={video} autoPlay loop muted />
            <div className="login">
            <h1 >All-Things-Active</h1>
            {showLogin ? (
            <>
                <LoginForm onLogin={onLogin}/>
                <p>------------------------------------------------------------------------</p>
                <p className="whitey">
                    Don't have an account? &nbsp;
                </p>
                <button onClick={() => setShowLogin(false)} className="btn-primary1">
                        Sign Up
                    </button>
            </>
            ) : (
            <>
                <SignUpForm onLogin={onLogin} />
                <br></br>
                <p >------------------------------------------------------------------------</p>
                <p className="whitey">
                    Already have an account? &nbsp;
                    <button color="secondary" onClick={() => setShowLogin(true)} class="btn-primary">
                        Log In
                    </button>
                </p>
            </> 
            )}
            </div>
        </div>
    )
}
export default Login;