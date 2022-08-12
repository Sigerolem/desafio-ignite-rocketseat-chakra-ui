// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from 'next'

type ContinentsApiParamsType = {
  continentSlug: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const query = req.query as ContinentsApiParamsType

  const africa = [
    { city: 'Hurgada', citySlug: 'hurgada', code: 'eg', country: 'Egypt', entries: '2,74', continentName: 'África'},
    { city: 'Marrakech', citySlug: 'marrakech', code: 'ma', country: 'Morocco', entries: '2,84', continentName: 'África'},
    { city: 'Johannesburg', citySlug: 'johannesburg', code: 'za', country: 'South Africa', entries: '4,12', continentName: 'África'},
    { city: 'Cairo', citySlug: 'cairo', code: 'eg', country: 'Egypt', entries: '5,75', continentName: 'África'}
  ]

  const north_america = [
    { city: 'Toronto', citySlug: 'toronto', code: 'ca', country: 'Canada', entries: '4,51', continentName: 'America do Norte'},
    { city: 'Orlando', citySlug: 'orlando', code: 'us', country: 'United States', entries: '5,55', continentName: 'America do Norte'},
    { city: 'Cancun', citySlug: 'cancun', code: 'mx', country: 'Mexico', entries: '6,04', continentName: 'America do Norte'},
    { city: 'Las Vegas', citySlug: 'las_vegas', code: 'us', country: 'United States', entries: '6,59', continentName: 'America do Norte'},
    { city: 'Los Angeles', citySlug: 'los_angeles', code: 'us', country: 'United States', entries: '7,5', continentName: 'America do Norte'},
    { city: 'Miami', citySlug: 'miami', code: 'us', country: 'United States', entries: '8,12', continentName: 'America do Norte'},
    { city: 'New York City', citySlug: 'new_york_city', code: 'us', country: 'United States', entries: '13,6', continentName: 'America do Norte'}
  ]

  const south_america = [
    { city: 'Rio de Janeiro', citySlug: 'rio_de_janeiro', code: 'br', country: 'Brasil', entries: '2,28', continentName: 'America do Sul'},
    { city: 'Lima', citySlug: 'lima', code: 'pe', country: 'Peru', entries: '2,54', continentName: 'America do Sul'},
    { city: 'Buenos Aires', citySlug: 'buenos_aires', code: 'ar', country: 'Argentina', entries: '2,69', continentName: 'America do Sul'}
  ]

  const asia = [
    { city: 'Ha Long', citySlug: 'ha_long', code: 'vn', country: 'Vietnam', entries: '5,29', continentName: 'Ásia'},
    { city: 'Jaipur', citySlug: 'jaipur', code: 'in', country: 'India', entries: '6,38', continentName: 'Ásia'},
    { city: 'Johor Bahru', citySlug: 'johor_bahru', code: 'my', country: 'Malaysia', entries: '6,4', continentName: 'Ásia'},
    { city: 'Denpasar', citySlug: 'denpasar', code: 'id', country: 'Indonesia', entries: '7,19', continentName: 'Ásia'},
    { city: 'Ho Chi Minh', citySlug: 'ho_chi_minh', code: 'vn', country: 'Vietnam', entries: '7,2', continentName: 'Ásia'},
    { city: 'Shanghai', citySlug: 'shanghai', code: 'cn', country: 'China', entries: '7,48', continentName: 'Ásia'},
    { city: 'Osaka', citySlug: 'osaka', code: 'jp', country: 'Japan', entries: '7,86', continentName: 'Ásia'},
    { city: 'Seoul', citySlug: 'seoul', code: 'kr', country: 'South Korea', entries: '8,43', continentName: 'Ásia'},
    { city: 'Guangzhou', citySlug: 'guangzhou', code: 'cn', country: 'China', entries: '9', continentName: 'Ásia'},
    { city: 'Taipei', citySlug: 'taipei', code: 'tw', country: 'Taiwan', entries: '9,6', continentName: 'Ásia'},
    { city: 'Tokyo', citySlug: 'tokyo', code: 'jp', country: 'Japan', entries: '9,99', continentName: 'Ásia'},
    { city: 'Phuket', citySlug: 'phuket', code: 'th', country: 'Thailand', entries: '10,55', continentName: 'Ásia'},
    { city: 'Mumbai', citySlug: 'mumbai', code: 'in', country: 'India', entries: '10,59', continentName: 'Ásia'},
    { city: 'Shenzhen', citySlug: 'shenzhen', code: 'cn', country: 'China', entries: '12,2', continentName: 'Ásia'},
    { city: 'Delhi', citySlug: 'delhi', code: 'in', country: 'India', entries: '12,65', continentName: 'Ásia'},
    { city: 'Kuala Lumpur', citySlug: 'kuala_lumpur', code: 'my', country: 'Malaysia', entries: '13,43', continentName: 'Ásia'},
    { city: 'Singapore', citySlug: 'singapore', code: 'sg', country: 'Singapore', entries: '18,55', continentName: 'Ásia'},
    { city: 'Macau', citySlug: 'macau', code: 'cn', country: 'China', entries: '18,93', continentName: 'Ásia'},
    { city: 'Bangkok', citySlug: 'bangkok', code: 'th', country: 'Thailand', entries: '24,17', continentName: 'Ásia'},
    { city: 'Hong Kong', citySlug: 'hong_kong', code: 'cn', country: 'China', entries: '29,26', continentName: 'Ásia'}
  ]

  const europe = [
    { city: 'Stockholm', citySlug: 'stockholm', code: 'se', country: 'Sweden', entries: '2,6', continentName: 'Europa'},
    { city: 'Copenhagen', citySlug: 'copenhagen', code: 'dk', country: 'Denmark', entries: '3,07', continentName: 'Europa'},
    { city: 'Lisbon', citySlug: 'lisbon', code: 'pt', country: 'Portugal', entries: '3,54', continentName: 'Europa'},
    { city: 'Budapest', citySlug: 'budapest', code: 'hu', country: 'Hungary', entries: '3,82', continentName: 'Europa'},
    { city: 'Brussels', citySlug: 'brussels', code: 'be', country: 'Belgium', entries: '3,94', continentName: 'Europa'},
    { city: 'St Petersburg', citySlug: 'st_petersburg', code: 'ru', country: 'Russia', entries: '4', continentName: 'Europa'},
    { city: 'Munich', citySlug: 'munich', code: 'de', country: 'Germany', entries: '4,06', continentName: 'Europa'},
    { city: 'Dublin', citySlug: 'dublin', code: 'ie', country: 'Ireland', entries: '5,21', continentName: 'Europa'},
    { city: 'Madrid', citySlug: 'madrid', code: 'es', country: 'Spain', entries: '5,44', continentName: 'Europa'},
    { city: 'Moscow', citySlug: 'moscow', code: 'ru', country: 'Russia', entries: '5,51', continentName: 'Europa'},
    { city: 'Athens', citySlug: 'athens', code: 'gr', country: 'Greece', entries: '5,73', continentName: 'Europa'},
    { city: 'Berlin', citySlug: 'berlin', code: 'de', country: 'Germany', entries: '5,96', continentName: 'Europa'},
    { city: 'Vienna', citySlug: 'vienna', code: 'at', country: 'Austria', entries: '6,41', continentName: 'Europa'},
    { city: 'Milan', citySlug: 'milan', code: 'it', country: 'Italy', entries: '6,48', continentName: 'Europa'},
    { city: 'Barcelona', citySlug: 'barcelona', code: 'es', country: 'Spain', entries: '6,71', continentName: 'Europa'},
    { city: 'Amsterdam', citySlug: 'amsterdam', code: 'nl', country: 'Netherlands', entries: '8,35', continentName: 'Europa'},
    { city: 'Prague', citySlug: 'prague', code: 'cz', country: 'Czechia', entries: '8,95', continentName: 'Europa'},
    { city: 'Rome', citySlug: 'rome', code: 'it', country: 'Italy', entries: '10,07', continentName: 'Europa'},
    { city: 'Paris', citySlug: 'paris', code: 'fr', country: 'France', entries: '17,56', continentName: 'Europa'},
    { city: 'London', citySlug: 'london', code: 'gb', country: 'United Kingdom', entries: '19,23', continentName: 'Europa'}
  ]

  const oceania = [
    { city: 'Auckland', citySlug: 'auckland', code: 'nz', country: 'New Zealand', entries: '2,8', continentName: 'Oceania'},
    { city: 'Sydney', citySlug: 'sydney', code: 'au', country: 'Australia', entries: '4,09', continentName: 'Oceania'}
  ]

  const middle_east = [
    { city: 'Jerusalem', citySlug: 'jerusalem', code: 'il', country: 'Israel', entries: '3,93', continentName: 'Oriente Médio'},
    { city: 'Riyadh', citySlug: 'riyadh', code: 'sa', country: 'Saudi Arabia', entries: '5,27', continentName: 'Oriente Médio'},
    { city: 'Medina', citySlug: 'medina', code: 'sa', country: 'Saudi Arabia', entries: '8,55', continentName: 'Oriente Médio'},
    { city: 'Mecca', citySlug: 'mecca', code: 'sa', country: 'Saudi Arabia', entries: '9,57', continentName: 'Oriente Médio'},
    { city: 'Antalya', citySlug: 'antalya', code: 'tr', country: 'Turkey', entries: '12,44', continentName: 'Oriente Médio'},
    { city: 'Istanbul', citySlug: 'istanbul', code: 'tr', country: 'Turkey', entries: '13,43', continentName: 'Oriente Médio'},
    { city: 'Dubai', citySlug: 'dubai', code: 'ae', country: 'Arab Emirates', entries: '15,92', continentName: 'Oriente Médio'}
  ]

  const cities100Plus = {africa, south_america, europe, asia, oceania, middle_east, north_america}

  res.status(200).json(cities100Plus[query.continentSlug])
}

