// rotating photos

/* eslint-disable jsx-a11y/img-redundant-alt */

import { connect } from 'react-redux'

import styles from 'styles/index.css'
import defaultImage from 'images/rotating-photos.png'

const Index = (props) => {
  const img = <img src={props.currentImage} alt="rotating photos" />
  let container = img
  if (props.currentImage !== defaultImage) {
    container = (
      <div className={styles.nonDefaultImageContainer}>{img}</div>
    )
  }
  return <div className={styles.index}>{container}</div>
}

export default connect(
  (state) => ({ currentImage: state.rotatingPhotos.get('currentImage') })
)(Index)
