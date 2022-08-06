import React from 'react'
import { Stack,Box, Heading,Text,useColorModeValue } from '@chakra-ui/react'
const InfoCard = (props) => {
  return (
    <Stack align={'center'} padding='2'>
        <Heading bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip="text">
            {props.number}+
        </Heading>
        <Box fontSize={18} letterSpacing='wider'>
           <Text color={useColorModeValue('gray.600','gray.400')}> {props.name} </Text>
        </Box>
    </Stack>
  )
}

export default InfoCard