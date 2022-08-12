import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import { Header } from '../components/Header'
import { theme } from '../styles/theme'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import '../styles/swiper.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
