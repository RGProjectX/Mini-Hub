import { Center, Box,Stack,Image, Text, Flex, Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon, 
  HStack,
  Badge,
  IconButton,
  useColorModeValue} from '@chakra-ui/react'
import {AiOutlineHeart,AiOutlineCheck,AiOutlineCloudDownload, AiFillHeart} from 'react-icons/ai'
import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
const BrowseProject = () => {
  const [clicked, isClicked] = useState(true)

  let {projectID} = useParams()
  return (
    <Box mt={'10vh'}>
    <Center>
    <Stack display={'flex'} align={'center'} spacing={1.5}>
      <Image src={'https://via.placeholder.com/200/000000/FFFFFF/?text='+projectID} alt={'avatar'} boxSize={'200px'} borderRadius={'xl'} mt='2' />
    <Text fontSize={[16,18,22,24]} textDecoration='underline' fontWeight='bold' color={useColorModeValue('green','teal')}>{projectID}</Text>
    <Text fontSize={[14,16,20,22]} color='grey'>By Rohit</Text>
    <HStack>
      <Badge py={1}
                variant='outline' 
                colorScheme={useColorModeValue('green','teal')}
                fontWeight={'bold'}>Python</Badge>
      <Badge p='1' variant={'outline'}>ReactJS</Badge>
      <Badge p='1' variant={'outline'}>ChakraUI</Badge>
    </HStack>
    <HStack spacing='10'>
      <Box>
      <IconButton icon={clicked ? <AiOutlineHeart/>:<AiFillHeart/>} onClick={() => isClicked(!clicked)} w={8} h={8} size='xl' mt='2' color={clicked ? '':'red'}/>
      <Text textAlign={'center'}>12</Text>
      </Box>
      <Box>
      <IconButton icon={clicked ? <AiOutlineCloudDownload/> : <AiOutlineCheck/>} w={8} h={8} size='xl' mt='2'/>
      <Text textAlign={'center'}>12</Text>
      </Box>
    </HStack>
    </Stack>
    </Center>
    <Flex>
    <Box w={'100vw'} m={2}mt={5} p={2} borderRadius={12} >
      
      <Accordion allowToggle>

        <AccordionItem>
          <h2>
            <AccordionButton>
            <Box flex='1' textAlign='left'>
            Description
            </Box>
            <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} color='grey' >
            An online portal for sharing and viewing projects made by students of various colleges and universities across the country and the world.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
            <Box flex='1' textAlign='left'>
            Requirements
            </Box>
            <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} color='grey' >
            Python, React, Chakra UI
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
            <Box flex='1' textAlign='left'>
            <Text>How To Use</Text>
            </Box>
            <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} color='grey' >
            Download and unzip project files. Open terminal in the project directory and run npm install to install all the dependencies. Then run npm run dev to start the development server.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
    </Flex>
    </Box>
  )
}

export default BrowseProject
