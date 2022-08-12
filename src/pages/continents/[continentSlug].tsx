import { Box } from '@chakra-ui/react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { CitiesGalery } from '../../components/CitiesGalery'
import { ContinentCover } from '../../components/Banners/ContinentBanner'
import { Information } from '../../components/Information'

export type Top100CityType = {
  city: string;
  citySlug: string;
  country: string;
  code: string;
  entries: string;
  continentName: string;
}

export type SingleContinentSumaryType = {
  text: string;
  countries: string;
  languages: string;
  cities100Plus: string;
}

type ContinentsSumaryType = {
  africa: SingleContinentSumaryType;
  south_america: SingleContinentSumaryType;
  europe: SingleContinentSumaryType;
}

interface ContinentsProps {
  cities: Top100CityType[];
  continentSlug: string;
  continentsSumary: ContinentsSumaryType;
}

export default function Continents({cities, continentSlug, continentsSumary}: ContinentsProps) {
  
  return (
    <Box as="main" w="100%">
      <ContinentCover continentName={cities[0].continentName} continentSlug={continentSlug} />
      <Information continentSumary={continentsSumary[continentSlug]} />
      <CitiesGalery cities={cities.reverse()} continentSlug={continentSlug} />
    </Box>
  )
}

export const getStaticProps:GetStaticProps = async ({params}) => {
  const url = 'http://localhost:3000/api/continents'

  const continentsList = ['africa', 'south_america', 'europe', 'north_america', 'oceania', 'asia', 'middle_east']

  if(continentsList.find(cont => cont == params.continentSlug) == undefined){
    return {
      redirect: {
        destination: '/'
      },
      props: {}
    }
  }

  const cities100Plus = await fetch(`${url}/${params.continentSlug}`)
    .then((res) => res.json())
    .then((data) => {return data})

  const continentsSumary = await fetch(url)
    .then((res) => res.json())
    .then((data) => {return data})
  
  return {
    props: {
      cities: cities100Plus,
      continentSlug: params.continentSlug,
      continentsSumary
    },
    revalidate: 60 * 10 //10 minutos
  }
}

export const getStaticPaths:GetStaticPaths = async () => {
  return {
    paths: [
      { params: { continentSlug: 'europe'}},
      { params: { continentSlug: 'asia'}},
      { params: { continentSlug: 'north_america'}},
      { params: { continentSlug: 'south_america'}},
      { params: { continentSlug: 'oceania'}},
      { params: { continentSlug: 'middle_east'}}
    ] 
    ,
    fallback: false,
  }
}