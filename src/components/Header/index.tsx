import { Box, Flex, Image } from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export function Header() {
  const { asPath } = useRouter()

  return (
    <Flex mx="auto" maxWidth={1160} w={['100%']} h={['50px', '50px', '80px', '80px', '100px']} justify="center" align="center">
      {asPath.startsWith('/continents') && 
      <Box position="absolute" maxW="1160px" w="100%" px={['1']}>
        <Link href="/" >
          <Box h="12" w="14" as="button">
            <Image mx="auto" h={['5', '6', '8']} src="/assets/icons/chevron-left.svg" alt="Voltar" />
          </Box>
        </Link>
      </Box>
      }
      <Image mx="auto" w={['20', '24', '36', '36', '48']} src="/assets/Logo.svg" alt="Logo" objectFit="scale-down" />
    </Flex>
  )
}