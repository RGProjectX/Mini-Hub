import React from 'react'
import {Box,Input,InputGroup,InputRightElement} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
const ViewAll = () => {
  return (
    <Box m='20'>
      <InputGroup>
      <Input placeholder='Enter project name' />
      <InputRightElement children={<SearchIcon color='green.500' />} />
      </InputGroup>

    </Box>
  )
}

export default ViewAll