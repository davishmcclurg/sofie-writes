import page from 'styles/page.css'

export default (heading, Component) => (props) => (
  <div className={page.container}>
    <h1 className={page.heading}>{heading}</h1>
    <div className={page.content}>
      <Component {...props} />
    </div>
  </div>
)
