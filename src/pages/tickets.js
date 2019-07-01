import React from 'react'
import { Link } from 'gatsby'
import Slider from "react-slick";

import Image from '../components/VideoHover'
import Heading from '../components/Heading';
import VideoCarousel from '../components/VideoCarousel';
import PageHeader from '../components/PageHeader';

import '../assets/scss/main.scss';
import videoOne from '../assets/videos/videoOne.mp4';

const Tickets = () => {

  return(
  <div id="tickets">

    <PageHeader />
    <Heading text="Tickets/Events" />
    <VideoCarousel />
  
    <Link className="button-link" to="/">
      Go back to the homepage
    </Link>
  </div>
)}







export default Tickets
