import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import wp1 from '../../resources/img/wp1.jpeg';
import wp2 from '../../resources/img/wp2.jpeg';
import wp3 from '../../resources/img/wp3.jpeg';
import wp4 from '../../resources/img/wp4.jpeg';

const items = [
    <img src="https://www.ethnicplus.in/media/mageplaza/bannerslider/banner/image/1/0/10_5.jpg" alt=""
         className="cursor-pointer -z-10" role="presentation"/>,
    <img src="https://www.ethnicplus.in/media/mageplaza/bannerslider/banner/image/2/_/2_9.jpg" alt=""
         className="cursor-pointer -z-10"  role="presentation"/>,
    <img src="https://www.ethnicplus.in/media/mageplaza/bannerslider/banner/image/4/_/4_8.jpg" alt=""
         className="cursor-pointer -z-10" role="presentation"/>,
    <img src="https://www.ethnicplus.in/media/mageplaza/bannerslider/banner/image/1/0/10_5.jpg" alt=""
         className="cursor-pointer -z-10" role="presentation"/>
];

const MainCarousel = () => (
    <div >
        <AliceCarousel
            items={items}
            disableButtonsControls
            autoPlay
            autoPlayInterval="2000"
            infinite
        />
    </div>

);

export default MainCarousel;