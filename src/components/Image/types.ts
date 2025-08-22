
export interface ImageItem {
  path: string;
  label?: string;
  desc?: string;
  preview?: any;
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

interface PreviewConfig {
  zoom: string;
  position: string;
}

export interface GridPosition {
  column: string;
  row: string;
}

export interface GridLayout {
  columns: string;
  rows: string;
  gap?: string;
}

export interface ThumbnailItem {
  path: string;
  zoom: string;
  position: string;
  grid?: GridPosition;
}

export interface ImagePreviewItem {
  path?: string;
  preview?: PreviewConfig;
  thumbnails?: ThumbnailItem[];
  layout?: GridLayout;
}

export interface PreviewProps {
  images: ImagePreviewItem[];
  maskOpacity?: number; // modal overlay opacity
  autoplay?: boolean;
}
