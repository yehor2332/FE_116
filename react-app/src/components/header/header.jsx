import {useState}  from "react";
import { Link } from "react-router-dom";
import MainMenu from '../mainMenu/mainMenu';
import Header_logo from './logo.png';
import '../../assets/scss/style.scss'
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
    <Link to="/"><img src={Header_logo} alt="Logo" /></Link>
    <MainMenu links={links.links} class={links.class} />
    <div className={'btns'}>
      <button className={'register'}><Link to="/">Register</Link></button>
      <button className={'sign_in'}><Link to="/">Sign in</Link></button>
    </div>
    <div 
    className={isActive ? 'burger active' : 'burger'}
    onClick={toggleClass}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  </header>
    )
}

export default Header;