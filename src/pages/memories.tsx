import {
  backgroundLightMode,
  backgroundDarkMode,
  textColorLightMode,
  textColorDarkMode,
} from '@/components/color-themes';
import { SimpleGrid, useColorModeValue } from '@chakra-ui/react';
import LinkButton from '@/components/link-button';
import useLanguage from '@/hooks/use-language';
import PageComponent from '@/components/page';

function MemoriesPage() {
  const formBackground = useColorModeValue(
    backgroundLightMode,
    backgroundDarkMode,
  );
  const textColor = useColorModeValue(textColorLightMode, textColorDarkMode);
  const isNorwegian = useLanguage();

  return (
    <PageComponent
      header={'Memories🎞️'}
      desc={
        isNorwegian
          ? 'Dette er en nettside hvor jeg laster opp bilder via Sanity. Nettsiden bruker Next.js og tailwindCSS.'
          : 'This is a website where I upload pictures via Sanity. The website uses Next.js and tailwindCSS.'
      }
      prevPage='/about'
      homeButton={true}
    >
      <SimpleGrid columns={1} spacingY='6px' m={4}>
        <LinkButton
          title='memories-tjekol.vercel.app'
          link={'https://memories-tjekol.vercel.app'}
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

export default MemoriesPage;
