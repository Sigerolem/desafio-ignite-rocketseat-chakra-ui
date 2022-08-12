import { Flex, Text, Image, useBreakpointValue } from '@chakra-ui/react'

interface CategorieIconProps {
  src: string;
  alt: string;
  text: string;
}

export function CategorieIcon({src, alt, text}:CategorieIconProps) {
  const isMobile = useBreakpointValue({
    base: true,
    md: false
  })

  return (
    <Flex maxW={['140px','140px', '160px']} direction={['row', 'row', 'column']} h={['5', '6', '']} align="center" >
      {
        !isMobile ?
          <Image src={src} alt={alt} /> :
          <Text fontSize="30px" color="yellow.400" mr="2">
            •
          </Text>
      }
      <Text mt={['0', '0', '6']} fontSize={['18px', '18px', 'xl', '2xl']} fontWeight="600" color="gray.700" >{text}</Text>
    </Flex>
  )
}