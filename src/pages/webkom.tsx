import {
  backgroundLightMode,
  backgroundDarkMode,
  textColorLightMode,
  textColorDarkMode,
} from '@/components/color-themes';
import { useColorModeValue, Text, SimpleGrid } from '@chakra-ui/react';
import LinkButton from '@/components/link-button';
import useLanguage from '@/hooks/use-language';
import PageComponent from '@/components/page';

function WebkomPage() {
  const formBackground = useColorModeValue(
    backgroundLightMode,
    backgroundDarkMode,
  );
  const textColor = useColorModeValue(textColorLightMode, textColorDarkMode);
  const isNorwegian = useLanguage();

  return (
    <PageComponent header='Webkom💻' prevPage='/about' homeButton={true}>
      <Text mt='5' m='2'>
        {isNorwegian
          ? 'Webkom er en undergruppe under linjeforeningen echo, som er linjeforeningen til Institutt for Informatikk på UIB.'
          : 'Webkom is a subgroup under the student organization echo, which is the student organization to the Informatics Department at UIB.'}
      </Text>
      {/* prettier-ignore */}
      <Text mt='2' m='2'>
        {isNorwegian
          ? 'Denne undergruppa drifter nettsidene til echo.'
          : // eslint-disable-next-line quotes
          "This subgroup keeps echo's websites up and running."}
      </Text>
      <SimpleGrid columns={1} spacingY='6px' m={4}>
        <LinkButton
          title='echo.uib.no'
          link={'https://echo.uib.no'}
          boxColor={textColor}
          underlineHover={true}
          hoverColor={formBackground}
          isExternalLink={true}
          fontStyle='italic'
        />
        <LinkButton
          title='beta.echo-webkom.no'
          link={'https://beta.echo-webkom.no'}
          boxColor={textColor}
          underlineHover={true}
          hoverColor={formBackground}
          isExternalLink={true}
          fontStyle='italic'
        />
      </SimpleGrid>
    </PageComponent>
  );
}

export default WebkomPage;
