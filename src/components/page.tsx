import { Flex, Heading, Text, Box, useColorMode, useColorModeValue, IconButton, LinkBox, LinkOverlay, Spacer } from "@chakra-ui/react";
import { useState } from "react";
import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from "react-icons/hi";
import { IoSunny, IoMoon } from "react-icons/io5";
import { formBackgroundLight, formBackgroundDark, textColorLight, textColorDark } from "./theme";

const PageComponent = ({ 
    header, 
    desc, 
    children,
    prevPage,
    nextPage,
} : { 
    header : string, 
    desc? : string, 
    children : React.ReactNode 
    prevPage?: string,
    nextPage?: string,
}) => {
    const { toggleColorMode } = useColorMode();
    const formBackground = useColorModeValue(formBackgroundLight, formBackgroundDark);
    const textColor = useColorModeValue(textColorLight, textColorDark);
    const [ toggle, setToggle ] =  useState(false);

    return (
        <Flex height='100vh' alignItems='center' justifyContent='center' background={"#272727"}>
        <Flex direction='column' background={formBackground} p='12' rounded='6' position='relative' minW='300' maxW='350'>
            <Heading size='md' mb='2' textAlign='center' color={textColor}>
            {header}
            </Heading>
            {desc && (
                <Flex>
                <Text m='6' textAlign='center' color={textColor}>{desc}</Text>
                </Flex>
            )}
            {children}
            <Flex>
            {prevPage && (
                <LinkBox>
                    <LinkOverlay href={prevPage}>
                        <IconButton width='15' aria-label="previous page" icon={<HiOutlineArrowSmLeft />}  />
                    </LinkOverlay>
                </LinkBox>
            )}
            <Spacer/>
            {nextPage && (
                <LinkBox>
                    <LinkOverlay href={nextPage}>
                        <IconButton width='15' aria-label="next page" icon={<HiOutlineArrowSmRight />}  />
                    </LinkOverlay>
                </LinkBox>
            )}
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

export default PageComponent;
