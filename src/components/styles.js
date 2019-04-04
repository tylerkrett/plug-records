import styled from 'styled-components'

export const Image = styled.section`
  width: 400px;
  height: 400px;
  cursor: pointer;
  margin-bottom: 20px;
  background: ${({ img }) => `url('${img}') center center no-repeat / contain`};
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
