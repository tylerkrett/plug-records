import React from 'react'
import {Underline, Flex, H1} from './styles';


const Heading = ({text, p = '30px', justifyContent="center", fontSize}) => (
  <Flex alignItems="center" p={p} justifyContent={justifyContent} >
  <div>
  <H1 fontSize={fontSize}>{text}</H1>
        <Underline />
      </div>
  
  </Flex>
)

export default Heading
