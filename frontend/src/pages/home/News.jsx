import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

import news1 from "../../assets/news/news-1.png"
import news2 from "../../assets/news/news-2.png"
import news3 from "../../assets/news/news-3.png"

const news = [
    {
        "id": 1,
        "title": "Winter Neuheiten",
        "description": "Am Freitag kommen unsere neuen Winter Schnitzeljagten für euch in den Shop. Bis Mitternacht gibt es die neuen Schnitzeljagten mit 20% Rabatt.",
        "image": news1
    },
    {
        "id": 2,
        "title": "Letzte Chance",
        "description": "Wir schaffen Platz für neues. Unsere Schnitzeljagdt Mission Mond: Die Raumfahrer Challenge ist nur noch bis zum 31.12.2024 erhältlich.",
        "image": news2
    },
    {
        "id": 3,
        "title": "Newsletter Abbonieren und 10% Rabatt erhalten",
        "description": "Abboniere unseren Newsletter und du erhältst 10% Rabatt auf deine erste Bestellung.",
        "image": news3
    }
]

const News = () => {
    return (
      <div className='py-16'>
          <h2 className='text-3xl font-semibold mb-6'>News </h2>
  
          <Swiper
          slidesPerView={1}
          spaceBetween={30}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          
          {
              news.map((item, index) => (
                  <SwiperSlide key={index}>
                      <div className='flex flex-col sm:flex-row sm:justify-between items-center gap-12'>
                          {/* content */}
                          <div className='py-4'>
                              <Link to="/">
                                   <h3 className='text-lg font-medium hover:text-blue-500 mb-4'>{item.title}</h3>
                              </Link>
                              <div className='w-12 h-[4px] bg-primary mb-5'></div>
                              <p className='text-sm text-gray-600'>{item.description}</p>
                          </div>
  
                          <div className='flex-shrink-0'>
                          <img src={item.image} alt="" className='w-full max-w-xs object-cover' />                          </div>
                      </div>
                  </SwiperSlide>
              ) )
          }
        </Swiper>
      </div>
    )
  }
  
  export default News