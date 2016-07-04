// video of girl laughing

import page from 'components/page'
import styles from 'styles/headshots.css'

const Headshots = () => (
  <div>
    <div className={styles.assetContainer}>
      <div className={styles.youtubeContainer}>
        <iframe
          frameBorder="0"
          allowFullScreen
          src="https://www.youtube-nocookie.com/embed/Z3xd8bXlzeU?rel=0&controls=0&loop=1&showinfo=0"
        />
      </div>
    </div>
    <div className={styles.lastAssetContainer}>
      <div className={styles.youtubeContainer}>
        <iframe
          frameBorder="0"
          allowFullScreen
          src="https://www.youtube-nocookie.com/embed/Vd79lZaozFg?rel=0&controls=0&loop=1&showinfo=0"
        />
      </div>
    </div>
  </div>
)

export default page({
  heading: 'Headshots',
  pageContainerClassName: styles.pageContainer,
}, Headshots)
