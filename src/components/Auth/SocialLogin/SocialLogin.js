import React from 'react';
import logo from "../../../images/google.svg"
import fb from "../../../images/facebook.png"
import { FacebookAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from '../../../firebase.init';
import { toast, ToastContainer } from 'react-toastify';
const provider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const SocialLogin = () => {
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