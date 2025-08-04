import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { PhotoProvider, PhotoView } from 'react-photo-view';

import 'swiper/css';
import 'swiper/css/pagination';
import 'react-photo-view/dist/react-photo-view.css';

import styles from './styles.module.css';
import Images from '@generated/docusaurus-plugin-home-preview-list/default/images.json';

export default function HomeHeaderHeroSlider() {
  const swiperRef = useRef<any>(null);
  const [visible, setVisible] = useState(false);

  const handleMouseEnter = () => {
    swiperRef.current?.autoplay?.stop();
  };

  const handleMouseLeave = () => {
    swiperRef.current?.autoplay?.start();
  };

  return (
    <div
      className={styles['wrapper']}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <PhotoProvider
        maskOpacity={0.9}
        onIndexChange={(newIndex) => { swiperRef.current?.slideToLoop?.(newIndex); }}
        onVisibleChange={(visible) => {
          setVisible(visible);
          if (visible) swiperRef.current?.autoplay?.stop();
          else swiperRef.current?.autoplay?.start();
        }}
      >
        <Swiper
          modules={[Pagination, Autoplay]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{
            clickable: true
          }}
          loop={true}
          spaceBetween={0}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          slidesPerView={1}
          className={styles['swiper']}
        >
          {Images.map((src, i) => (
            <SwiperSlide key={i}>
              <PhotoView src={src}>
                <img src={src} alt={`Preview ${i}`} className={styles['preview']} />
              </PhotoView>
            </SwiperSlide>
          ))}
        </Swiper>
      </PhotoProvider>
    </div>
  );
}
