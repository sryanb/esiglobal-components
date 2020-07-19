import React from 'react';

import cta from './cta.twig';

import ctaData from './cta.yml';
import ctaSecondaryData from './cta~secondary.yml';
import ctaSecondaryLightData from './cta~secondary-light.yml';
import ctaFlippedData from './cta~flipped.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/CTA' };

export const ctaPrimary = () => (
  <div dangerouslySetInnerHTML={{ __html: cta(ctaData) }} />
);

export const ctaSecondary = () => (
  <div dangerouslySetInnerHTML={{ __html: cta(ctaSecondaryData) }} />
);

export const ctaSecondaryLight = () => (
  <div dangerouslySetInnerHTML={{ __html: cta(ctaSecondaryLightData) }} />
);

export const ctaFlipped = () => (
  <div dangerouslySetInnerHTML={{ __html: cta(ctaFlippedData) }} />
);
