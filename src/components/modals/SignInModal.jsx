import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Link,
    Heading,
    Text,
    useColorModeValue,
    useToast,
    InputGroup,
    InputRightElement,
    
  } from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import { useAuth } from "../../api";
import axios from 'axios';

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setIsLoading(true);

      axios.post('https://minihub-py.herokuapp.com/login', {
        email,
        password
        })
        .then(response => {
          console.log(response);
          if (response.data.message === "Login successful") {
            axios.get(`https://minihub-py.herokuapp.com/user/${email}`).then(response => {
              const user = response.data;
              localStorage.setItem("firstName", user.firstName);
              localStorage.setItem("lastName", user.lastName);
              localStorage.setItem("email", user.email);
              localStorage.setItem("college", user.college);
              localStorage.setItem("isAuthenticated", true);

              window.location.reload();
              toast({
                title: "Success",
                description: response.data.message,
                status: "success",
                duration: 5000,
                isClosable: true,
              });
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
    
         
          }
        }
        
        ).catch(error => {
          console.log(error);
          toast({
            title: "Error",
            description: error.message,
            status: "error",
            duration: 9000,
            isClosable: true,
          });
        });
    } catch (error) {
      try{
        toast({
          title: "Error",
          description: error.message,
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      }
      catch{
        toast({
          title: "Error",
          description: error.message,
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      }
    }
    setIsLoading(false);
}

  return <Flex 
  align={'center'}
  justify={'center'}>
  <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
    <Stack align={'center'}>
      <Heading align='center' fontSize={['xl','xl','3xl','4xl']} color={useColorModeValue('green.500','teal.200')}>Sign in to your account</Heading>
      <Text fontSize={'lg'} color={'gray.600'} align='center'>
        to enjoy free access to various projects.
      </Text>
    </Stack>
    <Box>
      <Stack spacing={4} >
        <FormControl id="email">
          <FormLabel>Email</FormLabel>
          <Input  placeholder="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)} ></Input>
        </FormControl>
        <FormControl id="password">
          <FormLabel>Password</FormLabel>
          <InputGroup>
            <Input type={showPassword ? 'text' : 'password'} id='password' value={password} onChange={(event) => setPassword(event.target.value)} />
            <InputRightElement h={'full'}>
              <Button
                variant={'ghost'}
                onClick={() =>
                  setShowPassword((showPassword) => !showPassword)
                }>
                {showPassword ? <ViewIcon /> : <ViewOffIcon />}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <Stack spacing={10}>
          <Stack
            direction={{ base: 'column', sm: 'row' }}
            align={'start'}
            justify={'space-between'}>
            
            <Link color={'blue.400'}>Forgot password?</Link>
          </Stack>
          <Button
            colorScheme={useColorModeValue('green','teal')}
            bg={useColorModeValue('green.500','teal.200')}
            _hover={{
              bg: useColorModeValue('green.600','teal.300'),
            }}
            type="submit"
            isLoading={isLoading}
            onClick={handleSubmit}

            >
            Sign in
          </Button>
        </Stack>
      </Stack>
    </Box>
  </Stack>
      </Flex>
}


export default function SignInModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Link onClick={onOpen}>Sign In</Link>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay bg='blackAlpha.300'
      backdropFilter='blur(10px)'/>
          <ModalContent >
            <ModalCloseButton />
            <ModalBody >
              <SignIn/>
            </ModalBody>
  
          </ModalContent>
        </Modal>
      </>
    )
  }