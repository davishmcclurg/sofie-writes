import { Link } from 'react-router'

import page from 'styles/page.css'

export default (heading, Component) => (props) => (
  <div className={page.pageContainer}>
    <div className={page.headingContainer}>
      <h1 className={page.heading}>{heading}</h1>
      <Link to="/">&laquo; Home</Link>
    </div>
    <div className={page.contentContainer}>
      <Component {...props} />
    </div>
  </div>
)
