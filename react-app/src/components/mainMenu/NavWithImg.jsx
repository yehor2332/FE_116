import {Link} from 'react-router-dom';
import defaultImg from './img/facebook.png';

function NavWithImg(props) {
  const listItems = props.links.map((item, index) => {
    let img;
    if (item.img) {
      img = <img src={item.img} alt={item.link}/>;
    }
    return (
        <li key={index}>
          <Link to={item.path}>
            {img}
            <span>{item.link}</span>
          </Link>
        </li>
    )
  });

  return (
      <nav className={props.class ? props.class : 'default'}>
        <ul>{listItems}</ul>
      </nav>
  );
}

NavWithImg.defaultProps = {
  class: 'nav',
  links: [
    {
      link: "Link",
      path: "/",
      img: defaultImg
    },
    {
      link: "Link",
      path: "/",
      img: defaultImg
    },
  ]
}

export default NavWithImg;