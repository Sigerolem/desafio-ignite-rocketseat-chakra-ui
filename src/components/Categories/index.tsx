import { Flex } from '@chakra-ui/react'
import { CategorieIcon } from './CategorieIcon'

export function Categories() {
  return (
    <Flex 
      h={['120px', '120px', '', '', '']}
      px={['2', '4', '5']} 
      w="100%" 
      mt={['9', '9', '14', '20', '24']} 
      justify={['space-between']} 
      maxW={['500px', '600px', '1160px']} 
      direction={['column', 'column', 'row']} 
      wrap="wrap"
    >
      <Flex flex="2" justify="space-around">
        <CategorieIcon text="vida noturna" src="/assets/icons/cocktail.svg" alt="Drink" />
        <CategorieIcon text="praia" src="/assets/icons/surf.svg" alt="Prancha" />
      </Flex>
      <Flex flex="2" justify="space-around">
        <CategorieIcon text="moderno" src="/assets/icons/building.svg" alt="Prédio" />
        <CategorieIcon text="clássico" src="/assets/icons/museum.svg" alt="Museu" />
      </Flex>
      <Flex flex="1" justify="center">
        <CategorieIcon text="e mais..." src="/assets/icons/earth.svg" alt="Planeta" />
      </Flex>
    </Flex>
  )
}