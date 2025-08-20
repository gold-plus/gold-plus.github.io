import React, { useRef, useState } from 'react';
import { Preview } from '@site/src/components/Image/Preview';
import Images from '@generated/docusaurus-plugin-home-preview-list/default/images.json';

export default function HomeHeaderHeroSlider() {
  return (
    <Preview images={Images} />
  );
}
