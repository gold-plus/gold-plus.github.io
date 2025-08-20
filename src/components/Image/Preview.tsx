// src\components\Image\Preview.tsx
import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { PhotoProvider, PhotoView } from 'react-photo-view';

import 'swiper/css';
import 'swiper/css/pagination';
import 'react-photo-view/dist/react-photo-view.css';

import styles from './styles.module.css';
import type { PreviewProps } from './types';

function ZoomPreviewThumbnail({ imageData }) {
  const style = {
    backgroundImage: `url(${imageData.path})`,
    backgroundSize: imageData.preview.zoom,
    backgroundPosition: imageData.preview.position,
    width: '100%',
    height: '100%',
    cursor: 'pointer',
    backgroundRepeat: 'no-repeat',
  };
  return <div className={styles['preview']} style={style} />;
}

export const Preview: React.FC<PreviewProps> = ({
  images,
  autoplay = true,
  maskOpacity = 0.9
}) => {
  const swiperRef = useRef<any>(null);
  const [visible, setVisible] = useState(false);
  const [index, setIndex] = useState(0);

  const onMouseEnter = () => { swiperRef.current?.autoplay?.stop(); };
  const onMouseLeave = () => { swiperRef.current?.autoplay?.start(); };

  return (
    <PhotoProvider
      maskOpacity={maskOpacity}
      onIndexChange={(newIndex) => {
        swiperRef.current?.slideToLoop?.(newIndex);
      }}
      onVisibleChange={(visible) => {
        setVisible(visible);
        if (visible) swiperRef.current?.autoplay?.stop();
        else swiperRef.current?.autoplay?.start();
      }}
    >
      <div
        className={styles['wrapper']}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <Swiper
          modules={[Pagination, Autoplay]}
          autoplay={autoplay ? { delay: 5000, disableOnInteraction: false } : false }
          pagination={{ clickable: true }}
          loop={true}
          spaceBetween={1}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          slidesPerView={1}
          className={styles['swiper']}
        >
          {images.map((item, i) => (
            <SwiperSlide key={i}>
              <PhotoView src={item.path}>
                <div className={styles['preview-overlay']}>
                  <ZoomPreviewThumbnail imageData={item} />
                </div>
              </PhotoView>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </PhotoProvider>
  );
}
