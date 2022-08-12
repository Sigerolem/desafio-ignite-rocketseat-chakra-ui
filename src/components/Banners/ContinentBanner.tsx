import { Flex, Heading } from '@chakra-ui/react'

interface ContinentCoverProps {
  continentName: string;
  continentSlug: string;
}

export function ContinentCover({ continentName, continentSlug }:ContinentCoverProps) {
  return (
    <Flex 
      bg={`rgba(0, 0, 0, 0.5) url('/assets/images/${continentSlug}/${continentSlug}.jpg') center/cover`}
      bgBlendMode="darken"
      mx="auto"
      maxW="1440px"
      w="100%"
      h={['150px', '200px', '300px', '400px', '500px']}
      px={['', '', '12', '14', '28']}
      pt={['', '', '32']}
      align="center"
      justify={['center', 'center', 'flex-start']}
    >
      <Heading
        fontWeight="500" 
        fontSize={['1.75rem', '1.75rem', '4xl', '5xl']}
        color="gray.100" 
        textAlign={['center', 'center', 'left']}
      >
        {continentName}
      </Heading>
    </Flex>
  )
}