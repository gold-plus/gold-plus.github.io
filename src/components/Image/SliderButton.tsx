import { useState, useEffect, useCallback, useMemo, HTMLAttributes, FC } from 'react';
import { PhotoSlider } from 'react-photo-view';
import { ImageCompare } from './Compare';
import { useCopyToClipboard } from '@site/src/hooks/useCopyToClipboard';
import { useFullscreen } from '@site/src/hooks/useFullscreen';
import type { SliderButtonProps, ImageItem } from './types';
import { FullScreenIcon } from './FullScreenIcon';

import Translate from '@docusaurus/Translate';
import styles from './styles.module.css';

const initial_pos_slider_comparison = 50;

export const SliderButton: FC<SliderButtonProps> = ({
  slides,
  buttonName,
  maskOpacity = 0.9
}) => {
  const { isCopied, copy } = useCopyToClipboard();
  const { isFullscreen, toggleFullscreen } = useFullscreen();
  const [visible, setVisible] = useState(false);
  const [index, setIndex] = useState(0);
  const [position, setPosition] = useState(initial_pos_slider_comparison);
  const [activeCompareIndex, setActiveCompareIndex] = useState<number | null>(null);

  if (!slides || !slides.length) {
    return null;
  }

  const onIndexChange = useCallback((newIndex: number) => {
    setActiveCompareIndex(null);
    setIndex(newIndex);
    //setPosition(initial_pos_slider_comparison);
  }, [setActiveCompareIndex]);

  const onOpen = useCallback(() => {
    setIndex(0);
    setVisible(true);
  }, []);

  const onClose = useCallback(() => {
    setVisible(false)
  }, []);

  const onPositionChange = useCallback((pos: number) => {
    if (pos < 50) setActiveCompareIndex(0); // before
    else if (pos > 50) setActiveCompareIndex(1); // after
    else setActiveCompareIndex(null);
    setPosition(pos);
  }, []);

  const slidesWithKeys  = useMemo(() => slides.map((slide, index) => {
    if (slide.key) return slide;
    let newKey: string | number;
    switch (slide.type) {
      case 'image':
      case 'video':
        newKey = slide.path;
        break;
      case 'compare':
        newKey = slide.images[0].path + slide.images[1].path;
        break;
      default:
        newKey = `slide-${index}`;
        break;
    }

    return { ...slide, key: newKey };
  }), [slides]);

  if (!slidesWithKeys || !slidesWithKeys.length) {
    return null;
  }
  const images = slidesWithKeys.map(slide => {
    if (slide.type === 'image' || slide.type === 'video') {
      return { key: slide.key, src: slide.path };
    }

    return {
      key: slide.key,
      render: () => {
        // stop event propagation touchmove on touch device for image comparison,
        // it prevents swipe event up to PhotoSlider because image comparison have own slider
        const stopSwipePropagation = (e: React.TouchEvent) => { e.stopPropagation(); };
        return (
          <div
            onTouchStart={stopSwipePropagation}
            onTouchMove={stopSwipePropagation}
          >
            <ImageCompare
              images={slide.images}
              boundsPadding={slide.boundsPadding}
              className={slide.className}
              portrait={slide.portrait}
              onPositionChange={onPositionChange}
              position={position}
            />
          </div>
        );
      }
    };
  });

  return (
    <>
      <button className={styles['modal-btn-open']} onClick={onOpen}>
        {buttonName}
      </button>
      <PhotoSlider
        images={images}
        visible={visible}
        onClose={onClose}
        index={index}
        onIndexChange={onIndexChange}
        maskOpacity={maskOpacity}
        toolbarRender={({ rotate, onRotate, onScale, scale, index }) => {
          return (
            <>
              {document.fullscreenEnabled && <FullScreenIcon />}
            </>
          );
        }}
        overlayRender={({ index: currentIndex }) => {
          const currentSlide = slidesWithKeys[currentIndex];
          if (!currentSlide) return null;

          if (currentSlide.type === 'compare') {
            // content of comparison image/video
            const [before, after] = currentSlide.images;
            const renderContent = (item: ImageItem, opacity) => (
              <div className={styles['banner-bottom-layer']} style={{ opacity: opacity }}>
                {item.desc && <span className={styles['banner-bottom--desc']}>{item.desc}</span>}
                {item.label && <span className={styles['banner-bottom--label']}>{item.label}</span>}
                {item.preview && <span className={styles['banner-bottom--preview']}>{item.preview}</span>}
              </div>
            );

            return (
              <BottomBar
                isCopied={isCopied}
                onClick={() => copy(activeCompareIndex === 1 ? before.label : after.label)}
                className={activeCompareIndex === null ? styles['select-none'] : ''}
              >
                {renderContent(before, activeCompareIndex === 1 ? 1 : 0)}
                {renderContent(after, activeCompareIndex === 0 ? 1 : 0)}
              </BottomBar>
            );

          } else {
            // content of a regular image/video
            return (
              <BottomBar
                isCopied={isCopied}
                onClick={() => copy(currentSlide.label)}
              >
                {currentSlide.desc && <span className={styles['banner-bottom--desc']}>{currentSlide.desc}</span>}
                {currentSlide.label && <span className={styles['banner-bottom--label']}>{currentSlide.label}</span>}
              </BottomBar>
            );
          }
        }}
      />
    </>
  );
}

const BottomBar: FC<{
  onClick: (e: React.MouseEvent) => void;
  isCopied: boolean;
  className?: string;
  children: React.ReactNode;
}> = ({ onClick, isCopied, className, children }) => {
  return (
    <div className={`${styles['banner-bottom']} ${className || ''}`}>
      <div className={styles['banner-bottom-wrapper']} onClick={onClick}>
        {children}
      </div>
      {isCopied && (
        <span className={styles['copy-feedback']}>
          <Translate id="theme.common.copyFeedback">Text copied to clipboard</Translate>!
        </span>
      )}
    </div>
  );
};
