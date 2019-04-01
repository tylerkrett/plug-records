import React from 'react'
import PropTypes from 'prop-types'

const window = window || {}

window.fnames = new Array()
window.ftypes = new Array()
window.fnames[0] = 'EMAIL'
window.ftypes[0] = 'email'
window.fnames[1] = 'FNAME'
window.ftypes[1] = 'text'
window.fnames[2] = 'LNAME'
window.ftypes[2] = 'text'
window.fnames[3] = 'ADDRESS'
window.ftypes[3] = 'address'
window.fnames[4] = 'PHONE'
window.ftypes[4] = 'phone'
window.fnames[5] = 'BIRTHDAY'
window.ftypes[5] = 'birthday'

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
        <div id="mc_embed_signup">
          <form
            action="https://plugnationfestival.us20.list-manage.com/subscribe/post?u=8564c716dccc4c6cb3180916d&amp;id=8fdd7777fd"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="validate"
            target="_blank"
            novalidate
          >
            <div id="mc_embed_signup_scroll">
              <h3>Subscribe to our mailing list</h3>

              <div className="mc-field-group">
                <label for="mce-EMAIL">
                  Email Address <span className="asterisk">*</span>
                </label>
                <div className="flex">
                  <input
                    type="email"
                    name="EMAIL"
                    className="required email"
                    id="mce-EMAIL"
                  />
                  <input
                    type="submit"
                    value="Subscribe"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    className="button"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
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
              props.onOpenArticle('tickets')
            }}
          >
            Tickets
          </a>
        </li>
        <li>
          <a href="/travel">Travel</a>
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
      </ul>
    </nav>
    <nav>
      <ul>
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
