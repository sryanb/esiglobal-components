import React from 'react';

import motion from './motion.twig';

import motionData from './motion.yml';

/**
 * Add storybook definition for Animations.
 */
export default { title: 'Element Solutions/Base/Motion' };

export const Usage = () => (
  <div
    dangerouslySetInnerHTML={{
      __html: motion(motionData),
    }}
  />
);
