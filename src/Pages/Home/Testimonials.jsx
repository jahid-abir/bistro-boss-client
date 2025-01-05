import { useEffect, useState } from "react";
import SectionTitle from "../../Components/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import { FaQuoteLeft } from "react-icons/fa";


const Testimonials = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [])
    return (
        <section>
            <div>
                <SectionTitle subTitle={'What Our Client Say'} title={'testimonials'} />
            </div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <div className="">
                    {
                        reviews.map(review => <SwiperSlide key={review._id}>
                            <div className="mx-24 my-16 flex flex-col items-center justify-center gap-4">
                                <FaQuoteLeft className="text-6xl"/>
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                                <p>{review.details}</p>
                                <h2 className="text-2xl text-orange-400">{review.name}</h2>
                            </div>
                        </SwiperSlide>)
                    }
                </div>
            </Swiper>
        </section>
    );
};

export default Testimonials;