import { Box } from '@chakra-ui/react'
import { Mousewheel, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { SliderItem } from './SliderItem'

export function Slider() {
  return (
    <Box h={['200px', '250px', '400px', '450px']} w="100%" maxW="1240px" mb="10" mt={['5', '5', '12']} >
      <Swiper
        navigation={true}
        pagination={{ clickable: true }}
        mousewheel={true}
        loop
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel]}
      >
        <SwiperSlide>
          <SliderItem continentSlug="europe" continentName="Europa" />
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem continentSlug="south_america" continentName="América do Sul" continentFrase="O sul da América Latina" />
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem continentSlug="north_america" continentName="América do Norte" continentFrase="O norte da América Latina" />
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem continentSlug="africa" continentName="África" continentFrase="O continente mais quente" />
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem continentSlug="oceania" continentName="Oceania" continentFrase="O continente mais isolado" />
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem continentSlug="asia" continentName="Ásia" continentFrase="O continente mais populoso" />
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem continentSlug="middle_east" continentName="Oriente Médio" continentFrase="O sub-continente com mais petróleo" />
        </SwiperSlide>
      </Swiper>
    </Box>
  )
}