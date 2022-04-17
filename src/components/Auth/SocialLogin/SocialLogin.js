import React from 'react';
import logo from "../../../images/google.svg"
import fb from "../../../images/facebook.png"
import { FacebookAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';

const provider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const SocialLogin = () => {
	const [user, loading, error] = useAuthState(auth);
	let navigate = useNavigate();
	let location = useLocation();
	let from = location.state?.from?.pathname || "/";
	if(user){
		 navigate(from, { replace: true });
	}
    const handleGoogle = () => {
		signInWithPopup(auth, provider)
		.then((result) => {
			const user = result.user;
			toast.success('Successfully sign up!')
			  }).catch((error) => {
				toast.error('try agin later !')
			  });
	  }
    const handleFacebook = () => {
		signInWithPopup(auth, facebookProvider)
		.then((result) => {
			const user = result.user;
			toast.success('Successfully sign up!')
			  }).catch((error) => {
				// toast.error('try agin later !')
			  });
	  }

    return (
        <div>
             <button onClick={handleGoogle} className='g-logo'>
     <img className='logo w-10' src={logo}  alt="" />
     Continue with Google
 </button>
 <button onClick={handleFacebook} className='g-logo'>
     <img className='logo fb-logo' src={fb}  alt="" />
     Continue with Facebook
 </button>
 <ToastContainer />
        </div>
    );
};

export default SocialLogin;