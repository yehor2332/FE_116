import {useState}  from "react";
import { Link } from "react-router-dom";
import MainMenu from '../mainMenu/mainMenu';
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai";
import Header_logo from './logo.png';
import '../../assets/scss/style.scss';

import wishListImg from './img/wishList.svg'

const links = {
  class: 'main-menu',
  links: [
    {
      link: "Home",
      path: "/",
    },
    {
      link: "Events",
      path: "/events"
    },
    {
      link: "Ticket",
      path: "/ticket"
    },
    {
      link: "Contact",
      path: "/contact"
    },
  ]
}
function Header () {
  const [isActive, setActive] = useState(false);

  function toggleClass () {
    setActive(!isActive);
  }
    return (
    <header className={isActive ? 'header active' : 'header'}>
      <div className={isActive ? 'menu active' : 'menu'}>
        <Link to="/"><img src={Header_logo} alt="Logo" /></Link>
        <MainMenu onClose={() =>{setActive(false)}} isActive={isActive} links={links.links} class={links.class} />
      </div>
    <div className={isActive ? 'btns active' : 'btns'}>
      <Link to="/wishlist"><img src={wishListImg} alt=""/></Link>
      <Link to="/"><button>Register</button></Link>
      <Link to="/singIn"><button>Sign in</button></Link>
    </div>

      <div onClick={toggleClass} className={"mobile-btn"}>

        {isActive ? <AiOutlineClose size={"55"}/> : <AiOutlineMenu size={"55"}/>}
      </div>
    </header>
    )
}

export default Header;