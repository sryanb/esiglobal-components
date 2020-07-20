import React from 'react';

import button from './button.twig';

import buttonData from './button.yml';
import buttonAltData from './button~alt.yml';
import buttonOutlineWhiteData from './button~outline-white.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Element Solutions/Atoms/Button' };

export const buttonPrimarySolid = () => (
  <div dangerouslySetInnerHTML={{ __html: button(buttonData) }} />
);

export const buttonSecondarySolid = () => (
  <div dangerouslySetInnerHTML={{ __html: button(buttonAltData) }} />
);

export const buttonOutlineWhite = () => (
  <div dangerouslySetInnerHTML={{ __html: button(buttonOutlineWhiteData) }} />
);
