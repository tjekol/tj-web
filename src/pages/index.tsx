import { Box, IconButton, Icon, Flex, Spacer, Heading, useColorMode, useColorModeValue, LinkOverlay, LinkBox, Text } from "@chakra-ui/react"
import { useState } from "react"
import { IoSunny, IoMoon } from 'react-icons/io5';
import { HiOutlineArrowSmRight } from 'react-icons/hi'
import { FaLinkedin, FaGithub } from 'react-icons/Fa'
import { MdEmail } from 'react-icons/Md'

const IndexPage = () => {
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue('#D3CDF9', '#6B60B1');
  const [ toggle, setToggle ] =  useState(false);

  return (
    <Flex height='100vh' alignItems='center' justifyContent='center' background={"#272727"}>
      <Flex direction='column' background={formBackground} p='12' rounded='6' position='relative' minW='300' maxW='350'>
        <Heading size='md' mb='4'>✨HI THERE✨</Heading>

        <Flex>
          <Text m='6'>
            My name is Thea Jenny Kolnes. I am currently studying Computer Technology💻 in Bergen at UIB.
          </Text>
        </Flex>

        <Flex m='2' direction='row'>
          <Spacer/>
          <LinkBox transition=".1s ease-out" _hover={{ transform: 'scale(1.30)' }} >
              <LinkOverlay
                  href="https://www.linkedin.com/in/thea-jenny-kolnes-a79821231/"
                  aria-label="Linkedin-en min"
                  isExternal
              >
                  <Icon as={FaLinkedin} boxSize='7' />
              </LinkOverlay>
          </LinkBox>

          <LinkBox mr='5' ml='5' transition=".1s ease-out" _hover={{ transform: 'scale(1.30)' }} >
                <LinkOverlay
                    href="https://github.com/tkol02"
                    aria-label="Githubben min"
                    isExternal
                >
                    <Icon as={FaGithub} boxSize='7' />
                </LinkOverlay>
            </LinkBox>
            
          <LinkBox transition=".1s ease-out" _hover={{ transform: 'scale(1.30)' }} >
              <LinkOverlay
                  href="mailto:thea.jenny02@gmail.com"
                  aria-label="Send mail til meg"
                  isExternal
              >
                  <Icon as={MdEmail} boxSize='7' />
              </LinkOverlay>
          </LinkBox>
          
          <Spacer/>
        </Flex>
        
        <Flex>
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

export default IndexPage