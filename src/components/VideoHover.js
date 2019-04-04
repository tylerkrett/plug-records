import React from 'react'
import { Image, Iframe } from './styles'

const Artists = ({ img, src }) => (
  <Image img={img}>
    <Iframe
      src={src}
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
  </Image>
)

export default Artists
