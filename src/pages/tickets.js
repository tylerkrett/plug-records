import React, { useEffect } from 'react'
import { Link } from 'gatsby'

import Heading from '../components/Heading'
import VideoCarousel from '../components/VideoCarousel'
import PageHeader from '../components/PageHeader'

import '../assets/scss/main.scss'

import leafletPic from '../images/plugnationleaflet-4flyer2.jpg'
import leafletPic2 from '../images/plugnation-afterparty-FRONT.jpg'
import leafletPic3 from '../images/plugnation-afterpartyinsta2.jpg'
import leafletPic4 from '../images/plugnation-preparty-FRONT2.jpg'

import { Container, Icon, Flex, TicketsWrapper } from '../components/styles'

const Tickets = () => {
  useEffect(() => {
    var po = document.createElement('script')
    po.type = 'text/javascript'
    po.async = true
    po.src =
      'https://www.skiddle.com/infofeed/ticketpage.php?ilid=13490591;type=embedded'
    var s = document.getElementsByTagName('script')[0]
    s.parentNode.insertBefore(po, s)

    var lo = document.createElement('script')
    lo.type = 'text/javascript'
    lo.async = true
    lo.src =
      'https://www.skiddle.com/infofeed/ticketpage.php?ilid=13532918;type=embedded'
    var s = document.getElementsByTagName('script')[0]
    s.parentNode.insertBefore(lo, s)

    var co = document.createElement('script')
    co.type = 'text/javascript'
    co.async = true
    co.src =
      'https://www.skiddle.com/infofeed/ticketpage.php?ilid=13555961;type=embedded'
    var s = document.getElementsByTagName('script')[0]
    s.parentNode.insertBefore(co, s)

    var ho = document.createElement('script')
    ho.type = 'text/javascript'
    ho.async = true
    ho.src =
      'https://www.skiddle.com/infofeed/ticketpage.php?ilid=13565543;type=embedded'
    var s = document.getElementsByTagName('script')[0]
    s.parentNode.insertBefore(ho, s)
  })
  return (
    <div id="tickets">
      <PageHeader />
      <Heading text="Tickets / Events" />

      <TicketsWrapper p="50px" flexDirection="column">
        <h2>Come & Party at Europe's biggest day party</h2>

        <p>
          PE'S BIGGEST DAY PARTY! Set in the mediterranean on the idyllic island
          of Cyprus, you can expect a lot of sun, sea & stunning views with the
          best live acts performing across 3 days in the capital party town -
          AYIA NAPA! The main festival event is set across one day, on one stage
          with never-ending music - there will also be exclusive pre-parties,
          pool parties & after parties which can be added onto your schedule,
          running from 07.07.19-10.07.19 to cater for all of the real party
          people...
        </p>
        <p>
          Festival-goers can enjoy food from their favourite vendors including
          Pizza Hut & KFC, there will be many bar stalls around the venue to
          supply drinks & beverages from your favourite brands & LIVE music from
          all of your favourite artists flying in from across the globe to
          perform exclusively at this event! This new hybrid concept allows all
          fans to enjoy the day & night in intimate settings with all their
          favorite artists in a unique festival style outdoor event, to be
          hosted on the sunny island of Cyprus combining both arts & culture!
        </p>
        <p>
          THERE WILL BE MEET & GREET OPPORTUNITIES AS WELL AS EXCLUSIVE VIP
          TABLES AND VIP AFTER PARTY SHOWS - LIMITED AVAILABILITY! Pre-Parties &
          After Parties commence from Sunday 7th July - Tues 9th July and expand
          across 4 venues - ClubIce, Club Black&White, Shuffle & Pambos Napa
          Rocks Hotel!
        </p>
        <Flex alignItems="center" justifyContent="space-evenly" flexWrap="wrap">
          <Icon
            m="5px"
            background={`url(${leafletPic}) no-repeat 50%  / contain`}
            height="400px"
            width="300px"
          />
          <Icon
            m="5px"
            background={`url(${leafletPic2}) no-repeat 50%  / contain`}
            height="400px"
            width="300px"
          />
          <Icon
            m="5px"
            background={`url(${leafletPic3}) no-repeat 50%  / contain`}
            height="400px"
            width="300px"
          />

          <Icon
            m="5px"
            background={`url(${leafletPic4}) no-repeat 50%  / contain`}
            height="400px"
            width="300px"
          />
        </Flex>
        <Heading fontSize="2em" text="The Dock" />
        <Flex height="500px">
          <Container id="ticketbox_ph_13490591">
            <p>
              To buy tickets for this event please visit our events page:{' '}
              <a href="https://www.skiddle.com/whats-on/cyprus/The-Dock/Plug-Nation-Festival/13490591/">
                <strong>Plug Nation Festival tickets from Skiddle</strong>
              </a>
              .
            </p>
          </Container>
        </Flex>

        <Heading fontSize="2em" text="Sunday 7 July ROGER SANCHEZ at CLUBICE" />
        <Flex>
          <Container id="ticketbox_ph_13532918">
            <p>
              To buy tickets for this event please visit our events page:{' '}
              <a href="https://www.skiddle.com/festivals/plug-nation-festival/">
                <strong>
                  Future Movements & Plug Nation Presents ROGER SANCHEZ tickets
                  from Skiddle
                </strong>
              </a>
              .
            </p>
          </Container>
        </Flex>
        <Heading
          fontSize="2em"
          text=" Monday 8 July KENNY ALLSTAR & D BLOCK EUROPE at CLUBICE"
        />
        <Flex>
          <Container id="ticketbox_ph_13555961">
            <p>
              To buy tickets for this event please visit our events page:{' '}
              <a href="https://www.skiddle.com/festivals/plug-nation-festival/">
                <strong>
                  Plug Nation Fest Pre-Party with Kenny Allstar & D BLOCK EUROPE
                  tickets from Skiddle
                </strong>
              </a>
              .
            </p>
          </Container>
        </Flex>

        <Heading
          fontSize="2em"
          text=" Sunday 14 July MARCO BAILEY at CLUBICE"
        />

        <Flex>
          <Container id="ticketbox_ph_13565543">
            <p>
              To buy tickets for this event please visit our events page:{' '}
              <a href="https://www.skiddle.com/whats-on/cyprus/CLUB-ICE/Future-Movements-presents-MARCO-BAILEY---Techno-Sessions/13565543/">
                <strong>
                  Future Movements presents MARCO BAILEY - Techno Sessions
                  tickets from Skiddle
                </strong>
              </a>
              .
            </p>
          </Container>
        </Flex>
        <Heading
          fontSize="2em"
          text="  Tuesday 9 July PLUG NATION OFFICIAL AFTER-PARTY - 1 Ticket -3 Venues:
          Club Black & White with CHARLIE SLOTH shuffle club with CARNAO BEATS
          Igloo Rooftop with GEORGE FINGAS"
        />
        <Flex>
          <Container id="ticketbox_ph_13552124">
            <p>
              To buy tickets for this event please visit our events page:{' '}
              <a href="https://www.skiddle.com/festivals/plug-nation-festival/">
                <strong>
                  Plug Nation Festival Official After Party tickets from Skiddle
                </strong>
              </a>
              .
            </p>
          </Container>
        </Flex>
        <VideoCarousel />
      </TicketsWrapper>

      <Link className="button-link" to="/">
        Go back to the homepage
      </Link>
    </div>
  )
}

export default Tickets
