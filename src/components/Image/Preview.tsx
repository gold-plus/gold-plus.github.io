import React, { useRef, useState, useMemo } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { FullScreenIcon } from './FullScreenIcon';

import 'swiper/css';
import 'swiper/css/pagination';
import 'react-photo-view/dist/react-photo-view.css';

import styles from './styles.module.css';
import type { PreviewProps } from './types';

function Thumbnail({
  imageData,
  className = '',
}: {
  imageData: { path: string; preview: { zoom: string; position: string } };
  className?: string
}) {
  const baseStyle: React.CSSProperties = {
    backgroundImage: `url(${imageData.path})`,
    backgroundSize: imageData.preview.zoom,
    backgroundPosition: imageData.preview.position,
    width: '100%',
    height: '100%',
    backgroundRepeat: 'no-repeat'
  };
  return <div className={className} style={baseStyle} />;
}

export const Preview: React.FC<PreviewProps> = ({
  images,
  autoplay = true,
  maskOpacity = 0.9
}) => {
  const swiperRef = useRef<any>(null);
  const [visible, setVisible] = useState(false);
  const [index, setIndex] = useState(0);

  const onMouseEnter = () => { if (autoplay) swiperRef.current?.autoplay?.stop(); };
  const onMouseLeave = () => { if (autoplay) swiperRef.current?.autoplay?.start(); };
  const photoIndexToSwiperIndex = useMemo(() => {
    const map = [];
    let photoIndex = 0;
    images.forEach((item, swiperIndex) => {
      if (item.path) {
        map[photoIndex++] = swiperIndex;
      } else if (item.thumbnails) {
        item.thumbnails.forEach(() => {
          map[photoIndex++] = swiperIndex;
        });
      }
    });
    return map;
  }, [images]);

  return (
    <PhotoProvider
      maskOpacity={maskOpacity}
      onIndexChange={(newIndex) => {
        const targetSwiperIndex = photoIndexToSwiperIndex[newIndex];
        if (swiperRef.current?.realIndex !== targetSwiperIndex) {
          swiperRef.current?.slideToLoop?.(targetSwiperIndex);
        }
      }}
      onVisibleChange={(visible) => {
        setVisible(visible);
        if (visible) swiperRef.current?.autoplay?.stop();
        else if (autoplay) swiperRef.current?.autoplay?.start();
      }}
      toolbarRender={({ rotate, onRotate, onScale, scale, index }) => {
        return (
          <>
            {document.fullscreenEnabled && <FullScreenIcon />}
          </>
        );
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
          className={styles['swiper-main']}
        >
          {images.map((item, swiperIndex) => (
            <SwiperSlide key={swiperIndex}>
              {item.thumbnails ? (
                () => {
                  const gridContainerStyle: React.CSSProperties = item.layout
                    ? {
                        display: 'grid',
                        gridTemplateColumns: item.layout.columns,
                        gridTemplateRows: item.layout.rows,
                        gap: item.layout.gap || '2px',
                        width: '100%',
                        height: '100%'
                      }
                    : {};

                  return (
                    <div
                      className={!item.layout ? styles['thumbnail--grid'] : ''}
                      style={gridContainerStyle}
                    >
                      {item.thumbnails.map((thumb, thumbIndex) => {
                        return (
                          <div key={thumbIndex} style={{ gridColumn: thumb.grid?.column, gridRow: thumb.grid?.row }}>
                            <PhotoView src={thumb.path}>
                              <div className={styles['thumbnail--overlay']}>
                                <Thumbnail
                                  className={styles['thumbnail--tile']}
                                  imageData={{
                                    path: thumb.path,
                                    preview: { zoom: thumb.zoom, position: thumb.position }
                                  }}
                                />
                              </div>
                            </PhotoView>
                          </div>
                        );
                      })}
                    </div>
                  );
                }
              )() : (
                <PhotoView src={item.path}>
                  <div className={styles['thumbnail--overlay']}>
                    <Thumbnail
                      imageData={{
                        path: item.path,
                        preview: item.preview || { zoom: 'cover', position: 'center' }
                      }}
                    />
                  </div>
                </PhotoView>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </PhotoProvider>
  );
}
