// theme.tsx
export const textColorLight = '#404067';
export const textColorDark = '#D3CDF9';

export const formBackgroundLight = '#D3CDF9';
export const formBackgroundDark = '#6B60B1';

import { IoSunny, IoMoon } from 'react-icons/io5';
import { Box, useColorMode } from '@chakra-ui/react';
import { useState } from 'react';

function DarkModeSwitch() {
  const { toggleColorMode } = useColorMode();
  const [toggle, setToggle] = useState(false);

  return (
    <Box
      position="absolute"
      top="4"
      right="4"
      cursor="pointer"
      transition=".15s ease-out"
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
