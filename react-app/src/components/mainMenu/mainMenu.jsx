import { NavLink } from "react-router-dom";
function mainMenu (props) {
  const items = props.links.map((item, index) => {
  return (
      <li key={index}>
        <NavLink onClick={props.onClose} to={item.path}>{item.link}</NavLink>
      </li>
  )
});
    return (
        <nav className={props.class}>
      <ul className={props.isActive ? 'ul active' : 'ul'}>
        {items}
      </ul>
    </nav>
    )
}
mainMenu.defaultProps = {
  class: 'nav',
  links: [
    {
      link: "Default Link",
      path: "/",
    },
  ]
}
export default mainMenu;