import React, {type ReactNode} from 'react';

import type {Props} from './types';

import RU from '@site/static/img/locale/ru.svg';
import EN from '@site/static/img/locale/en.svg';

export default function IconLanguageFlag({locale}: Props): ReactNode {
  switch (locale) {
    case 'ru':
      return <div className='icon-flag'><RU/></div>;
    case 'en':
      return <div className='icon-flag'><EN/></div>;
    default:
      return null;
  }
}
