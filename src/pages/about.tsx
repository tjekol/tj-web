import {
  backgroundLightMode,
  backgroundDarkMode,
  textColorLightMode,
  textColorDarkMode,
} from '@/components/color-themes';
import {
  Box,
  SimpleGrid,
  Flex,
  useColorModeValue,
  LinkOverlay,
  LinkBox,
  Text,
} from '@chakra-ui/react';
import useLanguage from '@/hooks/use-language';
import PageComponent from '@/components/page';

const AboutPage = () => {
  const formBackground = useColorModeValue(
    backgroundLightMode,
    backgroundDarkMode,
  );
  const textColor = useColorModeValue(textColorLightMode, textColorDarkMode);
  const isNorwegian = useLanguage();

  return (
    <PageComponent
      header={isNorwegian ? 'Om meg✍🏽' : 'About me✍🏽'}
      desc={
        isNorwegian
          ? 'Jeg har stor interesse for videredigering📹, koding👩🏽‍💻 and kunst🎨.'
          : 'I take a big interest in video editing📹, coding👩🏽‍💻 and art🎨.'
      }
      prevPage={'/'}
    >
      <Flex>
        <Text mt='4' textAlign='center' color={textColor}>
          <b>{isNorwegian ? 'Prosjekter' : 'Projects'}</b>
        </Text>
      </Flex>
      <SimpleGrid columns={1} spacingX='20px' spacingY='6px' m={4}>
        <LinkBox transition='.1s ease-out' _hover={{ transform: 'scale(1.1)' }}>
          <LinkOverlay href='/webkom'>
            <Box rounded={5} bg={textColor}>
              <Text align='center' p='6px' color={formBackground}>
                Webkom💻
              </Text>
            </Box>
          </LinkOverlay>
        </LinkBox>
        {/* <LinkBox transition='.1s ease-out' _hover={{ transform: 'scale(1.1)' }}>
          <LinkOverlay href='/test'>
            <Box rounded={5} bg={textColor}>
              <Text
                align='center'
                fontStyle='italic'
                p='6px'
                color={formBackground}
              >
                Tester
              </Text>
            </Box>
          </LinkOverlay>
        </LinkBox> */}
      </SimpleGrid>
    </PageComponent>
  );
};

export default AboutPage;
