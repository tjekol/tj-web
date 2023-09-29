import React from 'react';
import {
  Flex,
  Heading,
  Text,
  Box,
  useColorMode,
  useColorModeValue,
  IconButton,
  LinkBox,
  LinkOverlay,
  Spacer,
} from '@chakra-ui/react';
import { useState } from 'react';
import {
  HiOutlineArrowSmLeft,
  HiOutlineArrowSmRight,
  HiOutlineHome,
} from 'react-icons/hi';
import { IoSunny, IoMoon } from 'react-icons/io5';
import {
  formBackgroundLight,
  formBackgroundDark,
  textColorLight,
  textColorDark,
} from './theme';

const PageComponent = ({
  header,
  desc,
  children,
  prevPage,
  nextPage,
  homeButton,
}: {
  header: string;
  desc?: string;
  children: React.ReactNode;
  prevPage?: string;
  nextPage?: string;
  homeButton?: boolean;
}) => {
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue(
    formBackgroundLight,
    formBackgroundDark,
  );
  const textColor = useColorModeValue(textColorLight, textColorDark);
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <Flex
        height="100vh"
        alignItems="center"
        justifyContent="center"
        background={'#272727'}
      >
        <Flex
          direction="column"
          background={formBackground}
          p="12"
          rounded="6"
          position="relative"
          minW="300"
          maxW="350"
        >
          <Heading size="md" mb="2" textAlign="center" color={textColor}>
            {header}
          </Heading>
          {desc && (
            <Flex>
              <Text m="6" textAlign="center" color={textColor}>
                {desc}
              </Text>
            </Flex>
          )}
          {children}
          {(prevPage || nextPage) && (
            <Flex>
              {prevPage && (
                <LinkBox>
                  <LinkOverlay href={prevPage}>
                    <IconButton
                      width="15"
                      aria-label="previous page"
                      icon={<HiOutlineArrowSmLeft />}
                    />
                  </LinkOverlay>
                </LinkBox>
              )}
              {homeButton && (
                <>
                  <Spacer />
                  <LinkBox mr="10">
                    <LinkOverlay href="/">
                      <IconButton
                        width="15"
                        aria-label="next page"
                        icon={<HiOutlineHome />}
                      />
                    </LinkOverlay>
                  </LinkBox>
                </>
              )}
              <Spacer />
              {nextPage && (
                <LinkBox>
                  <LinkOverlay href={nextPage}>
                    <IconButton
                      width="15"
                      aria-label="next page"
                      icon={<HiOutlineArrowSmRight />}
                    />
                  </LinkOverlay>
                </LinkBox>
              )}
            </Flex>
          )}
          <Box
            position="absolute"
            top="4"
            right="4"
            cursor="pointer"
            onClick={() => {
              toggleColorMode();
              setToggle(!toggle);
            }}
          >
            {toggle ? <IoSunny /> : <IoMoon />}
          </Box>
        </Flex>
      </Flex>
      <LinkBox>
        <LinkOverlay href="https://github.com/tjekol/tj-web">
          <Text
            pos="relative"
            bottom="10"
            textAlign="center"
            color="grey"
            _hover={{ textDecoration: 'underline' }}
          >
            Made by Thea Jenny Kolnes🦋
          </Text>
        </LinkOverlay>
      </LinkBox>
    </>
  );
};

export default PageComponent;
