import { NavLink } from "react-router-dom";
function footerMenu (props) {
  const footerMenuItems = props.links.map((item, index) => {
    return (
        <li key={index}>
          <NavLink to={item.path}>{item.link}</NavLink>
        </li>
    )
  });
    return (
        <nav className={props.class}>
        <ul>
        {footerMenuItems}
        </ul>
      </nav>
    )
}
footerMenu.defaultProps = {
  class: 'nav',
  links: [
    {
      link: "Footer Link",
      path: "/",
    },
  ]
}
export default footerMenu;