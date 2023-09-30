// theme.tsx
// normal text
export const textColorLightMode = '#404067';
export const textColorDarkMode = '#E2DDFF';

// less visible text
export const textColorLightModeLV = '#6B60B1';
export const textColorDarkModeLV = '#D3CDF9';

export const backgroundLightMode = '#D3CDF9';
export const backgroundDarkMode = '#6B60B1';

import { Box, useColorMode } from '@chakra-ui/react';
import { IoSunny, IoMoon } from 'react-icons/io5';
import { useState } from 'react';

function DarkModeSwitch() {
  const { toggleColorMode } = useColorMode();
  const [toggle, setToggle] = useState(false);

  return (
    <Box
      position='absolute'
      top='4'
      right='4'
      cursor='pointer'
      transition='.15s ease-out'
      _hover={{ transform: 'scale(1.30)' }}
      onClick={() => {
        toggleColorMode();
        setToggle(!toggle);
      }}
    >
      {toggle ? <IoSunny /> : <IoMoon />}
    </Box>
  );
}

export default DarkModeSwitch;
