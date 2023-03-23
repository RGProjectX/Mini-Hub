import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Tooltip
} from '@chakra-ui/react';
import { MoonIcon, SunIcon,AddIcon } from '@chakra-ui/icons';
import { NavLink } from 'react-router-dom'
import MiniIcon from '../icon/MiniIcon';
export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  
  const [firstName, lastName, email, college, isAuthenticated] = [localStorage.getItem("firstName"), localStorage.getItem("lastName"), localStorage.getItem("email"), localStorage.getItem("college"), localStorage.getItem("isAuthenticated")];
  
  const profile_pic = `https://avatars.dicebear.com/api/adventurer/${Math.random().toString(36).substring(2,7)}.svg`
  
  return (
      <Box position="fixed"
      zIndex="dropdown" width='100%' top='0' bg={useColorModeValue('gray.200', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box><NavLink to='/'><MiniIcon/></NavLink></Box>
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              {isAuthenticated ? <Tooltip hasArrow placement='bottom' label='Upload Project'> 
              <NavLink to='/upload'>
            <Button
              variant={'solid'}
              size={'sm'} colorScheme={useColorModeValue('green','teal')}><AddIcon/></Button>
              </NavLink>
              </Tooltip> : null}
            
              <Button onClick={toggleColorMode} variant={'solid'}
              size={'sm'} colorScheme={useColorModeValue('green','teal')}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
              {isAuthenticated ? 
              <Menu >
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size='sm'
                    name={`${firstName} ${lastName}`}
                  />
                </MenuButton>
                <MenuList alignItems={'center'} >
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      name={`${firstName} ${lastName}`}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>{isAuthenticated ? `${firstName} ${lastName}`  : 'Not Logged In'}</p>
                  </Center>
                  <Center>
                    {isAuthenticated ? <p>{email}</p> : null }
                  </Center>
                  <br />
                  {isAuthenticated ?  <><MenuDivider />
                  <MenuItem><NavLink to='/profile'>Account</NavLink></MenuItem>
                  <MenuItem><NavLink to='/upload'>Upload Projects</NavLink></MenuItem>
                  <MenuItem><NavLink to='/' onClick={() => {
                    localStorage.clear();
                    window.location.reload();
                  }}>Log Out</NavLink></MenuItem> </> : null
                }
                </MenuList>
              </Menu> : null}
            </Stack>
          </Flex>
        </Flex>
      </Box>
  );
}