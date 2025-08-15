import { useState, useEffect, useCallback, useMemo, HTMLAttributes, FC } from 'react';
import { PhotoSlider } from 'react-photo-view';
import { ImageCompare } from './Compare';
import { useCopyToClipboard } from '@site/src/hooks/useCopyToClipboard';
import type { SliderButtonProps, ImageItem } from './types';

import Translate from '@docusaurus/Translate';
import styles from './styles.module.css';

const initial_pos_slider_comparison = 50;

export const SliderButton: FC<SliderButtonProps> = ({
  slides,
  buttonName,
  maskOpacity = 0.9
}) => {
  const { isCopied, copy } = useCopyToClipboard();
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
    setPosition(initial_pos_slider_comparison);
  }, [setActiveCompareIndex, setPosition]);

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
      render: () => (
        <ImageCompare
          images={slide.images}
          boundsPadding={slide.boundsPadding}
          className={slide.className}
          portrait={slide.portrait}
          onPositionChange={onPositionChange}
          position={position}
        />
      ),
    };
  });

  function toggleFullScreen() {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      const element = document.querySelector('.PhotoView-Portal');
      if (element) {
        element.requestFullscreen();
      }
    }
  }

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
              {document.fullscreenEnabled && <FullScreenIcon onClick={toggleFullScreen} />}
            </>
          );
        }}
        overlayRender={({ index: currentIndex }) => {
          const currentSlide = slidesWithKeys[currentIndex];
          if (!currentSlide) return null;

          // content of comparison image/video
          if (currentSlide.type === 'compare') {
            const [before, after] = currentSlide.images;
            const renderContent = (item: ImageItem) => (
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
                <div className={styles['banner-bottom-wrapper']} onClick={(e) => copy(activeCompareIndex === 0 ? before.label : after.label)}>
                  <div className={styles['banner-bottom-layer']} style={{ opacity: activeCompareIndex === 0 ? 1 : 0 }}>
                    {renderContent(before)}
                  </div>
                  <div className={styles['banner-bottom-layer']} style={{ opacity: activeCompareIndex === 1 ? 1 : 0 }}>
                    {renderContent(after)}
                  </div>
                </div>
                {isCopied && <span className={styles['copy-feedback']}><Translate id="theme.common.copyFeedback">Text copied to clipboard</Translate>!</span>}
              </div>
            );
          }

          // content of a regular image/video
          return (
            <div className={styles['banner-bottom']}>
              {currentSlide.desc && <span className={styles['banner-bottom--desc']}>{currentSlide.desc}</span>}
              {currentSlide.label && <span className={styles['banner-bottom--label']}>{currentSlide.label}</span>}
            </div>
          );
        }}
      />
    </>
  );
}

const FullScreenIcon = (props: HTMLAttributes<any>) => {
  const [fullscreen, setFullscreen] = useState<boolean>(false);
  useEffect(() => {
    document.onfullscreenchange = () => {
      setFullscreen(Boolean(document.fullscreenElement));
    };
  }, []);
  return (
    <svg className="PhotoView-Slider__toolbarIcon" fill="white" width="44" height="44" viewBox="0 0 768 768" {...props}>
      {fullscreen ? (
        <path d="M511.5 256.5h96v63h-159v-159h63v96zM448.5 607.5v-159h159v63h-96v96h-63zM256.5 256.5v-96h63v159h-159v-63h96zM160.5 511.5v-63h159v159h-63v-96h-96z" />
      ) : (
        <path d="M448.5 160.5h159v159h-63v-96h-96v-63zM544.5 544.5v-96h63v159h-159v-63h96zM160.5 319.5v-159h159v63h-96v96h-63zM223.5 448.5v96h96v63h-159v-159h63z" />
      )}
    </svg>
  );
};
