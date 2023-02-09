import React from 'react'
import { Stack,Box, Heading,Text,useColorModeValue } from '@chakra-ui/react'
const InfoCard = (props) => {
  return (
    <Stack align={'center'} padding='2'>
        <Heading color={useColorModeValue('green.400','teal.200')}>
            {props.number}+
        </Heading>
        <Box fontSize={18} letterSpacing='wider' fontWeight='medium'>
           <Text color={useColorModeValue('gray.600','gray.400')}> {props.name} </Text>
        </Box>
    </Stack>
  )
}

export default InfoCard