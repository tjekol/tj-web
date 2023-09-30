// LanguageSwitcher.tsx
import { textColorDarkModeLV, textColorLightMode } from './color-themes';
import { Flex, Text, useColorModeValue } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

function LanguageSwitcher() {
  const [language, setLanguage] = useState('no');
  useEffect(() => {
    // we can not use localstorage in the language useState decleration, this would cause a react hydration error.
    // so we have to set it via a useEffect.
    const lang = localStorage.getItem('language');
    if (lang === 'en') {
      setLanguage('en');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('language', language);
    // setItem only dispatches the storage event to other tabs on the same site, not the one that sendt it.
    // so we need to dispatch an event manually to get it on the current tab.
    window.dispatchEvent(new Event('storage'));
  }, [language]);

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
