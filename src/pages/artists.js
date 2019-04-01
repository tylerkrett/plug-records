import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import yxngBane from '../images/yxngbane2.jpg'
import mHuncho from '../images/mhuncho5.jpg'
import gunna from '../images/gunna5.jpg'
import charlie from '../images/charliesloth5.jpg'
import youngThug from '../images/youngthug2.jpg'
import fredo from '../images/FREDO2.jpg'
import dblock from '../images/DBLOCKEU2.jpg'
import amsniper from '../images/AMSNIPER2.jpg'

const SecondPage = () => (
  <div id="bgtwo">
    <h1>Artists Phase One:</h1>
    <div>
      <img src={gunna} alt="fredo" />
      <img src={yxngBane} alt="fredo" />
      <img src={mHuncho} alt="fredo" />
      <img src={charlie} alt="fredo" />
    </div>
    <h1>Artists Phase Two:</h1>
    <div>
      <img src={youngThug} alt="fredo" />
      <img src={fredo} alt="fredo" />
      <img src={dblock} alt="fredo" />
      <img src={amsniper} alt="fredo" />
    </div>
    <Link className="button-link" to="/">
      Go back to the homepage
    </Link>
  </div>
)

export default SecondPage
