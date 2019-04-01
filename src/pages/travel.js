import React, { Component } from 'react'
import { Link } from 'gatsby'
class SecondPage extends Component {
  componentDidMount() {
    this.initialLoad(
      window.document,
      'script',
      '//aff.bstatic.com/static/affiliate_base/js/flexiproduct.js'
    )
  }

  initialLoad(d, sc, u) {
    var s = d.createElement(sc),
      p = d.getElementsByTagName(sc)[0]
    s.type = 'text/javascript'
    s.async = true
    s.src = u + '?v=' + +new Date()
    p.parentNode.insertBefore(s, p)
  }
  render() {
    return (
      <div id="travel">
        <section className="travel-header">
          <h1>Travel</h1>
          <div className="aroma">
            <a
              className="logo"
              href="http://www.jdoqocy.com/fj104zw41w3JTKMOMLLJLMSMOTPP"
              target="_top"
            >
              <img
                src="http://www.ftjcfx.com/j7115nswkqo9JACECBB9BCICEJFF"
                alt=""
                border="0"
              />
            </a>
            <a
              className="discount"
              href="http://www.jdoqocy.com/pk97shqnhp4E57976646886C8C8"
              target="_top"
            >
              <span>Receive 5% off</span>
              <span>code: AMOMA5OFF </span>
            </a>{' '}
            <img
              src="http://www.ftjcfx.com/ej116z15u-yJTKMOMLLJLNNLRNRN"
              width="1"
              height="1"
              border="0"
            />
          </div>
        </section>
        <main>
          <div className="booking-map">
            <ins
              className="bookingaff"
              data-aid="1737036"
              data-target_aid="1737036"
              data-prod="map"
              data-width="100%"
              data-height="590"
              data-lang="ualng"
              data-dest_id="0"
              data-dest_type="landmark"
              data-latitude="34.9922836"
              data-longitude="34.0140113"
              data-mwhsb="0"
            >
              <a href="//www.booking.com?aid=1737036">Booking.com</a>
            </ins>
          </div>

          <div className="booking-banner breathe">
            <ins
              className="bookingaff"
              data-aid="1738565"
              data-target_aid="1738565"
              data-prod="banner"
              data-width="468"
              data-height="60"
              data-banner_id="82280"
              data-lang="en"
            >
              <a href="//www.booking.com?aid=1738565">Booking.com</a>
            </ins>
          </div>
          <div className="booking-banner">
            <p>Alion hotel:</p>
            <ins
              className="bookingaff"
              data-aid="1739517"
              data-target_aid="1739517"
              data-prod="rw"
              data-width="0"
              data-height="0"
              data-lang="en"
              data-show_rw_logo="1"
              data-show_rw_badge="1"
              data-show_rw_text="1"
              data-show_rw_border="1"
              data-right_align_rw="1"
            >
              <a href="//www.booking.com?aid=1739517">Booking.com</a>
            </ins>
          </div>
          <div className="booking-banner">
            <p>Grecian Bay Hotel:</p>
            <ins
              className="bookingaff"
              data-aid="1742427"
              data-target_aid="1742427"
              data-prod="rw"
              data-width="0"
              data-height="0"
              data-lang="en"
              data-show_rw_logo="1"
              data-show_rw_badge="1"
              data-show_rw_text="1"
              data-show_rw_border="1"
              data-right_align_rw="1"
              data-hid="17174"
            >
              <a href="//www.booking.com?aid=1742427">Booking.com</a>
            </ins>
          </div>
          <div className="booking-banner">
            <p>Amethyst Napa Hotel & Spa:</p>
            <ins
              className="bookingaff"
              data-aid="1742420"
              data-target_aid="1742420"
              data-prod="rw"
              data-width="0"
              data-height="0"
              data-lang="en"
              data-show_rw_logo="1"
              data-show_rw_badge="1"
              data-show_rw_text="1"
              data-show_rw_border="1"
              data-right_align_rw="1"
              data-hid="2642963"
            >
              <a href="//www.booking.com?aid=1742420">Booking.com</a>
            </ins>
          </div>
          <div className="booking-banner">
            <p>Olympic Lagoon resort:</p>
            <ins
              className="bookingaff"
              data-aid="1742429"
              data-target_aid="1742429"
              data-prod="rw"
              data-width="0"
              data-height="0"
              data-lang="en"
              data-show_rw_logo="1"
              data-show_rw_badge="1"
              data-show_rw_text="1"
              data-show_rw_border="1"
              data-right_align_rw="1"
              data-hid="718186"
            >
              <a href="//www.booking.com?aid=1742429">Booking.com</a>
            </ins>
          </div>
        </main>
        <Link className="button-link" to="/">
          Go back to the homepage
        </Link>
      </div>
    )
  }
}

export default SecondPage
