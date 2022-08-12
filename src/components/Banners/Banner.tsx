import { Box, Flex, Stack, Text, Image } from '@chakra-ui/react'

export function Banner() {
  return (
    <Box bgImage="url('/assets/Background.png')" 
      px={['4', '4', '6', '8', '10']} 
      py={['7', '7', '12', '14', '20']} 
      maxW="1440" 
      w="100%" 
      h={['163px', '163px', '250px', '260px', '335px']} 
    >
      <Flex maxW="1240" mx="auto" justify={['center', 'center', 'space-around', 'space-around', 'space-between']} >
        <Stack maxW={['300', '300', '400', '400', '430']} spacing={['2', '2', '5']} >
          <Text as="h2" fontWeight={500} color="gray.100" fontSize={['xl', 'xl', '2xl', '2xl', '4xl']}>
              5 Continentes,<br/> infinitas possibilidades.
          </Text>
          <Text color="gray.300" fontSize={['sm', 'sm', 'lg', 'lg', 'xl']}>
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Stack>
        <Image w={['0px', '0px', '220px', '340px', '420px']} mt={['0', '0', '0', '0', '0']} src="/assets/Airplane.svg" alt="Airplane" />
      </Flex>
    </Box>
  )
}