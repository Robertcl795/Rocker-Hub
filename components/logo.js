import Link from 'next/link'
import Image from 'next/image'
import styled from '@emotion/styled'
import { Text, useColorModeValue } from '@chakra-ui/react'


const LogoBox = styled.span`
font-weight: bold;
font-size: 18px;
display: inline-flex;
align-items: center;
height: 30px;
line-height: 20px;
padding: 10px;

&:hover img {
    transform: rotate(20deg);
}
`

const Logo = () => (
    <Link href="/">
        <LogoBox>
            <Image src='/images/logo.png' width={30} height={30} alt='Logo' />
            <Text color={useColorModeValue('gray.800', 'whiteAlpha.900')} fontFamily='M Plus Rounded 1c' ml={3}>
                Robert Rocker
            </Text>
        </LogoBox>
    </Link>
  )


export default Logo
