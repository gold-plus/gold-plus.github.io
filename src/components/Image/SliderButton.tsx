import React, { useRef, useState } from 'react';

import { PhotoSlider } from 'react-photo-view';

import 'swiper/css';
import 'swiper/css/pagination';
import 'react-photo-view/dist/react-photo-view.css';

import styles from './styles.module.css';
import type { ImageSliderButtonProps } from './types';

export const SliderButton: React.FC<ImageSliderButtonProps> = ({
  images,
  buttonName,
  maskOpacity = 0.9
}) => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <button className={styles['modal-btn-open']} onClick={() => setVisible(true)}>{buttonName}</button>
      <PhotoSlider
        images={images.map((item, i) => ({ src: item.path, key: i }))}
        onClose={() => setVisible(false)}
        visible={visible}
        maskOpacity={maskOpacity}
        overlayRender={({ index }) => {
          const item = images[index];
          return (
            <div className={styles['banner-bottom']}>
              {item.desc && <span className={styles['banner-bottom--desc']}>{item.desc}</span>}
              {item.label && <span className={styles['banner-bottom--label']}>{item.label}</span>}
              {item.preview && <span className={styles['banner-bottom--preview']}>{item.preview}</span>}
            </div>
          );
        }}
      />
    </>
  );
}
