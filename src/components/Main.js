import React from 'react'
import PropTypes from 'prop-types'

import pic01 from '../images/thumbnail_fredo_image.jpg'
import pic02 from '../images/thumbnail_gunna.jpg'
import pic03 from '../images/thumbnail_maps.png'
import pic04 from '../images/thumbnail_computerScreen.jpg'
import pic05 from '../images/socialmedia.png'
import pic06 from '../images/sponsorlist.png'
import pic07 from '../images/thumbnail_SPONSORS.jpg'
class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      />
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="presenters"
          className={`${this.props.article === 'presenters' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">The Presenters</h2>
          <span className="image main">
            <img src={pic01} alt="fredo" />
          </span>
          <p>
            THE PLUG is a world wide brand which has grown immensely since
            venturing into the music industry putting together unique
            collaborations from artists all across the globe.
          </p>
          <p>
            After the huge success of the first track 'BROKEN HOMES' from the
            album 'PLUG TALK' Which has had over 15,000,000 streams in less then
            3 months on all music platforms, which has enabled us to gain full
            support from SPOT IFY, APPLE MUSIC, WARNER RECORDS, MIXTAPE MADNESS,
            GRMDAILY plus many more recognized brands .
          </p>
          <p>
            For this exclusive day event we will be teaming up with NAPA SOUNDS
            who have held thousands of events over their 7 venues ... THE DOCK,
            WATERWORLD WATER PARK, CLUB ICE, BLACK & WHITE, IGLOO BAR, CIRCUS
            SQUARE and CLUB SHUFFLE A guarantee to give us the best production
            marketing and venue in Cyprus.
          </p>
          <p>
            Together with our own fan base and their network & promotion team
            this projected event is set to be one of the biggest day festivals
            in Europe with all the hottest artists.
          </p>
          {close}
        </article>

        <article
          id="festival"
          className={`${this.props.article === 'festival' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">The Festival</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            THE PLUG'S music festival will BREAK BOUNDARIES with game changing
            experiences and activations.
          </p>
          <p>
            Artists from all around the world all playing on one stage. The
            audience will see taste-makers from all cultures and backgrounds.
          </p>
          <p>
            The Plug Festival will be a pioneer in the new hybrid music festival
            culture.
          </p>
          <p>
            Across 1-day, 1 stage and never ending music. Festival goers can
            enjoy food from their favourite food vendor, drinks from their
            favourite bar and listen to music from their favourite artists. The
            new hybrid concept allows people to see their favourite artists live
            in a unique festival setting with a combination of both arts and
            culture.
          </p>
          <p>This will be a one day event with 2 club after parties. </p>
          {close}
        </article>

        <article
          id="map"
          className={`${this.props.article === 'map' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Festival Map</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          {close}
        </article>

        <article
          id="info"
          className={`${this.props.article === 'info' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">The Event</h2>
          <span className="image main">
            <p>
              HOSTED BY: THE PLUG RECORDS EVENT: THE PLUG TALK ALBUM TOUR PLUG
            </p>
            <p>
              NATION DATE: 9TH JULY 2019 EXPECTED ATTENDEES: 5,000 - 7,000
              VENUE: THE DOCK, AGIA THEKLA RD AYIA NAPA, CYPRUS (A TT ACHED TO
              WA TERWORLD WATER PARK) TIMES: 5PM - MIDNIGHT PROJECTED LINE UP
            </p>
          </span>
          {close}
        </article>

        <article
          id="networking"
          className={`${this.props.article === 'networking' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Our Networking</h2>
          <span className="image main">
            <img src={pic04} alt="" />
            <img src={pic05} alt="" />
            <p>
              Our email campaigns are sent across multiple lists. We have B2B
              targeted email lists as well as direct to consumers. Our email
              campaigns are weekly with multiple advertising opportunities.
            </p>
          </span>
          {close}
        </article>

        <article
          id="partners"
          className={`${this.props.article === 'partners' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Potential Partners</h2>
          <span className="image main">
            <img src={pic07} alt="" />
          </span>
          {close}
        </article>

        <article
          id="sponsorship"
          className={`${this.props.article === 'sponsorship' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Sponsorship Levels</h2>
          <span className="image main">
            <img src={pic06} alt="" />
          </span>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <p>
            <a href="mailto:info@plugnationfestival.com">
              Info@plugnationfestival.com
            </a>
            <br />
            <a href="mailto:partners@plugnationfestival.com">
              Partners@plugnationfestival.com
            </a>
          </p>

          {/* <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4" />
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form> */}
          <ul className="icons">
            <li>
              <a href="#" className="icon fa-twitter">
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
