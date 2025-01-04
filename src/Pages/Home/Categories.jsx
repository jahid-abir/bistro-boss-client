import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import slide1 from '../../assets/home/slide1.jpg'
import slide2 from '../../assets/home/slide2.jpg'
import slide3 from '../../assets/home/slide3.jpg'
import slide4 from '../../assets/home/slide4.jpg'
import slide5 from '../../assets/home/slide5.jpg'
import SectionTitle from '../../Components/SectionTitle';
const Categories = () => {
    return (
        <section>
          <SectionTitle subTitle={'From 11:00am to 10:00pm'} title={'ORDER ONLINE'}/>
          <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper max-w-6xl my-16"
      >
        <SwiperSlide>
            <img src={slide1} alt="" />
            <h3 className='text-3xl font-semibold text-white -mt-24 mr-16 uppercase text-center'>Salad</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide2} alt="" />
            <h3 className='text-3xl font-semibold text-white -mt-24 mr-16 uppercase text-center'>Pizza</h3>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slide3} alt="" />
        <h3 className='text-3xl font-semibold text-white -mt-24 mr-16 uppercase text-center'>soups</h3>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slide4} alt="" />
        <h3 className='text-3xl font-semibold text-white -mt-24 mr-16 uppercase text-center'>desert</h3>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slide5} alt="" />
        <h3 className='text-3xl font-semibold text-white -mt-24 mr-16 uppercase text-center'>Salad</h3>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slide3} alt="" />
        <h3 className='text-3xl font-semibold text-white -mt-24 mr-16 uppercase text-center'>soups</h3>
        </SwiperSlide>
        
      </Swiper>
        </section>
    );
};

export default Categories;