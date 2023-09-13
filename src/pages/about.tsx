import { Box, SimpleGrid, IconButton, Flex, Spacer, Heading, useColorMode, useColorModeValue, LinkOverlay, LinkBox, Text } from "@chakra-ui/react"
import { useState } from "react"
import { IoSunny, IoMoon } from 'react-icons/io5';
import { HiOutlineArrowSmLeft } from 'react-icons/hi'

const AboutPage = () => {
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue('#D3CDF9', '#6B60B1');
  const textColor = useColorModeValue('#404067', '#D3CDF9');
  const [ toggle, setToggle ] =  useState(false);

  return (
    <Flex height='100vh' alignItems='center' justifyContent='center' background={"#272727"}>
      <Flex direction='column' background={formBackground} p='12' rounded='6' position='relative' minW='300' maxW='350'>
        <Heading size='md' mb='2' textAlign='center' color={textColor}>
          About me✍🏽
        </Heading>

        <Flex>
          <Text m='6' textAlign='center' color={textColor}>
            I take a big interest in video editing📹, coding👩🏽‍💻 and art🎨.
          </Text>
        </Flex>

        <Flex>
          <Text mt='4' textAlign='center' color={textColor}>
            <b>Projects</b>
          </Text>
        </Flex>

        <SimpleGrid columns={1} spacingX='20px' spacingY='6px' m={4}>
          <LinkBox transition=".1s ease-out" _hover={{ transform: 'scale(1.1)' }}>
            <LinkOverlay href="/webkom">
              <Box rounded={5} bg={textColor}>
                <Text align='center' p='6px' color={formBackground}>Webkom💻</Text>
              </Box>
            </LinkOverlay>
          </LinkBox>
          <LinkBox transition=".1s ease-out" _hover={{ transform: 'scale(1.1)' }}>
            <LinkOverlay href="">
              <Box rounded={5} bg={textColor}>
                <Text align='center' fontStyle='italic' p='6px' color={formBackground}>Coming…</Text>
              </Box>
            </LinkOverlay>
          </LinkBox>
        </SimpleGrid>
        
        <Flex>
            <LinkBox>
                <LinkOverlay href="/">
                    <IconButton width='15' aria-label="previous page" icon={<HiOutlineArrowSmLeft />}  />
                </LinkOverlay>
            </LinkBox>
            <Spacer/>
            {/* <LinkBox>
                <LinkOverlay href='/about'>
                    <IconButton width='15' aria-label="next page" icon={<HiOutlineArrowSmRight />}  />
                </LinkOverlay>
            </LinkBox> */}
            
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