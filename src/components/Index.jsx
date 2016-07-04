// rotating photos

/* eslint-disable jsx-a11y/img-redundant-alt */

import { connect } from 'react-redux'
import page from 'components/page'

import styles from 'styles/index.css'
import defaultImage from 'images/rotating-photos.png'

let Index = (props) => {
  const img = <img src={props.currentImage} alt="rotating photos" />
  let container = img
  if (props.currentImage !== defaultImage) {
    container = (
      <div className={styles.nonDefaultImageContainer}>{img}</div>
    )
  }
  return <div className={styles.index}>{container}</div>
}

Index = page({
  heading: 'Sofie Writes',
  home: false,
  pageContainerClassName: styles.pageContainer,
}, Index)

export default connect(
  (state) => ({ currentImage: state.rotatingPhotos.get('currentImage') })
)(Index)
