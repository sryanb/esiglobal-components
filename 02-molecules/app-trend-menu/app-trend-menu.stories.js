import React from 'react';

import appTrendMenuTwig from './app-trend-menu.twig';
import appTrendMenuData from './app-trend-menu.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/App Trend Menu' };

export const appTrendExample = () => (
  <div
    dangerouslySetInnerHTML={{ __html: appTrendMenuTwig(appTrendMenuData) }}
  />
);
