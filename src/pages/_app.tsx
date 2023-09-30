// pages/_app.js
import { LanguageProvider } from '@/components/language-context';
import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app'; // Import the AppProps type

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <LanguageProvider>
        <Component {...pageProps} />
      </LanguageProvider>
    </ChakraProvider>
  );
}

export default MyApp;
