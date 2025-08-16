import React from 'react';
import { ReactCompareSlider, ReactCompareSliderImage, ReactCompareSliderHandle } from 'react-compare-slider';
import styles from './styles.module.css';
import type { ImageItem } from './types';
import type { ReactCompareSliderPropPosition } from 'react-compare-slider';

interface ImageCompareProps {
  images: [ImageItem, ImageItem]; // [0] = before, [1] = after
  className?: string;
  boundsPadding?: number;
  portrait?: boolean;
  position?: number;
  onPositionChange: (position: ReactCompareSliderPropPosition) => void;
}

export const ImageCompare: React.FC<ImageCompareProps> = ({
  images,
  className,
  boundsPadding = 0,
  portrait = false,
  position = 50,
  onPositionChange
}) => {
  const [before, after] = images;
  return (
    <div className={`${styles['modal-content']}`}>
      <ReactCompareSlider
        className={className ? styles[className] : undefined}
        boundsPadding={boundsPadding}
        portrait={portrait}
        clip="both"
        position={position}
        onPositionChange={onPositionChange}
        itemOne={<ReactCompareSliderImage src={before.path} alt={before.desc} />}
        itemTwo={<ReactCompareSliderImage src={after.path} alt={after.desc} />}
        handle={
          <ReactCompareSliderHandle
            portrait={portrait}
            buttonStyle={{
              backdropFilter: 'none',
              WebkitBackdropFilter: 'none',
              backgroundColor: 'white',
              color: '#444',
              border: 0,
            }}
          />
        }
      />
    </div>
  );
};
