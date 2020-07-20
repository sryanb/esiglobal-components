import React from 'react';

import placeHolderTwig from './place-holder.twig';

/**
 * Storybook Definition.
 */
export default { title: 'Element Solutions/Templates/Place Holder' };

export const placeHolder = () => (
  <div dangerouslySetInnerHTML={{ __html: placeHolderTwig({}) }} />
);
