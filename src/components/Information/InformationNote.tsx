import { Flex, Image, Text, Tooltip } from '@chakra-ui/react'

interface InformationNoteProps {
  amount: string;
  lable: string;
}

export function InformationNote({amount, lable}:InformationNoteProps) {
  const cidades = lable.startsWith('ci')
  return (
    <Flex direction="column" align={['start', 'start', 'center']} justify="center" flex={cidades ? ['1.6', '1', '1', '1.2'] : '1'}>
      <Text as="strong" fontSize={['xl', '2xl', '2xl', '5xl']} fontWeight={['600']} color="yellow.400" >
        {amount}
      </Text>
      <Flex wrap="wrap" >
        <Text as="span" display="block" mt="-1" mr={['1', '1', '2']} fontSize={['md', 'lg', '1xl', '2xl']} color="gray.700" >
          {lable}
        </Text>
        {
          lable.startsWith('ci') &&
          <Tooltip label="As 100 cidades mais populares" >
            <Image src="/assets/icons/info.svg" mt={['2px', '2px', '2px', '6px']} alt="Info" w={['2.5', '2.5', '4']} h={['2.5', '2.5', '4']} />
          </Tooltip>
        }
      </Flex>
      
    </Flex>
  )
}