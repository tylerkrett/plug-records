import React from 'react'
import { Link } from 'gatsby'

import Image from '../components/VideoHover'
import yxngBane from '../images/yxngbane2.jpg'
import mHuncho from '../images/mhuncho5.jpg'
import gunna from '../images/gunna5.jpg'
import charlie from '../images/charliesloth5.jpg'
import youngThug from '../images/youngthug2.jpg'
import fredo from '../images/FREDO2.jpg'
import dblock from '../images/DBLOCKEU2.jpg'
import amsniper from '../images/AMSNIPER2.jpg'

import '../assets/scss/main.scss'

const Artists = () => (
  <div id="artists">
    <h1>Headliners</h1>
    <div>
      <Image
        img={youngThug}
        alt="young-thug"
        src="https://www.youtube.com/embed/yCPCqbwfe58"
      />
      <Image
        img={gunna}
        alt="Gunna"
        src="https://www.youtube.com/embed/5z-KnXYj4oE"
      />
    </div>
    <h1>Artists</h1>
    <div>
      <Image
        img={yxngBane}
        alt="yxngBane"
        src="https://www.youtube.com/embed/J1UxLOR0W4w"
      />
      <Image
        img={fredo}
        alt="fredo"
        src="https://www.youtube.com/embed/v2MpgUK80u4"
      />
      <Image
        img={dblock}
        alt="dblock"
        src="https://www.youtube.com/embed/hfN3Wf3xJ9g"
      />
      <Image
        img={mHuncho}
        alt="mHuncho"
        src="https://www.youtube.com/embed/5z-KnXYj4oE"
      />

      <Image
        img={charlie}
        alt="charlie"
        src="https://www.youtube.com/embed/ZXclkZdBS4k"
      />

      <Image
        img={amsniper}
        alt="amsniper"
        src="https://www.youtube.com/embed/oWFod_bgFyY"
      />
    </div>
    <Link className="button-link" to="/">
      Go back to the homepage
    </Link>
  </div>
)

export default Artists
