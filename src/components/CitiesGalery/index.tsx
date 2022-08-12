import { Box, Heading, SimpleGrid } from '@chakra-ui/react'
import { Top100CityType } from '../../pages/continents/[continentSlug]'
import { CityCard } from './CityCard'

interface CitiesGaleryProps {
  cities: Top100CityType[];
  continentSlug: string;
}

export function CitiesGalery({cities, continentSlug}: CitiesGaleryProps) {
  return (
    <Box as="section" maxW={['600px', '600px', '1160px']} px={['4', '4', '8', '2']}  w="100%" mx="auto" mb="12">
      <Heading 
        w="100%" 
        maxW="1160px" 
        mt={['8', '8', '0']}
        mb={['5', '5', '10']}
        mx="auto"
        fontWeight="500" 
        fontSize={['2xl', '2xl', '3xl', '4xl']} 
        color="gray.700" 
      >
        Cidades +100
      </Heading>
      <SimpleGrid columns={[1, 1, 2, 3, 4]} gap="12" w="100%" >
        {cities.map((cityItem)=>{
          const { city, citySlug, code, country} = cityItem
          return (
            <CityCard
              key={citySlug}
              cityName={city}
              citySlug={citySlug}
              cityCountryCode={code}
              cityCountryName={country}
              cityContinentSlug={continentSlug}
            />
          )
        })}
      </SimpleGrid>
    </Box>
  )
}