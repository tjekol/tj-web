import {
  Flex,
  Heading,
  Text,
  useColorModeValue,
  IconButton,
  LinkBox,
  LinkOverlay,
  Spacer,
} from '@chakra-ui/react';
import DarkModeSwitch, {
  formBackgroundLight,
  formBackgroundDark,
  textColorLight,
  textColorDark,
} from './color-themes';
import {
  HiOutlineArrowSmLeft,
  HiOutlineArrowSmRight,
  HiOutlineHome,
} from 'react-icons/hi';
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
    formBackgroundLight,
    formBackgroundDark,
  );
  const textColor = useColorModeValue(textColorLight, textColorDark);

  return (
    <>
      <Flex
        height='100vh'
        alignItems='center'
        justifyContent='center'
        background={'#272727'}
      >
        <Flex
          direction='column'
          background={formBackground}
          p='12'
          rounded='6'
          position='relative'
          minW='300'
          maxW='350'
          minH='400'
        >
          <Heading size='md' mb='2' textAlign='center' color={textColor}>
            {header}
          </Heading>
          {desc && (
            <Flex>
              <Text m='6' textAlign='center' color={textColor}>
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
