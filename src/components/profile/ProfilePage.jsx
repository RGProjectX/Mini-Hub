import React, { useState } from 'react';
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  useToast,
  Flex,
  Heading,
  useColorModeValue,
  Center,
  HStack,
  Avatar,

} from '@chakra-ui/react';

const ProfilePage = () => {

  const toast = useToast();
  // retrieve data from local storage
  const firstName = localStorage.getItem('firstName');
  const lastName = localStorage.getItem('lastName');
  const email = localStorage.getItem('email');  
  const college = localStorage.getItem('college');
  const isAuthenticated = localStorage.getItem('isAuthenticated');

  // check if any value is updated
  const [newFirstName, setNewFirstName] = useState(firstName);
  const [newLastName, setNewLastName] = useState(lastName);
  const [newEmail, setNewEmail] = useState(email);
  const [newCollege, setNewCollege] = useState(college);

  // on submit, update the data in local storage and send a request to the backend
  const handleSubmit = (e) => {
    e.preventDefault();

    if (firstName === newFirstName && lastName === newLastName && email === newEmail && college === newCollege) {
      toast({
        title: 'No changes detected',
        description: 'Please make some changes to update your profile',
        status: 'warning',
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    localStorage.setItem('firstName', newFirstName);
    localStorage.setItem('lastName', newLastName);
    localStorage.setItem('email', newEmail);
    localStorage.setItem('college', newCollege);
    localStorage.setItem('isAuthenticated', true);
    console.log('updated');

    fetch('https://minihub-py.herokuapp.com/users/update', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName: newFirstName,
        lastName: newLastName,
        email: newEmail,
        college: newCollege,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        
        if (data['message'] == 'User updated successfully'){
          window.location.reload();
        }

        else{
          toast({
            title: 'Error',
            description: 'Unable to update profile',
            status: 'error',
            duration: 5000,
            isClosable: true,
          });
        }
      }
      
      )
  };






  return (
    <>
    <Center><Heading as='h1' fontSize={['2xl','2xl','3xl','4xl']} mt='20' color={useColorModeValue('green.500','teal.200')}textDecoration='underline'>Profile</Heading></Center>
    
    <Flex w='100%'  p='10' mt='10' justifyContent='space-around'>

      <HStack spacing='18vw'>

        <Avatar size='2xl' name={`${firstName} ${lastName}`}/>

        <Stack spacing='24px'>
          <HStack spacing='24px'>
            <FormControl id='firstName'>
              <FormLabel>First Name</FormLabel>
              <Input type='text' defaultValue={firstName} onChange={(e) => setNewFirstName(e.target.value)} />
            </FormControl>

            <FormControl id='lastName'>
              <FormLabel>Last Name</FormLabel>
              <Input type='text' defaultValue={lastName} onChange={(e) => setNewLastName(e.target.value)} />
            </FormControl>

          
          </HStack>

          <HStack spacing='24px'>
            <FormControl id='email'>
              <FormLabel>Email</FormLabel>
              <Input type='email' defaultValue={email} onChange={(e) => setNewEmail(e.target.value)} />
            </FormControl>

            <FormControl id='college'>
              <FormLabel>College</FormLabel>
              <Input type='text' defaultValue={college} onChange={(e) => setNewCollege(e.target.value)} />
            </FormControl>

          </HStack>
        </Stack>
          



      </HStack>

    </Flex>

    <Center><Button colorScheme={useColorModeValue('green','teal')} size='lg' mt='10' onClick={handleSubmit}>Update</Button></Center>
    </>
  );
};

export default ProfilePage;
