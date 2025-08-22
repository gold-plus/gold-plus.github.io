import { useState, useEffect, useCallback } from 'react';

export function useFullscreen(targetSelector: string = '.PhotoView-Portal') {
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenEnabled) {
      console.warn('Fullscreen API is not supported by this browser.');
      return;
    }

    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      const element = document.querySelector(targetSelector);
      if (element) {
        element.requestFullscreen().catch((err) => {
          console.error(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
        });
      } else {
        console.warn(`Fullscreen target element not found: ${targetSelector}`);
      }
    }
  }, [targetSelector]);

  useEffect(() => {
    setIsFullscreen(!!document.fullscreenElement);

    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  return { isFullscreen, toggleFullscreen };
}
