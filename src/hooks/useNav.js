import { useEffect, useState } from "react";
import logo from "../images/nav-logo.png";

const useNav = () => {


    const [navbar, setNavbar] = useState(false);
    const [navBarLogo, setNavBarLogo] = useState(logo);

    const changeBackground = () => {
        if(window.scrollY >= 300){
            setNavbar(true)
        }else{
            setNavbar(false)
        }
    }
    useEffect(() => {
        changeBackground()
        window.addEventListener('scroll', changeBackground);
    }, []);
    const changeLogo = () => {
        if(window.scrollY >= 300){
            setNavBarLogo(
                <span className='font-bold text-2xl'> IloVe TRavEl</span>
            )
        }else{
            setNavBarLogo(
                <img className="h-16" src={logo} alt="" />
            )
        }
    }
    useEffect(() => {
        changeLogo()
        window.addEventListener('scroll', changeLogo);
    }, []);
    return {navbar, navBarLogo}
}

export default useNav;