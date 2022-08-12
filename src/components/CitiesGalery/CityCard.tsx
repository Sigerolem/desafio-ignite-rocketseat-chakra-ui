import { Box, Flex, Image, Text } from '@chakra-ui/react'

interface CityCardProps {
  cityName: string;
  citySlug: string;
  cityCountryName: string;
  cityCountryCode: string;
  cityContinentSlug: string;
}

export function CityCard({cityName, citySlug, cityContinentSlug, cityCountryName, cityCountryCode}:CityCardProps) {
  return (
    <Box 
      h={['280px']} 
      w={['260px']}
      mx="auto"
    >
      <Image 
        fit="cover"
        borderTopRadius="4px"
        src={`/assets/images/${cityContinentSlug}/${citySlug}.jpg`}
        fallbackSrc={`/assets/images/${cityContinentSlug}/${cityContinentSlug}.jpg`}
        alt={cityName}
        w={['262px']} 
        h={['175px']}
      />
      <Flex 
        borderBottomRadius="4px"
        border="solid 1px"
        borderColor="yellow.400"
        borderTop="0px"
        h="106px" 
      >
        <Box mt="20px" ml="24px" >
          <Text fontSize="xl" fontWeight="600" color="gray.700" >{cityName}</Text>
          <Text mt="2" color="gray.500" >{cityCountryName}</Text>
        </Box>
        <Image
          w={['30px']} 
          h={['30px']}
          ml="auto"
          mr="6"
          mt="38px"
          src={`https://hatscripts.github.io/circle-flags/flags/${cityCountryCode}.svg`}
          alt="Flag"
        />
      </Flex>
    </Box>
  )
}