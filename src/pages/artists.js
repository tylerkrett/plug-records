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

const SecondPage = props => (
  <Layout location={props.location}>
    <div id="bgtwo">
      <h1>Headliners</h1>
      <div>
        <img src={youngThug} alt="young-thug" />
        <img src={gunna} alt="gunna" />
      </div>
      <h1>Artists</h1>
      <div>
        <img src={yxngBane} alt="fredo" />
        <img src={fredo} alt="fredo" />
        <img src={dblock} alt="dblock" />
        <img src={mHuncho} alt="mhuncho" />
        <img src={charlie} alt="charlie" />
        <img src={amsniper} alt="amsniper" />
      </div>
      <Link className="button-link" to="/">
        Go back to the homepage
      </Link>
    </div>
  </Layout>
)

export default SecondPage
