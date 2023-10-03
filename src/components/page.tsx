import {
  Flex,
  Heading,
  Text,
  useColorModeValue,
  IconButton,
  LinkBox,
  LinkOverlay,
  Spacer,
  Box,
} from '@chakra-ui/react';
import DarkModeSwitch, {
  backgroundLightMode,
  backgroundDarkMode,
  textColorLightMode,
  textColorDarkMode,
} from './color-themes';
import {
  HiOutlineArrowSmLeft,
  HiOutlineArrowSmRight,
  HiOutlineHome,
} from 'react-icons/hi';
import { motion } from 'framer-motion';
import React from 'react';

function PageComponent({
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
}) {
  const formBackground = useColorModeValue(
    backgroundLightMode,
    backgroundDarkMode,
  );
  const textColor = useColorModeValue(textColorLightMode, textColorDarkMode);

  const MotionBox = motion(Box);
  const MotionHeading = motion(Heading);
  const MotionText = motion(Text);

  const pageTransition = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };

  return (
    <>
      <Flex
        height='100vh'
        alignItems='center'
        justifyContent='center'
        background={'#272727'}
      >
        <MotionBox
          variants={pageTransition}
          initial='initial'
          animate='animate'
          exit='initial'
        >
          <Flex
            position='relative'
            paddingY='8'
            paddingX='6'
            direction='column'
            background={formBackground}
            rounded='6'
            minW='350'
            maxW='320'
            minH='300'
          >
            <MotionHeading
              size='md'
              mb='2'
              textAlign='center'
              color={textColor}
            >
              {header}
            </MotionHeading>
            {desc && (
              <Flex>
                <MotionText m='6' textAlign='center' color={textColor}>
                  {desc}
                </MotionText>
              </Flex>
            )}
            {children}
            {(prevPage || nextPage) && (
              <Flex>
                {prevPage && (
                  <LinkBox>
                    <LinkOverlay href={prevPage}>
                      <IconButton
                        width='15'
                        aria-label='previous page'
                        icon={<HiOutlineArrowSmLeft />}
                      />
                    </LinkOverlay>
                  </LinkBox>
                )}
                {homeButton && (
                  <>
                    <Spacer />
                    <LinkBox mr='10'>
                      <LinkOverlay href='/'>
                        <IconButton
                          width='15'
                          aria-label='next page'
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
                        width='15'
                        aria-label='next page'
                        icon={<HiOutlineArrowSmRight />}
                      />
                    </LinkOverlay>
                  </LinkBox>
                )}
              </Flex>
            )}
            <DarkModeSwitch />
          </Flex>
        </MotionBox>
      </Flex>
      <LinkBox>
        <LinkOverlay href='https://github.com/tjekol/tj-web'>
          <Text
            pos='relative'
            bottom='10'
            textAlign='center'
            color='grey'
            _hover={{ textDecoration: 'underline' }}
          >
            Made by Thea Jenny Kolnes🦋
          </Text>
        </LinkOverlay>
      </LinkBox>
    </>
  );
}

export default PageComponent;
