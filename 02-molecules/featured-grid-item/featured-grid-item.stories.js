import React from 'react';

import featuredItemTwig from './featured-grid-item.twig';

import featuredItemFeaturedData from './featured-grid-item.yml';
import featuredItemNormalData from './featured-grid-item~featured.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Element Solutions/Molecules/Featured Grid Item' };

export const featuredItemFeatured = () => (
  <div
    dangerouslySetInnerHTML={{
      __html: featuredItemTwig(featuredItemFeaturedData),
    }}
  />
);

export const featuredItemNormal = () => (
  <div
    dangerouslySetInnerHTML={{
      __html: featuredItemTwig(featuredItemNormalData),
    }}
  />
);
