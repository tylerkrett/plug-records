import React from 'react'
import PropTypes from 'prop-types'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon" />
    </div>
    <div className="content">
      <div className="inner">
        <h1>BREAKING BOUNDARIES</h1>

        <p>
          Artists from all around the world will be playing on one stage. The
          audience will see taste-makers from all cultures and backgrounds. The
          Plug Festival will be a pioneer in the new hybrid music festival
          culture.
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <a href="/artists">Artists</a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('presenters')
            }}
          >
            Presenters
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('festival')
            }}
          >
            Festival
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('map')
            }}
          >
            Map
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('info')
            }}
          >
            Info
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('networking')
            }}
          >
            Networking
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('partners')
            }}
          >
            Partners
          </a>
        </li>

        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('sponsorship')
            }}
          >
            Sponsorship
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
