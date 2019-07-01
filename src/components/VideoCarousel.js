import React from 'react'
import Slider from "react-slick";
import { Helmet } from "react-helmet"
import VideoAdvert from '../components/VideoAdvert';
import MediaQuery from 'react-responsive';


import '../assets/scss/main.scss';
import videoOne from '../assets/videos/videoOne.mp4';
import videoTwo from '../assets/videos/videoTwo.mp4';
import videoThree from '../assets/videos/videoThree.mp4';
import videoFour from '../assets/videos/videoFour.mp4';

import {CarouselWrapper} from './styles';

const VideoCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    autoplay: true,
    pauseOnHover: true
  };
  return(
<CarouselWrapper>
       <Helmet>
          <meta charSet="utf-8" />
          <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        </Helmet>
        <MediaQuery minWidth={1000}>
                    {matches => {
                        return matches ? (
                            <Slider key={matches}{...settings}>
                            <div>
                             <VideoAdvert p="20px" src={videoOne} />
                            </div>
                            <div>
                            <VideoAdvert  p="20px"  src={videoTwo} />
                            </div>
                            <div>
                            <VideoAdvert  p="20px"  src={videoThree} />
                            </div>
                            <div>
                            <VideoAdvert  p="20px"  src={videoFour} />
                            </div>
                            </Slider>
                        ) : (
                            <Slider key={matches} {...settings  } slidesToShow={1}
                            slidesToScrol={1} >
                            <div>
                             <VideoAdvert p="20px" src={videoOne} />
                            </div>
                            <div>
                            <VideoAdvert  p="20px"  src={videoTwo} />
                            </div>
                            <div>
                            <VideoAdvert  p="20px"  src={videoThree} />
                            </div>
                            <div>
                            <VideoAdvert  p="20px"  src={videoFour} />
                            </div>
                            </Slider>
                 
                        );
                    }}
                </MediaQuery>

</CarouselWrapper>
)}







export default VideoCarousel
