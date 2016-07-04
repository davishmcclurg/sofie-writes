// rotating photos

/* eslint-disable jsx-a11y/img-redundant-alt */

import { connect } from 'react-redux'

import styles from 'styles/index.css'

const Index = (props) => (
  <div className={styles.index}>
    <img src={props.currentImage} alt="rotating photos" />
  </div>
)

export default connect(
  (state) => ({ currentImage: state.rotatingPhotos.get('currentImage') })
)(Index)
