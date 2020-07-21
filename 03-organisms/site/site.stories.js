import React from 'react';
import { useEffect } from '@storybook/client-api';

import siteFooter from './site-footer/site-footer.twig';
import siteHeaderTop from './site-header/site-header-top.twig';
import siteHeader from './site-header/site-header.twig';

import siteHeaderData from './site-header/site-header.yml';
import footerMenuData from './site-footer/site-footer.yml';
import breadcrumbData from '../../02-molecules/menus/breadcrumbs/breadcrumbs.yml';
import mainMenuData from '../../02-molecules/menus/main-menu/main-menu.yml';
import secondaryMenuData from '../../02-molecules/menus/secondary-menu/secondary-menu.yml';

import '../../02-molecules/menus/main-menu/main-menu';

import exampleLogoPath from '../../images/placeholder-logo.png';

// siteHeaderData.header__logo_src = "foo";

/**
 * Storybook Definition.
 */
export default { title: 'Element Solutions/Organisms/Site' };

export const headerTop = () => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: siteHeaderTop({
          ...secondaryMenuData,
        }),
      }}
    />
  );
};

export const header = () => {
  useEffect(() => Drupal.attachBehaviors(), []);
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: siteHeader({
          ...breadcrumbData,
          ...mainMenuData,
          ...siteHeaderData,
          ...exampleLogoPath,
        }),
      }}
    />
  );
};

export const footer = () => (
  <div
    dangerouslySetInnerHTML={{
      __html: siteFooter(footerMenuData),
    }}
  />
);
