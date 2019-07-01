import React, { Component } from 'react'
import PropTypes from 'prop-types'
import VideoCarousel from './VideoCarousel'
import Heading from './Heading'
class Header extends Component {
  componentDidMount() {
    window.fnames = []
    window.ftypes = []
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
  }
  render() {
    const { timeout, onOpenArticle } = this.props
    return (
      <header id="header" style={timeout ? { display: 'none' } : {}}>
        <div className="logo">
          <span className="icon" />
        </div>
        <div className="content">
          <div className="inner">
            <h1>BREAKING BOUNDARIES</h1>

            <p>
              Artists from all around the world will be playing on one stage.
              The audience will see taste-makers from all cultures and
              backgrounds. The Plug Festival will be a pioneer in the new hybrid
              music festival culture.
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
              <p
                onClick={() => {
                  onOpenArticle('presenters')
                }}
              >
                Presenters
              </p>
            </li>
            <li>
              <p
                onClick={() => {
                  onOpenArticle('festival')
                }}
              >
                Festival
              </p>
            </li>
            <li>
              <a href="/tickets">Tickets/Events</a>
            </li>
            <li>
              <a href="/travel">Travel</a>
            </li>
            {/* <li>
              <p
                onClick={() => {
                  onOpenArticle('map')
                }}
              >
                Map
              </p>
            </li> */}
          </ul>
        </nav>
        <nav>
          <ul>
            <li>
              <p
                onClick={() => {
                  onOpenArticle('info')
                }}
              >
                Info
              </p>
            </li>
            <li>
              <p
                onClick={() => {
                  onOpenArticle('networking')
                }}
              >
                Networking
              </p>
            </li>
            <li>
              <p
                onClick={() => {
                  onOpenArticle('partners')
                }}
              >
                Sponsors
              </p>
            </li>

            {/* <li>
              <p
                onClick={() => {
                  onOpenArticle('sponsorship')
                }}
              >
                Sponsorship
              </p>
            </li> */}
            <li>
              <p
                onClick={() => {
                  onOpenArticle('contact')
                }}
              >
                Contact
              </p>
            </li>
          </ul>
        </nav>
        <div className="content">
          <Heading fontSize="1.5em" text="Adverts" />
          <VideoCarousel />
        </div>
      </header>
    )
  }
}

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
