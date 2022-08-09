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
  } from '@chakra-ui/react'

const SignIn = () => {
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
          <Input type="email" ></Input>
        </FormControl>
        <FormControl id="password">
          <FormLabel>Password</FormLabel>
          <Input type="password" />
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