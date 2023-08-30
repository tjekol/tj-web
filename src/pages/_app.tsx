// pages/_app.js
import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from "next/app"; // Import the AppProps type

function MyApp({ Component, pageProps } : AppProps ) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp