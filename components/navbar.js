import Logo from './logo'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'

export const LinkItem = ({ href, path, children }) => {
  const isActive = path === href
  const inactiveColor = useColorModeValue('gray.200', 'whiteAlpha.900')

  return (
      <Link
        href={href}
        p={2}
        bg={isActive ? 'glassTeal' : undefined}
        color={isActive ? '#202023' : inactiveColor}
      >
        {children}
      </Link>
  )
}

const Navbar = props => {
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '20202380')}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        flexWrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing="tighter">
            <Logo />
          </Heading>
        </Flex>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, nmd: 0 }}
        >
            <LinkItem href='/works' path={props.path}>Works</LinkItem>
            <LinkItem href='/posts' path={props.path}>Posts</LinkItem>
        </Stack>
        <Box flex={1} align="right">
            <ThemeToggleButton/>
            <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
                <Menu>
                    <MenuButton as={IconButton} icon={<HamburgerIcon/>} variant="outline" aria-label="Options"/>
                    <MenuList>
                            <MenuItem as={NextLink} href="/" passHref>About</MenuItem>
                            <MenuItem as={NextLink} href="/works" passHref>Works</MenuItem>
                            <MenuItem as={NextLink} href="/works" passHref>Posts</MenuItem>
                            <MenuItem as={NextLink} href="https://github.com/Robertcl795" passHref>GH Profile</MenuItem>
                    </MenuList>
                </Menu>
            </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
