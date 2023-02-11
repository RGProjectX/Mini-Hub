import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton,
    Button,
    Flex,
    Box,
    FormControl,
    FormLabel,
    FormHelperText,
    Input,
    InputRightElement,
    InputGroup,
    Stack,
    HStack,
    Link,
    Heading,
    Text,
    useDisclosure,
    useColorModeValue,
  } from '@chakra-ui/react'
import { register } from '../../api';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [college, setCollege] = useState('');
  const [password, setPassword] = useState('');
  const [signUpError, setsignUpError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [registered, setRegistered] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(firstName, lastName, email, college, password);
    try {
      setIsLoading(true);
      const response = await register(firstName, lastName, email, college, password);
      if (response['message'] === 'User created successfully') {
        setRegistered(true);
      }
      console.log('Response : ' + response['message']);
      
      
      // console.log(firstName, lastName, email, college, password);
    } catch (error) {
        // catch error message
        try {
          setsignUpError(error.response.data.detail);
        }
        catch {
          setsignUpError('Something went wrong, please try again later.');
        }
    }
    setIsLoading(false);
};

  return  <Flex
  align={'center'}
  justify={'center'}>
    {!registered ?   <Stack spacing={8} mx={'auto'} maxW={'lg'} py={2} px={4}>
    <Stack align={'center'}>
      <Heading fontSize={['xl','2xl','3xl','4xl']} textAlign={'center'} color={useColorModeValue('green.500','teal.200')}>
        Sign up
      </Heading>
      <Text fontSize={'lg'} color={'gray.500'} textAlign='center'>
        to access upto 600+ projects
      </Text>
    </Stack>
    <Box
      >
      <Stack spacing={4}>
        <HStack>
          <Box>
            <FormControl id="firstName" isRequired>
              <FormLabel>First Name</FormLabel>
              <Input id="fname" type="text" value={firstName} onChange={(event) => setFirstName(event.target.value)} />
            </FormControl>
          </Box>
          <Box>
            <FormControl id="lastName" isRequired>
              <FormLabel>Last Name</FormLabel>
              <Input id='lname' type="text" value={lastName} onChange={(event) => setLastName(event.target.value)} />
            </FormControl>
          </Box>
        </HStack>
        <FormControl id="email" isRequired>
          <FormLabel>Email Address</FormLabel>
          <Input id='email' type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
          {/* if setsignUpError change it to red color */}
          <FormHelperText color={signUpError === '' ?  'gray.500' : 'red.500'}>{signUpError === '' ? 'We\'ll never share your email.' : signUpError }</FormHelperText>
          {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
        </FormControl>
        <FormControl id="college" isRequired>
          <FormLabel>College Name</FormLabel>
          <Input id='college' type="text" value={college} onChange={(event) => setCollege(event.target.value)} />
        </FormControl>
        <FormControl id="password" isRequired>
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
        <Stack spacing={10} pt={2}>
          <Button
            isLoading={isLoading}
            loadingText="Submitting"
            onClick={handleSubmit}
            size="lg"
            colorScheme={useColorModeValue('green','teal')}
            >
            Sign up
          </Button>
        </Stack>
        <Stack pt={6}>
          <Text align={'center'}>
            Already a user? <Link color={'blue.400'}>Login</Link>
          </Text>
        </Stack>
      </Stack>
    </Box>
  </Stack> : <Stack spacing={8} mx={'auto'} maxW={'lg'} py={2} px={4}>
  <Stack align={'center'}>
    <Heading fontSize={['xl','2xl','3xl','4xl']} textAlign={'center'} color={useColorModeValue('green.500','teal.200')}>
      User Registered Successfully.
    </Heading>
    <Text fontSize={'lg'} color={'gray.500'} textAlign='center'>
      Please proceed to login into your account.
    </Text>
  </Stack>
  </Stack>
}


</Flex>
}


export default function SignUpModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Link onClick={onOpen}>Sign Up</Link>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay bg='blackAlpha.300'
      backdropFilter='blur(10px)'/>
          <ModalContent >
            <ModalCloseButton />
            <ModalBody >
              <SignUp/>
            </ModalBody>
  
          </ModalContent>
        </Modal>
      </>
    )
  }