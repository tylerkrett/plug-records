import styled, { css } from 'styled-components'
import { Link as LinkElement } from 'gatsby'
export const Image = styled.section`
  width: 400px;
  height: 400px;
  cursor: pointer;
  margin-bottom: 20px;
  background: ${({ img }) => `url('${img}') center center no-repeat / contain`};
  padding: ${({ p }) => p};
  margin: ${({ m }) => m};
  &:hover {
    > iframe {
      opacity: 1;
      visibility: visible;
    }
  }
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`

export const Iframe = styled.iframe`
  transition: all 0.3s;
  visibility: hidden;
  opacity: 0;
  width: 100%;
  height: 100%;
`

export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 300px;
  > iframe {
    height: 300px;
  }
`
export const Flex = styled.section`
  display: flex;
  flex-flow: ${({ flexFlow }) => flexFlow};
  flex-wrap: ${({ flexWrap }) => flexWrap};
  padding: ${({ p }) => p};
  margin: ${({ m }) => m};
  position: ${({ position }) => position};
  top: ${({ top }) => top};
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};
  flex: ${({ flex }) => flex};
  flex-direction: ${({ flexDirection }) => flexDirection};
  background: ${({ background }) => background};
`

export const Icon = styled.a`
  display: inline-block;
  text-decoration: none;
  border-bottom: none;
  padding: ${({ p }) => p};
  width: ${({ width }) => width};
  margin: ${({ m }) => m};
  cursor: ${({ cursor }) => cursor};
  height: ${({ height }) => height};
  background: ${({ src, background }) =>
    background || `url(${src}) no-repeat 50%/ cover`};
`

export const Link = styled(LinkElement)`
  text-decoration: none;
  border-bottom: none;
`

export const ButtonLink = styled(LinkElement)`
  bottom: 10px;
  left: 20px;
  background: white;
  color: black;
  padding: 10px 15px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`

export const Underline = styled.span`
  display: block;
  background: linear-gradient(to right, #f6ed14, transparent);
  height: 2px;
  width: 100%;
`

export const H1 = styled.h1(
  ({ p = 0, m = 0, fontSize }) => css`
    padding: ${({ p }) => p};
    margin: ${({ m }) => m};
    font-size: ${({ fontSize }) => fontSize};
    margin-bottom: 2px;
  `
)

export const Video = styled.video(
  ({ width, height, p }) => css`
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    padding: ${({ p }) => p};
  `
)

export const CarouselWrapper = styled.div(
  ({ width, height, p }) => css`
    margin-bottom: 40px;
    > div > button {
      border-top: none !important;
      border-bottom: none !important;
      border-left: none !important;
      box-shadow: none;
      border-right: none !important;
    }
  `
)
