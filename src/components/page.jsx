import { Link } from 'react-router'

import page from 'styles/page.css'

export default ({
  heading,
  home = true,
  pageContainerClassName = page.pageContainer,
  headingContainerClassName = page.headingContainer,
}, Component) => (props) => (
  <div className={pageContainerClassName}>
    <div className={headingContainerClassName}>
      <h1 className={page.heading}>{heading}</h1>
      {home ? <Link to="/">&laquo; Home</Link> : null}
    </div>
    <div className={page.contentContainer}>
      <Component {...props} />
    </div>
  </div>
)
