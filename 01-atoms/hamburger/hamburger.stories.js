import React from 'react';

import hamburgerTwig from './hamburger.twig';

/**
 * Storybook Definition.
 */
export default { title: 'Element Solutions/Atoms/Hamburger' };

export const hamburgerExample = () => (
  <div dangerouslySetInnerHTML={{ __html: hamburgerTwig({}) }} />
);
