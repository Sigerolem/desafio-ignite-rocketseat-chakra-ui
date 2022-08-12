// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from 'next'


export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const africa = { 
    text: 'Se o turismo na África para você é somente fazer safári pelas savanas e se os países africanos na sua concepção são todos pobres e sem atrativos, saiba que você tem muito a descobrir sobre a África. Em seus mais de 30 milhões de km², o continente conta com uma grande diversidade de paisagens, etnias, cultura e costumes, além da situação econômica.',
    languages: '100',
    countries: '54',
    cities100Plus: '4'
  }
  const europe = {
    text: 'A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste.',
    languages: '24',
    countries: '50',
    cities100Plus: '29'
  }
  const south_america = { 
    text: 'A América do Sul é um continente que compreende a porção meridional da América. Também é considerada um subcontinente do continente americano. No século XIX, o continente recebeu cerca de 15 milhões de imigrantes provenientes da Europa, e sofreu influências culturais e ideológicas tanto dos Estados Unidos quanto da Europa.',
    languages: '8',
    countries: '14',
    cities100Plus: '3'
  }
  const asia = {
    text: 'Fazer turismo na Ásia é fascinante, pois é o destino que muitos viajantes escolhem para vivenciar um verdadeiro choque cultural. As religiões, a gastronomia típica, os costumes e a maneira de viver dos asiáticos, contrastam bastante com o estilo de vida do ocidente são fatores que atraem turistas de todas as partes do planeta, principalmente europeus.',
    languages: '10',
    countries: '50',
    cities100Plus: '25'
  }
  const oceania = {
    text: 'Uma das curiosidades da Oceania é que esse continente já foi tratado como o “fim do mundo”, devido à distância da Europa e das Américas. A sorte (nossa!), é claro, é que hoje em dia há diversas rotas para o continente. O que faz com que o turismo na Oceania seja super viável e não pare de crescer. E esse crescimento também é “culpa” da descoberta das paisagens paradisíacas existentes por muitos viajantes, que voltam do continente simplesmente anestesiados com tamanha beleza. Dessa forma, a Oceania é um dos destinos mais procurados por turistas de todo o mundo.',
    languages: '17',
    countries: '16',
    cities100Plus: '3'
  }
  const middle_east = {
    text: 'Bastante incomum para quem está acostumado só à cultura ocidental, e com certeza possuidora de características únicas. É de lá que pode ter se originado a dança do ventre, um espetáculo cativante e exótico frequentemente associado a rituais e práticas religiosas, no passado. E quem se interessa por história terá muito o que fazer no Oriente Médio, pois sua história pode ser tão antiga quanto a humanidade como a conhecemos.',
    languages: '60',
    countries: '18',
    cities100Plus: '11'
  }
  const north_america = {
    text: 'O turismo na América do Norte é como um grande e variado cardápio. Há opções de cidades urbanas e cosmopolitas, desérticas, nevadas, outras para quem gosta de sossego, de baladas, de parques de diversão, de turismo de aventura. Enfim, a oferta é tão grande quando o tamanho do continente, que tem mais de 27,9 milhões de km². Até por isso, viajar para um dos países da América do Norte, ou para todos, é o sonho de consumo de muitos viajantes de todo o mundo.',
    languages: '5',
    countries: '3',
    cities100Plus: '10'
  }

  const continentsSumary = {africa, south_america, europe, asia, oceania, middle_east, north_america}

  res.status(200).json(continentsSumary)
}

