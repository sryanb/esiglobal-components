import React from 'react';
import { storiesOf } from '@storybook/react';
import { hrefTo } from '@storybook/addon-links';
import { useEffect } from '@storybook/client-api';

import '../../02-molecules/menus/main-menu/main-menu';

import home from './home.twig';

import mainMenuData from '../../02-molecules/menus/main-menu/main-menu.yml';
import footerMenuData from '../../03-organisms/site/site-footer/site-footer.yml';
import secondaryMenuData from '../../02-molecules/menus/secondary-menu/secondary-menu.yml';
import breadcrumbData from '../../02-molecules/menus/breadcrumbs/breadcrumbs.yml';
import appTrendMenuData from '../../02-molecules/app-trend-menu/app-trend-menu.yml';

/**
 * Storybook Definition.
 */
hrefTo('Pages/Content Types', 'Article').then(url => {
  // TODO: Can't figure out how to link pages with hrefTo and storiesOf.
  storiesOf('Pages/Landing Pages', module).add('Home', () => {
    useEffect(() => Drupal.attachBehaviors(), []);
    return (
      <div
        dangerouslySetInnerHTML={{
          __html: home({
            ...secondaryMenuData,
            ...mainMenuData,
            ...breadcrumbData,
            ...footerMenuData,
            ...appTrendMenuData,
            card_link_url: url,
            card__link__text: 'Click here',
          }),
        }}
      />
    );
  });
});
