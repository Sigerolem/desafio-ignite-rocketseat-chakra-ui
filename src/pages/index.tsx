import { Box, Flex, Text } from '@chakra-ui/react'
import Head from 'next/head'
import { Banner } from '../components/Banners/Banner'
import { Categories } from '../components/Categories'
import { Slider } from '../components/Slider'


export default function Home() {
  return (
    <Flex as="main" direction="column" align="center" maxW="1440px" mx="auto" >
      <Head >
        <title>Infinitas possibilidades | worldtrip</title>
      </Head>
      <Banner />
      <Categories />
      <Box mt={['7', '7', '20']} mb={['6', '6', '44px']} w={['60px', '60px', '90px']} borderBottom="2px" borderColor="gray.700" />
      <Text align="center" fontSize={['lg', 'lg', 'xl', '4xl']} fontWeight="500" color="gray.600" >
        Vamos nessa? <br/> Então escolha seu continente
      </Text>
      <Slider />
    </Flex>
  )
}
