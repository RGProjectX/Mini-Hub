import { Center, Box,Stack,Image, Text, Flex, Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon, 
  HStack,
  Badge,
  useColorModeValue,
  Button,
  useToast,
  Tooltip
} from '@chakra-ui/react';
import {AiOutlineHeart,AiOutlineCheck,AiOutlineCloudDownload, AiFillHeart} from 'react-icons/ai'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios';
const BrowseProject = () => {
  const [project, setProject] = useState({
    name: '',
    email: '',
    description: '',
    languages: [],
    url: '',
  })

  const [dev, setDev] = useState({
    firstName: '',
    lastName: '',
    email: '',
    college: '',
  })



  let {projectID} = useParams()
  const toast = useToast()
  // urldecode projectID
  projectID = decodeURIComponent(projectID)
  useEffect(() => {
    axios.get(`http://localhost:8000/project/${projectID}`)
      .then(res => {
        setProject(res.data)
        console.log(res.data)
        axios.get(`http://localhost:8000/user/${res.data.email}`)
          .then(res => {
            setDev(res.data)
            console.log('dev', res.data)
          }
          )
          .catch(err => {
            toast({
              title: 'Error occurred in fetching developer details',
              description: 'Please try again later.',
              status: 'error',
              duration: 5000,
              isClosable: true,
            });
          }
          )
      })
      .catch(err => {
        toast({
          title: 'Error Occurred',
          description: 'Please try again later.',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      })
  }, [])


  return (<>
    <Box mt={'10vh'}>
    <Center>
    <Stack display={'flex'} align={'center'} spacing={1.5}>
      <Image src={'https://via.placeholder.com/200/000000/FFFFFF/?text='+projectID} alt={'avatar'} boxSize={'200px'} borderRadius={'xl'} mt='2' />
    <Text fontSize={[16,18,22,24]} textDecoration='underline' fontWeight='bold' color={useColorModeValue('green.500','teal.200')}>{projectID}</Text>
    <Tooltip hasArrow placement='right' label={dev.college}>
    <Text fontSize={[12,14,16,18]} color={useColorModeValue('blackAlpha.800','whiteAlpha.800')}>By <Button variant='link' colorScheme={useColorModeValue('green','teal')} fontWeight='bold' onClick={()=>{
      // open email
      window.open(`mailto:${dev.email}`)
    }}>{dev.firstName} {dev.lastName}</Button></Text>
    </Tooltip>
    <HStack>
      {(project.languages).slice(0,3).map((lang)=><Badge key={lang} px={2}
                py={1}
                variant='outline' 
                colorScheme={useColorModeValue('green','teal')}
                fontWeight={'400'}>
            {lang}
          </Badge>)}
    </HStack>
    {/* <HStack spacing='10'>
      <Box>
      <IconButton icon={clicked ? <AiOutlineHeart/>:<AiFillHeart/>} onClick={() => isClicked(!clicked)} w={8} h={8} size='xl' mt='2' color={clicked ? '':'red'}/>
      <Text textAlign={'center'}>12</Text>
      </Box>
      <Box>
      <IconButton icon={clicked ? <AiOutlineCloudDownload/> : <AiOutlineCheck/>} w={8} h={8} size='xl' mt='2'/>
      <Text textAlign={'center'}>12</Text>
      </Box>
    </HStack> */}
    {/* download button */}


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
          {project.description} 
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <Center>
      <Button
      as="a"
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      colorScheme={useColorModeValue('green','teal')}
      variant="outline"
      size={['sm','md','lg','xl']}
      mt={4}
      p={2}
      leftIcon={<AiOutlineCloudDownload />}
    >
      Download
    </Button>
    </Center>
    </Box>
    </Flex>
    </Box>

  </>
  )
}

export default BrowseProject

