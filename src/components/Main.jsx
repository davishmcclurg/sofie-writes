import { connect } from 'react-redux'
import Menu from 'components/Menu'

import 'normalize.css'
import styles from 'styles/main.css'

const MenuContainer = connect(
  (state) => ({ items: state.menu })
)(Menu)

export default (props) => (
  <div className={styles.main}>
    <MenuContainer />
    {props.children}
  </div>
)
