import React from 'react';

import fullWidthTwig from './full-width.twig';

import mainMenu from '../02-molecules/menus/main-menu/main-menu.yml';
import footerMenus from '../03-organisms/site/site-footer/site-footer.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Templates/Layouts' };

export const fullWidth = () => (
  <div
    dangerouslySetInnerHTML={{
      __html: fullWidthTwig({
        ...mainMenu,
        ...footerMenus,
      }),
    }}
  />
);
