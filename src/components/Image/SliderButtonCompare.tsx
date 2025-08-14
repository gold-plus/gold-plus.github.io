import React, { useState, useEffect, useCallback } from 'react';
import { ReactCompareSlider, ReactCompareSliderImage, ReactCompareSliderHandle } from 'react-compare-slider';
import { PhotoProvider, PhotoView } from 'react-photo-view';

import type { ImageCompareProps, ImageItem } from './types';

import styles from './styles.module.css';

import 'react-photo-view/dist/react-photo-view.css';

export const SliderButtonCompare: React.FC<ImageCompareProps> = ({
  images,
  maskOpacity = 0.9,
  className,
  buttonName,
  boundsPadding = 0,
  portrait = false
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);
  const onPositionChange = useCallback((pos) => {
    if (pos < 50) {
      setActiveImageIndex(0);
    } else if (pos > 50) {
      setActiveImageIndex(1);
    } else {
      setActiveImageIndex(null);
    }
  }, [setActiveImageIndex]);

  return (
    <PhotoProvider
      maskOpacity={maskOpacity}
      overlayRender={({ index }) => {
        const renderContent = (item: ImageItem | null) => (
          item && (
            <>
              {item.desc && <span className={styles['banner-bottom--desc']}>{item.desc}</span>}
              {item.label && <span className={styles['banner-bottom--label']}>{item.label}</span>}
              {item.preview && <span className={styles['banner-bottom--preview']}>{item.preview}</span>}
            </>
          )
        );
        return (
          <div className={styles['banner-bottom']}>
            <div className={styles['banner-bottom-wrapper']}>
              <div className={`${styles['banner-bottom-layer']}`} style={{ opacity: activeImageIndex === 0 ? 1 : 0 }}>
                {renderContent(images[0])}
              </div>
              <div className={styles['banner-bottom-layer']} style={{ opacity: activeImageIndex === 1 ? 1 : 0 }}>
                {renderContent(images[1])}
              </div>
            </div>
          </div>
        );
      }}
    >
      <PhotoView
        render={({ scale, attrs }) => {
          return <div className={`${styles['modal-content']}`}
            >
            <ReactCompareSlider
              className={styles[className]}
              boundsPadding={boundsPadding}
              portrait={portrait}
              clip="both"
              keyboardIncrement="5%"
              position={50}
              onPositionChange={onPositionChange}
              itemOne={
                  <ReactCompareSliderImage src={images[1].path}/>
              }
              itemTwo={
                  <ReactCompareSliderImage src={images[0].path}/>
              }
              handle={<ReactCompareSliderHandle portrait={portrait}
                buttonStyle={{
                  backdropFilter: undefined,
                  WebkitBackdropFilter: undefined,
                  backgroundColor: 'white',
                  color: '#444',
                  boxShadow: undefined,
                  border: 0
                }}
              />}
            />
          </div>
        }}
      >
      <button className={styles['modal-btn-open']}>{buttonName}</button>
      </PhotoView>
    </PhotoProvider>
  );
};
