import { Flex, Heading, Text } from '@chakra-ui/react'
import Link from 'next/link'

interface SliderItemProps {
  continentSlug: string;
  continentName?: string;
  continentFrase?: string;
}

export function SliderItem({ continentSlug, continentName = 'Europa', continentFrase = 'O continente mais antigo' }: SliderItemProps) {
  return (
    <Link href={`/continents/${continentSlug}`}>
      <Flex 
        as="a"
        cursor="pointer"
        bg={`rgba(0, 0, 0, 0.6) url("/assets/images/${continentSlug}/${continentSlug}.jpg") center/cover`}
        bgBlendMode="darken"
        w="100%" h="100%" 
        justify="center" align="center" direction="column"
      >
        <Heading fontSize={['2xl', '3xl', '5xl']} color="gray.100" >{continentName}</Heading>
        <Text mt={['3', '3', '4']} fontSize={['sm', 'md', '2xl']} color="gray.300" >{continentFrase}</Text>
      </Flex>
    </Link>
  )
}