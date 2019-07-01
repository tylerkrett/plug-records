import React from 'react'
import { Link } from 'gatsby'

import Image from '../components/VideoHover'
import yxngBane from '../images/yxngbane2.jpg'
import mHuncho from '../images/mhuncho5.jpg'
import gunna from '../images/gunna5.jpg'
import charlie from '../images/charliesloth5.jpg'
import reaSremmurd from '../images/reareaSremmurd.png'
import dblock from '../images/DBLOCKEU2.jpg'
import kenny from '../images/kennyallstar2.jpg'
import nafe from '../images/NAFESMALLZ2.jpg'
import tion from '../images/tionwayne2.jpg'
import rask from '../images/RASKWAME2.jpg'
import amsniper from '../images/AMSNIPER2.jpg'


import '../assets/scss/main.scss'
import PageHeader from '../components/PageHeader';
import Heading from '../components/Heading';
const Artists = () => (
  <div id="artists">
    <PageHeader />
    <Heading text="Headliners" />
    <div>
      <Image
        img={reaSremmurd}
        alt="Rae"
        src="https://www.youtube.com/embed/95Rzsn-zjr0"
      />
      <Image
        img={gunna}
        alt="Gunna"
        src="https://www.youtube.com/embed/5z-KnXYj4oE"
      />
    </div>
    <Heading text="Artist" />
    <div>
      <Image
        img={yxngBane}
        alt="yxngBane"
        src="https://www.youtube.com/embed/J1UxLOR0W4w"
      />

      <Image
        img={tion}
        alt="tion"
        src="https://www.youtube.com/embed/o1TJE5b2Lys"
      />

      <Image
        img={dblock}
        alt="dblock"
        src="https://www.youtube.com/embed/hfN3Wf3xJ9g"
      />

      <Image
        img={nafe}
        alt="nafe"
        src="https://www.youtube.com/embed/5z-KnXYj4oE"
      />

      <Image
        img={mHuncho}
        alt="mHuncho"
        src="https://www.youtube.com/embed/5z-KnXYj4oE"
      />

      <Image
        img={rask}
        alt="rask"
        src="https://www.youtube.com/embed/hF_FQGWxqQE"
      />

      <Image
        img={amsniper}
        alt="amsniper"
        src="https://www.youtube.com/embed/oWFod_bgFyY"
      />

      <Image
        img={charlie}
        alt="charlie"
        src="https://www.youtube.com/embed/ZXclkZdBS4k"
      />

      <Image
        img={kenny}
        alt="kenny"
        src="https://www.youtube.com/embed/5z-KnXYj4oE"
      />
    </div>
    <Link className="button-link" to="/">
      Go back to the homepage
    </Link>
  </div>
)

export default Artists
