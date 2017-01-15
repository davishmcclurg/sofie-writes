import styles from 'styles/media.css'

const mediaElement = (props) => {
  const url = props.fields.file.url
  const fallback = <a href={url}>{props.fields.title}</a>
  switch (props.fields.file.contentType.split('/')[0]) {
    case 'image':
      return <img src={url} alt={props.fields.title} />
    case 'audio':
      return <audio src={url} preload="metadata" controls>{fallback}</audio>
    case 'video':
      return <video src={url} controls>{fallback}</video>
    default:
      return fallback
  }
}

export default (props) => (
  <div>
    <div className={styles.assetContainer}>
      {mediaElement(props)}
    </div>
  </div>
)
