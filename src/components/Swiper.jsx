import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import foto1 from '../assets/jpg/balabol.jpg'
import foto2 from '../assets/jpg/cashbek.jpg'
import foto3 from '../assets/jpg/fairy.jpg'
import foto4 from '../assets/jpg/futbolka.jpg'
import foto5 from '../assets/jpg/persil.jpg'
import foto6 from '../assets/jpg/shedroe-leto.jpg'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default () => {

    const swip = [
        { swip: foto1 },
        { swip: foto2 },
        { swip: foto3 },
        { swip: foto4 },
        { swip: foto5 },
        { swip: foto6 },

    ]

    return (
        <div className="w-[1200px] mx-auto rounded-md">
            <Swiper className='rounded-lg'
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                autoplay
                navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                {swip.map((s, i) => <SwiperSlide key={i}><img src={s.swip} alt="" /></SwiperSlide>)}
            </Swiper>
        </div>
    );
};