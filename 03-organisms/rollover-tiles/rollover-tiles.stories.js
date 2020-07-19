import React from 'react';

import rolloverTilesTwig from './rollover-tiles.twig';

import rolloverTilesData from './rollover-tiles.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Organisms/Rollover Tiles' };

export const rolloverTiles = () => (
  <div
    dangerouslySetInnerHTML={{ __html: rolloverTilesTwig(rolloverTilesData) }}
  />
);
