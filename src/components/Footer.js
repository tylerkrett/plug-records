import React from 'react'
import PropTypes from 'prop-types'

const Footer = props => (
  <footer id="footer" style={props.timeout ? { display: 'none' } : {}}>
    <p className="copyright">
      &copy; The Plug{' '}
      <a href="mailto:tylerkrett@live.com?Subject=Need%20a%20website&Body=Dear%20Tyler%2C%0A%0AI%20require%20your%20web%20services">
        Built by Tyler Krett
      </a>
    </p>
  </footer>
)

Footer.propTypes = {
  timeout: PropTypes.bool,
}

export default Footer
