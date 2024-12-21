import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "./marketing.scss"

const Marketing = () => {
    const items = [
        {
            id: 1,
            img: "https://static-basket-01.wbbasket.ru/vol1/crm-bnrs/bners1/2880_ng_na_wb.webp"
        },
        {
            id: 2,
            img: "https://static-basket-01.wbbasket.ru/vol1/crm-bnrs/adsf/1734679479573838174.webp"
        },
        {
            id: 3,
            img: "https://static-basket-01.wbbasket.ru/vol1/crm-bnrs/bners1/2880.webp"
        },
        {
            id: 4,
            img: "https://static-basket-01.wbbasket.ru/vol1/crm-bnrs/bners1/shine-2880_silver.webp"
        },
        {
            id: 5,
            img: "https://static-basket-01.wbbasket.ru/vol1/crm-bnrs/bners1/million_2880_2.webp"
        },
        {
            id: 6,
            img: "https://static-basket-01.wbbasket.ru/vol1/crm-bnrs/bners1/wb_courier_2880.webp"
        },
        {
            id: 7,
            img: "https://static-basket-01.wbbasket.ru/vol1/crm-bnrs/bners1/elki_2880.webp"
        }
    ]
  return (
    <div className="container">
        <div className='marketing'>
        <div className="marketing__one">
            <img src="https://static-basket-01.wbbasket.ru/vol1/crm-bnrs/bners1/million_2880_80211224.webp" alt="banner" />
        </div>
        <div className="marketing__two">
            <Swiper
            spaceBetween={0}
            slidesPerView={1}
            loop={true} // Зацикливает слайды
            autoplay={{ delay: 5000, disableOnInteraction: true }} // Автопрокрутка
        >
            {items.map((obj, index) => (
            <SwiperSlide key={index}>
                <img src={obj.img} alt={`banner ${index + 1}`} />
            </SwiperSlide>
            ))}
        </Swiper>
        </div>
    </div>
    </div>
  )
}

export default Marketing