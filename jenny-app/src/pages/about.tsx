import { Box, IconButton, Icon, Flex, Spacer, Heading, useColorMode, useColorModeValue, LinkOverlay, LinkBox, Text } from "@chakra-ui/react"
import { useState } from "react"
import { IoSunny, IoMoon } from 'react-icons/io5';
import { HiOutlineArrowSmRight, HiOutlineArrowSmLeft } from 'react-icons/hi'
import { FaLinkedin, FaGithub } from 'react-icons/Fa'
import { MdEmail } from 'react-icons/Md'

const AboutPage = () => {
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue('#D3CDF9', '#6B60B1');
  const [ toggle, setToggle ] =  useState(false);

  return (
    <Flex height='100vh' alignItems='center' justifyContent='center'>
      <Flex direction='column' background={formBackground} p='12' rounded='6' position='relative' minW='300' maxW='350'>
        <Heading size='md' mb='4'>✍🏽More about me✍🏽</Heading>

        <Flex>
          <Text m='6'>
            bla bla bla…
          </Text>
        </Flex>
        
        <Flex>
            <LinkBox>
                <LinkOverlay href="/">
                    <IconButton width='15' aria-label="previous page" icon={<HiOutlineArrowSmLeft />}  />
                </LinkOverlay>
            </LinkBox>
            <Spacer/>
            <LinkBox>
                <LinkOverlay href='/about'>
                    <IconButton width='15' aria-label="next page" icon={<HiOutlineArrowSmRight />}  />
                </LinkOverlay>
            </LinkBox>
            
        </Flex>
       
        <Box position='absolute' top='4' right='4' cursor='pointer'onClick={() => {
          toggleColorMode();
          setToggle(!toggle);
        }}
        >
          {toggle ? <IoSunny /> : <IoMoon /> }

        </Box>
      </Flex>
    </Flex>
  )
}

export default AboutPage