import { Link } from 'react-router'

import styles from 'styles/menu.css'

export default (props) => (
  <ul className={styles.menu}>
    {props.items.map((item) => (
      <li className={`${styles.menuItem} ${item.id}`} key={item.id}>
        <Link to={item.path} activeClassName="active">
          <img src={item.image} title={item.text} alt={item.text} />
        </Link>
      </li>
    ))}
  </ul>
)
