import {NavLink} from 'react-router-dom';

function mainMenu (props) {
  const items = props.links.map((item, index) => {
    return (
        <li key={index}>
          <NavLink to={item.path}>{item.link}</NavLink>
        </li>
    )
  });
  return (
      <nav className={props.class}>
        <ul>
          {items}
        </ul>
      </nav>
  )
}

mainMenu.defaultProps = {
  class: 'nav',
  links: [
    {
      link: "Default link",
      path: "/",
    },
  ]
}
export default mainMenu;