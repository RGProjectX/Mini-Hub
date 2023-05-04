import React, { useState } from 'react';
import {
  Box,
  Button,
  Tag,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  Stack,
  useToast,
  Flex,
  TagCloseButton,
  TagLabel,
  Heading,
  useColorModeValue,
  Center

} from '@chakra-ui/react';
import axios from 'axios';


const UploadProject = () => {
  const init_email = localStorage.getItem('isAuthenticated') ? localStorage.getItem('email') : ''
  const [name, setName] = useState('');
  const [email, setEmail] = useState(init_email);
  const [description, setDescription] = useState('');
  const [language, setLanguage] = useState('');
  const [languages, setLanguages] = useState([]);
  const [url, setUrl] = useState('');
  const toast = useToast();

  const handleAddLanguage = () => {
    if (language.trim() !== '') {
      setLanguages([...languages, language.toUpperCase()]);
      setLanguage('');
    }
    else{
      toast({
        title: 'Error Occurred',
        description: 'Please enter a language.',
        status: 'error',
        duration: 1000,
        isClosable: true,
      });
    }
  };
  

  
  const handleSubmit = (event) => {
    event.preventDefault();

    if (localStorage.getItem('isAuthenticated') !== 'true') {
      toast({
        title: 'Error Occurred',
        description: 'Please login to upload a project.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    if (!name || !email || !description || !languages.length || !url) {
      toast({
        title: 'Error Occurred',
        description: 'Please check all the fields.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    axios.post('https://minihub-py.herokuapp.com/upload', {
      name,email,description,languages,url}).then(response => {
        console.log(response);
        if (response.data.message === "Project uploaded successfully") {
          toast({
            title: "Success",
            description: "Project uploaded successfully",
            status: "success",
            duration: 9000,
            isClosable: true,
          });
        }
      }).catch(error => {
        console.log(error);
        toast({
          title: "Error",
          description: error.message,
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      });


    // Make the request to the /upload endpoint with the form data here
    // ...


  };

  return (
    <Flex height='120vh' justifyContent={'center'} alignItems={'center'} bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={4} p={8}>
        <Center><Heading as='h1' fontSize={['2xl','2xl','3xl','4xl']} color={useColorModeValue('green.500','teal.200')}textDecoration='underline'>Upload Project</Heading></Center>
        <FormControl>
          <FormLabel htmlFor="name">Project Name</FormLabel>
          <Input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter project name"
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email name"
            isReadOnly
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="description">Description</FormLabel>
          <Input
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter a short description"
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="languages">Tech Stack Used</FormLabel>
          <InputGroup>
            <Input
              id="languages"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              placeholder="Enter a language/tech"
              
            />
            <Button
              type="button"
              onClick={handleAddLanguage}
              ml={2}
              colorScheme={useColorModeValue('green','teal')}
            >
              Add
            </Button>
          </InputGroup>
          <FormHelperText id="languages-helper-text">
            {languages.length === 0
              ? 'No stack added'
              : `Added ${languages.length} stack`}
              </FormHelperText>
              <Box mt={2} display="flex" flexWrap="wrap">
              {languages.map((lang) => (
              <Tag key={lang} size="sm" colorScheme="teal" mr={2} mb={2}>
              <TagLabel>{lang}</TagLabel>
              </Tag>
              ))}
              </Box>
              </FormControl>
              <FormControl>
              <FormLabel htmlFor="url">Project File URL</FormLabel>
              <Input
              id="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Enter project file URL"
              />
              </FormControl>
              <Button type="submit" colorScheme={useColorModeValue('green','teal')} onClick={handleSubmit}>
              Submit
              </Button>
              </Stack>
              </Flex>
              );
              };

export default UploadProject;
