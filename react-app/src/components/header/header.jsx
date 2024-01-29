import {useState}  from "react";
import { Link } from "react-router-dom";
import MainMenu from '../mainMenu/mainMenu';
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai";
import Header_logo from './logo.png';
import '../../assets/scss/style.scss';

import wishListSvg from './img/wishList.svg';
import basketSvg from  './img/basket.svg';
import accountSvg from './img/account.svg';

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
  function notActiveBurger () {
    setActive(false);
  }
    return (
    <header className={isActive ? 'header active' : 'header'}>
      <div className={isActive ? 'menu active' : 'menu'}>
        <Link to="/"><img src={Header_logo} alt="Logo" /></Link>
        <MainMenu onClose={() =>{setActive(false)}} isActive={isActive} links={links.links} class={links.class} />
      </div>
    <div className={isActive ? 'btns active' : 'btns'}>
      <Link to="/wishlist"><img onClick={notActiveBurger} src={wishListSvg} alt=""/></Link>
      <Link to="/singIn"><img onClick={notActiveBurger} src={accountSvg} alt=""/></Link>
      <Link to="/"><img onClick={notActiveBurger} src={basketSvg} alt=""/></Link>
    </div>

      <div onClick={toggleClass} className={"mobile-btn"}>

        {isActive ? <AiOutlineClose size={"55"}/> : <AiOutlineMenu size={"55"}/>}
      </div>
    </header>
    )
}

export default Header;