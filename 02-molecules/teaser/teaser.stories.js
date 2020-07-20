import React from 'react';

import teaser from './teaser.twig';

import teaserData from './teaser.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Element Solutions/Molecules/Teaser' };

export const teaserExample = () => (
  <div dangerouslySetInnerHTML={{ __html: teaser(teaserData) }} />
);
