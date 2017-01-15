export default (props) => {
  const url = props.fields.file.url
  const fallback = <a key={props.sys.id} href={url}>{props.fields.title}</a>
  switch (props.fields.file.contentType.split('/')[0]) {
    case 'image':
      return <img key={props.sys.id} src={url} alt={props.fields.title} />
    case 'audio':
      return <audio key={props.sys.id} src={url} preload="metadata" controls>{fallback}</audio>
    case 'video':
      return <video key={props.sys.id} src={url} controls>{fallback}</video>
    default:
      return fallback
  }
}
