import React from 'react'
import { Video } from './styles'

const VideoAdvert = ({ src, width ="100%", height = "100%", controls = true, p }) => (
<Video width={width} height={height} p={p} controls={controls}>
  <source src={src} type="video/mp4" />
</Video>
)

export default VideoAdvert
