import {Link} from "react-router-dom";
import footer_logo from './footer_logo.png';
import FooterMenu from '../footerMenu/FooterMenu';
import './fonts/iconsFont.css'
import '../../assets/scss/style.scss'

const links = {
  class: 'footer-menu',
  links: [
    {
      link: "Plan Events",
      path: "/plan_Events",
    },
    {
      link: "Sell Tickets",
      path: "/sell_Tickets",
    },
    {
      link: "Account",
      path: "/account",
    },
    {
      link: "Press",
      path: "/press",
    },
    {
      link: "Help Center",
      path: "/help_Center",
    },
    {
      link: "How It Works",
      path: "/how_It_Works",
    },
    {
      link: "Privacy",
      path: "/privacy",
    },
    {
      link: "Terms",
      path: "/terms",
    },
  ]
}

const currentYear = new Date().getFullYear();

function footer() {
  return (
      <footer className={'footer'}>
        <div className={"footer-items"}>
          <div className={'logo'}>
            <Link to="/"><img src={footer_logo} alt="Logo"/></Link>
            <p>Eventick is a global self-service ticketing platform for live experiences that allows anyone to create,
              share, find and attend events that fuel their passions and enrich their lives.</p>
            <div className={'footer_social_medias'}>
              <Link className={'_icon-facebook'} to="/"></Link>
              <Link className={'_icon-instagram'} to="/"></Link>
              <Link className={'_icon-twitter'} to="/"></Link>
            </div>
          </div>
          <FooterMenu links={links.links} class={links.class}/>
          <div className="buttonForm">
            <h2>Stay in the loop</h2>
            <p>Join our mailing list to stay in the loop with our newest for Event and concert</p>
            <div className={"buttonFooter"}>
              <form action="">
                <input placeholder="Enter your email address.." type="text"/>
                  <button type="submit" className={"button"}>Subscibe Now</button>
              </form>
            </div>
          </div>
        </div>
        <div className={"copyright"}>
          <p>Copyright © {currentYear} <Link to='/'>Eventick</Link> Global Corporation</p>
        </div>
      </footer>
  )
}

export default footer;