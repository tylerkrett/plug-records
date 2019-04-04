import React, { Component } from 'react'
import { Link } from 'gatsby'

import '../assets/scss/main.scss'

class ThirdPage extends Component {
  componentDidMount() {
    this.initialLoad(
      window.document,
      'script',
      '//aff.bstatic.com/static/affiliate_base/js/flexiproduct.js'
    )
  }

  initialLoad = (d, sc, u) => {
    var s = d.createElement(sc),
      p = d.getElementsByTagName(sc)[0]
    s.type = 'text/javascript'
    s.src = u + '?v=' + +new Date()
    return p.parentNode.insertBefore(s, p)
  }

  render() {
    return (
      <div id="travel">
        <h1>Travel</h1>

        <p>
          No need to strees, we have a number of Travel partners we are working
          with to get you on time to our festival! Check out the links below and
          book direct..
        </p>

        <img
          src="http://www.lduhtrp.net/5l115p59y31NXOQSQPPNPQPXTPUS"
          width="1"
          height="1"
          border="0"
        />

        <main>
          <div className="booking-map">
            <div className="center">
              <ins
                className="bookingaff"
                data-aid="1738565"
                data-target_aid="1738565"
                data-prod="banner"
                data-width="100%"
                data-height="60"
                data-banner_id="82280"
                data-lang="en"
              >
                <a href="//www.booking.com?aid=1738565">Booking.com</a>
              </ins>
            </div>
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
          </div>

          <div className="booking-banner">
            <ins
              class="bookingaff"
              data-aid="1737049"
              data-target_aid="1737049"
              data-prod="dfl2"
              data-width="100%"
              data-height="auto"
              data-lang="en"
              data-currency="GBP"
              data-dest_id="-2738120"
              data-dest_type="city"
              data-df_checkin="7"
              data-df_duration="3"
              data-df_num_properties="5"
            >
              <a href="//www.booking.com?aid=1737049">Booking.com</a>
            </ins>
          </div>
          <div className="center">
            <div className="aroma">
              <a
                className="logo"
                href="https://www.jdoqocy.com/fj104zw41w3JTKMOMLLJLMSMOTPP"
                target="_top"
              >
                <img
                  src="https://www.ftjcfx.com/j7115nswkqo9JACECBB9BCICEJFF"
                  alt="logoaroma"
                  border="0"
                />
              </a>
              <a
                className="discount"
                href="https://www.jdoqocy.com/pk97shqnhp4E57976646886C8C8"
                target="_top"
              >
                <span>Receive 5% off</span>
                <span>code: AMOMA5OFF </span>
              </a>{' '}
              <img
                src="https://www.ftjcfx.com/ej116z15u-yJTKMOMLLJLNNLRNRN"
                alt="placeholder"
                width="1"
                height="1"
                border="0"
              />
            </div>
            <section className="banners-flex">
              <a
                href="http://www.tkqlhce.com/m3117dlurlt8I9BDBAA8AACFCHBD"
                target="_blank"
              >
                <img
                  src="http://www.awltovhc.com/fb106jy1qwuFPGIKIHHFHHJMJOIK"
                  alt="BookingBuddy"
                  border="0"
                />
                <p>Get great deals on flights</p>
              </a>
            </section>
          </div>
        </main>
        <Link className="button-link" to="/">
          Go back to the homepage
        </Link>
      </div>
    )
  }
}

export default ThirdPage
