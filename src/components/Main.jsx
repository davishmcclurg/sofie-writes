import { connect } from 'react-redux'
import { Link } from 'react-router'
import Menu from 'components/menu'

import 'normalize.css'
import styles from 'styles/main.css'

const MenuContainer = connect(
  (state) => ({ items: state.menu.toJS() })
)(Menu)

export default (props) => {
  return (
    <div className={styles.main}>
      <MenuContainer />
      {props.children}
    </div>
  )
}
