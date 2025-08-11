import React, { useEffect } from 'react';
import OriginalLayout from '@theme-original/Layout';
import { useAnchorScroll } from '../../hooks/useAnchorScroll';

function remToPx(rem) {
  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

export default function Layout(props) {
  const [navbarHeight, setNavbarHeight] = React.useState(60); // 60px

  React.useEffect(() => {
    const navbarHeightStr = getComputedStyle(document.documentElement).getPropertyValue('--ifm-navbar-height').trim();
    const navbarHeight = parseFloat(navbarHeightStr); // TODO: dunno, i am not sure if this is the right way
    setNavbarHeight(remToPx(navbarHeight));
  });

  useAnchorScroll(navbarHeight, 300);

  return <OriginalLayout {...props} />;
}
