import React from 'react'
import {Avatar,Box,HStack,Text, Flex, Badge,useColorModeValue} from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
const ViewCard = (props) => {
  return (
    <NavLink to={'/browse/'+props.name}>
    <Box p='4' m='2' border='1px' borderRadius='xl' borderColor={useColorModeValue('gray.300','whiteAlpha.400')}>
      <HStack>
        <Avatar  size='md' mr='2' src={'https://avatars.dicebear.com/api/adventurer/oh.svg'}></Avatar>
        <Flex direction='column'>
          <Text fontSize={['16','18','22','24']} fontWeight='bold' color={useColorModeValue('green.500','teal.200')} >{props.name}</Text>
          <Text fontSize={['12','14','16','16']} color='gray.400' fontWeight='light'>{props.author}</Text>
          <Text fontSize={['14','16','17','17']} fontWeight='medium' noOfLines='2'>{props.description}</Text>
          <HStack mt='2'>
            {(props.language).slice(0,3).map((lang)=><Badge key={lang} px={2}
                py={1}
                variant='outline' 
                colorScheme={useColorModeValue('green','teal')}
                fontWeight={'400'}>
            {lang}
          </Badge>)}
          </HStack>
        </Flex >
      </HStack>
    </Box>
    </NavLink>
  )
}

export default ViewCard