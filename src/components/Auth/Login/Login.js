import { useEffect, useRef, useState } from "react";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { auth } from "../../../firebase.init";
import "../../../styles/Login.css";
import bg from "../../../images/bg.svg"
import wave from "../../../images/wave.png"
import avatar from "../../../images/avatar.svg"
import SocialLogin from "../SocialLogin/SocialLogin";
const Login = () => {
   
	const emailRef = useRef('');
     const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
    })
    const [errors, setErrors] = useState({
        email: "",
        password: "",
        general: "",
    })
	const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
     const [signInWithEmail, user, loading, hookError] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, googleUser, loading2, googleError] = useSignInWithGoogle(auth);
    const handleEmailChange = (e) => {
        const emailRegex = /\S+@\S+\.\S+/
        const validEmail = emailRegex.test(e.target.value)
        if(validEmail) {
            setUserInfo({...userInfo, email: e.target.value})
            setErrors({...errors, email: ''})
        }else{
            setErrors({...errors, email: 'please type valid mail'})
            setUserInfo({...userInfo, email: ''})
        }
    }
    const handlePasswordChange = (e) => {
        const emailRegex = /.{6,}/
        const validPassword = emailRegex.test(e.target.value)
        if(validPassword) {
            setUserInfo({...userInfo, password: e.target.value})
            setErrors({...errors, password: ''})
        }else{
            setErrors({...errors, password: 'please type valid password'})
            setUserInfo({...userInfo, password: ''})
        }
    }
  
const handleLogin = (e) => {
e.preventDefault();
signInWithEmail(userInfo.email, userInfo.password)

}
 useEffect(() => {
        const error = hookError || googleError;
        if(error){
            switch(error?.code){
                case "auth/invalid-email":
                    toast("Invalid email provided, please provide a valid email");
                    break;
                
                case "auth/invalid-password":
                    toast("Wrong password. Intruder!!")
                    break;
                default:
                    toast("something went wrong")
            }
        }
    }, [hookError, googleError])

       const navigate = useNavigate();
       const location = useLocation();
       const from = location.state?.from?.pathname || "/";


	   const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            // toast('Sent email');
        }
        else{
            toast('please enter your valid email address');
        }
    }

       useEffect(() => {
           if (user) {
			   toast('SuccessFully Login')
               navigate(from);
           }
       }, [user]);
    return (

<>


<div className="main-container">
<img className="wave" src={wave} alt=""/>
	<div className="form-container" >
		<div className="img">
			<img src={bg} alt=""/>
		</div>
		<div className="login-content">
			<form onSubmit={handleLogin}>
				<img src={avatar} alt=""/>
				<h2 className="title">Login</h2>
           		<div className="input-div one">
           		   <div className="i">
           		   		<i className="fas fa-user"></i>
           		   </div>
           		   <div className="div">
           		   	
           		   		<input ref={emailRef} onChange={handleEmailChange} type="Email" className="input" placeholder="Email" required />
							  {errors?.email && <p className="text-red-600 mt-12">{errors.email}</p>}
           		   </div>
           		</div>
           		<div className="input-div pass">
           		   <div className="i"> 
           		    	<i className="fas fa-lock"></i>
           		   </div>
           		   <div className="div">
           		    
           		    	<input onChange={handlePasswordChange} type="password" placeholder='Password' className="input"/>
						   {errors?.password && <p className="text-red-600 mt-12">{errors.password}</p> }
            	   </div>
            	</div>
            	<div>
			   
                <ToastContainer />
				
				<p  className='text-left ml-7 cursor-pointer mt-6 text-slate-700 hover:underline' onClick={resetPassword}> Forget Password?</p>
				<div className='ml-2'>
				<Link to='/signup' className='text-slate-500'> Create a new account</Link>
				</div>
				</div>
            	<input type="submit" className="btn" value="Login"/>
				<div className='g-container mx-auto ml-7'>
				<div className='line-parent flex items-center'>
					<div className="line-left"></div>
					<p>or</p>
					<div className="line-right"></div>
				</div>
				<SocialLogin/>
				</div>
            </form>
        </div>
    </div>
</div>

</>


   
    );
};

export default Login;