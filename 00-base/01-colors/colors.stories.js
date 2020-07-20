import React from 'react';

import colors from './colors.twig';

import colorsData from './colors.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Element Solutions/Base/Colors' };

export const Palettes = () => (
  <div dangerouslySetInnerHTML={{ __html: colors(colorsData) }} />
);
