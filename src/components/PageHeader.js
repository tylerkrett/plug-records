import React from 'react'
import logoPlug from '../images/PLUGNATION_LOGO_wite.png'
import { Flex, Icon, Link, ButtonLink } from './styles'

const PageHeader = ({ buy = true }) => (
  <Flex
    position="sticky"
    top="-1px"
    background="rgba(255,255,255, 0.4)"
    justifyContent="space-between"
    alignItems="center"
    p="20px"
  >
    <Link to="/">
      <Icon cursor="pointer" width="135px" height="125px" src={logoPlug} />
    </Link>
    {buy ? <ButtonLink to="/tickets">Buy Tickets</ButtonLink> : <p />}
  </Flex>
)

export default PageHeader
