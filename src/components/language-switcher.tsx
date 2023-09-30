// LanguageSwitcher.tsx
import { textColorDarkModeLV, textColorLightMode } from './color-themes';
import { Flex, Text, useColorModeValue } from '@chakra-ui/react';
import { useLanguage } from './language-context';
import React from 'react';

function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const isNorwegian = language === 'no';
  const textColor = useColorModeValue(textColorLightMode, textColorDarkModeLV);

  return (
    <Flex justifyContent='center' direction='row'>
      <Text
        as={isNorwegian ? 'b' : 'p'}
        mr='1'
        color={textColor}
        _hover={{ textDecoration: 'underline' }}
        onClick={() => {
          setLanguage('no');
        }}
      >
        no
      </Text>
      |
      <Text
        as={!isNorwegian ? 'b' : 'p'}
        ml='1'
        color={textColor}
        _hover={{ textDecoration: 'underline' }}
        onClick={() => {
          setLanguage('en');
        }}
      >
        en
      </Text>
    </Flex>
  );
}

export default LanguageSwitcher;
