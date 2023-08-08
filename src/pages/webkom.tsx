import { Box, Flex, Heading, LinkBox, LinkOverlay, useColorMode, useColorModeValue, Text, SimpleGrid, IconButton, Spacer } from "@chakra-ui/react";
import { useState } from "react";
import { HiOutlineArrowSmLeft } from "react-icons/hi";
import { IoSunny, IoMoon } from "react-icons/io5";

const WebkomPage = () => {
    const { toggleColorMode } = useColorMode();
    const formBackground = useColorModeValue('#D3CDF9', '#6B60B1');
    const [ toggle, setToggle ] =  useState(false);

    return (
        <Flex height='100vh' alignItems='center' justifyContent='center' background={"#272727"}>
            <Flex direction='column' background={formBackground} p='12' rounded='6' position='relative' minW='300' maxW='350'>
                <Heading size='md' mb='4'>Webkom💻</Heading>

                <Text mb='5'>Webkom is a subgroup under the line union (echo) under the Informatics Department at UIB.</Text>
                <Text>This subgroup keeps the website <i>echo.uib.no</i> up and running.</Text>

                <SimpleGrid columns={1} spacingX='20px' spacingY='6px' m={4}>
                    <LinkBox transition=".1s ease-out" _hover={{ transform: 'scale(1.1)' }}>
                        <LinkOverlay href="https://echo.uib.no">
                            <Box rounded={5} bg='#Ece8fd'>
                            <Text align='center' fontStyle='italic' p='6px'>https://echo.uib.no</Text>
                            </Box>
                        </LinkOverlay>
                    </LinkBox>

                </SimpleGrid>

                <Box position='absolute' top='4' right='4' cursor='pointer'onClick={() => {
                toggleColorMode();
                setToggle(!toggle);
                }}
                >
                {toggle ? <IoSunny /> : <IoMoon /> }

                </Box>

                <Flex justifyContent='center'>
                    <LinkBox>
                        <LinkOverlay href='/about'>
                        <IconButton width='15' aria-label="next page" icon={<HiOutlineArrowSmLeft/>}  />
                        </LinkOverlay>
                    </LinkBox>
                </Flex>
            </Flex>
        </Flex>
  )
}

export default WebkomPage