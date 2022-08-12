import { Box, Flex, Text } from '@chakra-ui/react'
import { SingleContinentSumaryType } from '../../pages/continents/[continentSlug]'
import { InformationNote } from './InformationNote'

interface InformationProps {
  continentSumary: SingleContinentSumaryType;
}

export function Information({ continentSumary }:InformationProps) {
  return (
    <Flex 
      as="section" 
      px={['4', '4', '8', '2']} 
      maxW="1160px" 
      mx="auto" 
      align={['center', 'center', 'stretch']} 
      justify="center" 
      direction={['column', 'column', 'row']} 
    >
      <Box flex="1" maxW={['600px','600px','1160px']} mx="auto">
        <Text lineHeight={['5', '5', '9']} my={['6', '6', '14', '20']} textAlign="justify" fontSize={['sm', 'sm', 'lg', '2xl']} color="gray.700" >
          {continentSumary.text}
        </Text>
      </Box>
      <Flex 
        w="100%"
        flex="1"
        maxW={['580px', '580px', '400px', '580px']}
        direction={['row', 'row', 'column', 'row']} 
        align={['start', 'start', 'center', 'center']} 
        justify={['center', 'center', 'center', 'center']} 
      >
        <InformationNote lable="países" amount={continentSumary.countries} />
        <InformationNote lable="línguas" amount={continentSumary.languages} />
        <InformationNote lable="cidades +100" amount={continentSumary.cities100Plus} />
      </Flex>
    </Flex>
  )
}