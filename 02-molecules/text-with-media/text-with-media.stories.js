import React from 'react';

import textWithMedia from './text-with-media.twig';

import textWithMediaData from './text-with-media.yml';
import textWithMediaReversedData from './text-with-media~reverse.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Element Solutions/Molecules/Text with Media' };

export const textWithMediaExample = () => (
  <div
    dangerouslySetInnerHTML={{
      __html: textWithMedia(textWithMediaData),
    }}
  />
);

export const textWithMediaReversed = () => (
  <div
    dangerouslySetInnerHTML={{
      __html: textWithMedia(textWithMediaReversedData),
    }}
  />
);
