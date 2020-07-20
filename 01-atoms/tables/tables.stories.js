import React from 'react';

import tables from './tables.twig';

/**
 * Storybook Definition.
 */
export default { title: 'Element Solutions/Atoms/Tables' };

export const table = () => (
  <div dangerouslySetInnerHTML={{ __html: tables({}) }} />
);
