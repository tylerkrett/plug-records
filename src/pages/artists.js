import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import yxngBane from '../images/yxngbane5.jpg'
import mHuncho from '../images/mhuncho5.jpg'
import gunna from '../images/gunna5.jpg'
import charlie from '../images/charliesloth5.jpg'


const SecondPage = () => (
  <div id="bgtwo">   
    <h1>Artists (Phase 1)</h1>
    <div>
   
     
  
      <img src={yxngBane} alt="fredo" />
      <img src={mHuncho}  alt="fredo" />
      <img src={gunna}  alt="fredo" />
      <img src={charlie}  alt="fredo" />

     
    </div>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default SecondPage
