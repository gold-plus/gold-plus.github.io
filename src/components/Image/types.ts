export interface ImageItem {
  path: string;
  label?: string;
  desc?: string;
  preview?: React.ReactNode;
}

export interface ImageSliderProps {
  images: [ImageItem, ImageItem];
  buttonName: string;
  maskOpacity?: number; // modal overlay opacity
}

export interface ImagePreviewProps extends ImageSliderProps {
  autoplay?: boolean;
}

export interface ImageCompareProps extends ImageSliderProps {
  className?: string;
  boundsPadding?: number;
  portrait?: boolean;
}
