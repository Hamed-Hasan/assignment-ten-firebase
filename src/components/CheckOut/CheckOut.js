import { useEffect, useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { auth } from "../../../firebase.init";
import "../../styles/Login.css";
import bg from "../../images/bg.svg"
import wave from "../../images/wave.png"
import avatar from "../../images/avatar.svg"
import { auth } from "../../firebase.init";

const CheckOut = () => {
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

const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(userInfo.email, userInfo.password);
	toast.success('You Are Successfully SignUp')
}
const [terms, setTerms] = useState(false);
    return (
  
<div className="main-container">
<img className="wave" src={wave} alt=''/>
	<div className="form-container">
		<div className="img">
			<img src={bg} alt=''/>
		</div>
		<div className="login-content">
			<form onSubmit={handleSubmit}>
				<img src={avatar} alt=''/>
				<h2 className="title">Checkout</h2>
           	
           		<div className="input-div one">
           		   <div className="i">
           		   		<i className="fas fa-user"></i>
           		   </div>
           		   <div className="div">
           	
           		   		<div className='relative'>
						  <input type='text' className="input" placeholder=" Enter Your Name"/>
					
						  </div>
           		   </div>
           		</div>
           		<div className="input-div pass">
           		   <div className="i"> 
           		    	<i className="fas fa-lock"></i>
           		   </div>
           		   <div className="div relative">
           		    	<input type='text' className="input" placeholder='Address'/>
            	   </div>
            	</div>
                <div className="input-div one">
           		   <div className="i">
           		   		<i className="fas fa-user"></i>
           		   </div>
           		   <div className="div">
           		   		<input onChange={handleEmailChange} type="Email" className="input mt-3" required placeholder='Email'/>
							  {error?.email && <p className="text-red-600 mt-12">
							
								  {error.email}</p>}	  
           		   </div>
           		</div>
                   <div className="input-div pass">
           		   <div className="i"> 
           		    	<i className="fas fa-lock"></i>
           		   </div>
           		   <div className="div relative">
           		    	<input type='Number' className="input" placeholder='Phone'/>
            	   </div>
            	</div>
				<div className="flex items-center mb-4 ml-6">
      <input onClick={() => setTerms(!terms)} id="checkbox-2" aria-describedby="checkbox-2" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
      <label for="checkbox-2" className={`ml-3 text-sm font-medium text-gray-900 dark:text-gray-300 ${terms ? '' : 'text-red-600'}`}>Accept Terms and Conditions</label>
	
 		 </div>
    
            	<input   disabled={!terms} type="submit" className="btn" value="Sign Up"/>
		
			 <Link to="/signup">create a new account?</Link>
			   {hookError && <p className="text-red-600">{hookError?.message}</p>}
			 <ToastContainer />
            </form>
	
        </div>
    </div>
</div>

    );
};

export default CheckOut;