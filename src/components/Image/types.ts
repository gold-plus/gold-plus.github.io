export interface ImageItem {
  path: string;
  label?: string;
  desc?: string;
  preview?: React.ReactNode;
}

export type CompositeSlideItem = {
  key?: string | number;
} & (
  | {
      type: 'image';
      path: string;
      label?: string;
      desc?: string;
    }
  | {
      type: 'video';
      path: string;
      label?: string;
      desc?: string;
    }
  | {
      type: 'compare';
      images: [ImageItem, ImageItem]; // [0] = before, [1] = after
      boundsPadding?: number;
      className?: string;
      portrait?: boolean;
    }
);

export interface SliderButtonProps {
  slides: CompositeSlideItem[];
  buttonName: string;
  maskOpacity?: number;
}

export interface PreviewProps {
  images: ImageItem[];
  maskOpacity?: number; // modal overlay opacity
  autoplay?: boolean;
}
