import {
  backgroundLightMode,
  backgroundDarkMode,
  textColorLightMode,
  textColorDarkMode,
} from '../components/color-themes';
import { SimpleGrid, Flex, useColorModeValue, Text } from '@chakra-ui/react';
import LinkButton from '../components/link-button';
import useLanguage from '../hooks/use-language';
import PageComponent from '../components/page';
import Carousel from '../components/carousel';

function AboutPage() {
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
          ? 'Jeg har stor interesse for videoredigering📹, koding👩🏽‍💻, fotografi📸 og kunst🎨.'
          : 'I take a big interest in video editing📹, coding👩🏽‍💻, photography📸 and art🎨.'
      }
      prevPage={'/'}
    >
      <Carousel />
      <Flex mt='3'>
        <Text mt='2' textAlign='center' color={textColor}>
          <b>{isNorwegian ? 'Prosjekter' : 'Projects'}</b>
        </Text>
      </Flex>
      <SimpleGrid columns={1} spacingX='20px' spacingY='6px' m='4'>
        <LinkButton
          title='Webkom💻'
          link={'/webkom'}
          boxColor={textColor}
          hoverColor={formBackground}
          isExternalLink={false}
          scaleHover={true}
        />
        <LinkButton
          title={isNorwegian ? 'kommer snart…' : 'coming soon…'}
          // link={'/test'}
          boxColor={textColor}
          hoverColor={formBackground}
          isExternalLink={false}
          scaleHover={false}
        />
      </SimpleGrid>
    </PageComponent>
  );
}

export default AboutPage;
