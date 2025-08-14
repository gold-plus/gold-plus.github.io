export interface ImageItem {
  path: string;
  label?: string;
  desc?: string;
  preview?: React.ReactNode;
}

export interface ImageSliderProps {
  images: [ImageItem, ImageItem];
  maskOpacity?: number; // modal overlay opacity
}

export interface ImagePreviewProps extends ImageSliderProps {
  autoplay?: boolean;
}
export interface ImageSliderButtonProps extends ImageSliderProps {
  buttonName: string;
}
export interface ImageSliderCompButtonProps extends ImageSliderButtonProps {
  className?: string;
  boundsPadding?: number;
  portrait?: boolean;
}
