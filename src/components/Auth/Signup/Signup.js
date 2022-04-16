import { useEffect, useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "../../../firebase.init";
import "../../../styles/Login.css";
import bg from "../../../images/bg.svg"
import wave from "../../../images/wave.png"
import avatar from "../../../images/avatar.svg"
import SocialLogin from "../SocialLogin/SocialLogin";





const Signup = () => {
    

  
    const [userInfo, setUserInfo] = useState({
        email: '',
        password: '',
        confirmPass: ''
    });
    const [error, setError] = useState({
        email: '',
        password: '',
        general: ''
    });

    const [createUserWithEmailAndPassword, user, loading, hookError] =
        useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

const [showPass, setShowPass] = useState(false);
const handleEmailChange = (e) => {
const validRegx = /\S+@\S+\.\S+/;
const validPassword = validRegx.test(e.target.value)
if(validPassword){
 setUserInfo({...userInfo, email: e.target.value})
 setError({...error, email: ''})
}else{
    setError({...error, email: 'invalid email'})
    setUserInfo({...userInfo, email: ''})
}
}
const handlePasswordChange = (e) => {
    const passwordRegex = /.{6,}/;
    const validPassword = passwordRegex.test(e.target.value);

    if (validPassword) {
        setUserInfo({ ...userInfo, password: e.target.value });
        setError({ ...error, password: "" });
    } else {
        setError({ ...error, password: "Minimum 6 characters!" });
        setUserInfo({ ...userInfo, password: "" });
    }
};

const handleConfirmPasswordChange = (e) => {
	if (e.target.value === userInfo.password) {
		setUserInfo({ ...userInfo, confirmPass: e.target.value });
		setError({ ...error, password: "" });
	} else {
		setError({ ...error, password: "Password's don't match" });
		setUserInfo({ ...userInfo, confirmPass: "" });
	}
};
const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(userInfo.email, userInfo.password);
	toast.success('You Are Successfully SignUp')
}
    useEffect(() => {
        if (hookError) {
            switch (hookError?.code) {
                case "auth/invalid-email":
                    toast("Invalid email provided, please provide a valid email");
                    break;
                case "auth/invalid-password":
                    toast("Wrong password. Intruder!!");
                    break;
                default:
                    toast("something went wrong");
            }
        }
    }, [hookError]);
      const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (user) {
            navigate(from);
		
        }
    }, [user]);
	const [agree, setAgree] = useState(false);
	
    return (
   <>

<div className="main-container">
<img className="wave" src={wave} alt=''/>
	<div className="form-container">
		<div className="img">
			<img src={bg} alt=''/>
		</div>
		<div className="login-content">
			<form onSubmit={handleSubmit}>
				<img src={avatar} alt=''/>
				<h2 className="title">Sign Up</h2>
           		<div className="input-div one">
           		   <div className="i">
           		   		<i className="fas fa-user"></i>
           		   </div>
           		   <div className="div">
           		   		<input onChange={handleEmailChange} type="Email" className="input" required placeholder='Email'/>
							  {error?.email && <p className="text-red-600 mt-12">
							
								  {error.email}</p>}	  
           		   </div>
           		</div>
           		<div className="input-div one">
           		   <div className="i">
           		   		<i className="fas fa-user"></i>
           		   </div>
           		   <div className="div">
           		   		<h5>Password</h5>
           		   		<div className='relative'>
						  <input onChange={handlePasswordChange} type={showPass ? "text" : "password"} className="input" placeholder=" password"/>
						  {error?.password && <p className="text-red-600">{error.password}</p>}
						  <p className="absolute top-3 right-5 cursor-pointer" onClick={() => setShowPass(!showPass)}>👁</p>
						  </div>
           		   </div>
           		</div>
           		<div className="input-div pass">
           		   <div className="i"> 
           		    	<i className="fas fa-lock"></i>
           		   </div>
           		   <div className="div relative">
           		    	<input onChange={handleConfirmPasswordChange} type={showPass ? "text" : "password"} className="input" placeholder='Confirm Password'/>
						   <p className="absolute top-3 right-5 cursor-pointer" onClick={() => setShowPass(!showPass)}>👁</p>
            	   </div>
            	</div>
				<div className="flex items-center mb-4 ml-6">
      <input onClick={() => setAgree(!agree)} id="checkbox-2" aria-describedby="checkbox-2" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
      <label for="checkbox-2" className={`ml-3 text-sm font-medium text-gray-900 dark:text-gray-300 ${agree ? '' : 'text-red-600'}`}>Accept Terms and Conditions</label>
	
 		 </div>
    
            	<input   disabled={!agree} type="submit" className="btn" value="Sign Up"/>
		
			 <Link to="/login">already have an account?</Link>
			   {hookError && <p className="text-red-600">{hookError?.message}</p>}
			 <ToastContainer />
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

export default Signup;

