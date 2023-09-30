import {
  backgroundLightMode,
  backgroundDarkMode,
  textColorLightMode,
  textColorDarkMode,
} from '@/components/color-themes';
import {
  Box,
  LinkBox,
  LinkOverlay,
  useColorModeValue,
  Text,
  SimpleGrid,
} from '@chakra-ui/react';
import useLanguage from '@/hooks/use-language';
import PageComponent from '@/components/page';

const WebkomPage = () => {
  const formBackground = useColorModeValue(
    backgroundLightMode,
    backgroundDarkMode,
  );
  const textColor = useColorModeValue(textColorLightMode, textColorDarkMode);
  const isNorwegian = useLanguage();

  return (
    <PageComponent header='Webkom💻' prevPage='/about' homeButton={true}>
      <Text mb='5'>
        {isNorwegian
          ? 'Webkom er en undergruppe under linjeforeningen echo, som er linjeforeningen til Institutt for Informatikk på UIB.'
          : 'Webkom is a subgroup under the student organization echo, which is the student organization to the Informatics Department at UIB.'}
      </Text>
      {/* eslint-disable-next-line jsx-quotes, quotes*/}
      <Text>
        {isNorwegian
          ? 'Denne undergruppa drifter nettsidene til echo.'
          : "This subgroup keeps echo's websites up and running."}
      </Text>
      <SimpleGrid
        columns={1}
        spacingY='6px'
        m={4}
        _hover={{ textDecoration: 'underline', color: formBackground }}
      >
        <LinkBox>
          <LinkOverlay href='https://echo.uib.no'>
            <Box rounded={5} bg={textColor}>
              <Text
                align='center'
                fontStyle='italic'
                p='6px'
                color={formBackground}
              >
                https://echo.uib.no
              </Text>
            </Box>
          </LinkOverlay>
        </LinkBox>
      </SimpleGrid>
    </PageComponent>
  );
};

export default WebkomPage;
