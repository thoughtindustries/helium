import React from 'react';
import { addons, types } from '@storybook/addons';
import { AddonPanel } from '@storybook/components';
import { ApolloClientPanel } from './panel';
import { ADDON_ID, PARAM_KEY } from './constants';
import { useTitle } from './title';

addons.register(ADDON_ID, api => {
  addons.add(ADDON_ID, {
    paramKey: PARAM_KEY,
    render({ active = false, key }) {
      return (
        <AddonPanel key={key} active={active}>
          {!active || !api.getCurrentStoryData() ? null : <ApolloClientPanel />}
        </AddonPanel>
      );
    },
    title: useTitle,
    type: types.PANEL
  });
});
