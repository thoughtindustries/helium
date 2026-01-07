import React from 'react';
import { addons, types } from '@storybook/manager-api';
import { AddonPanel } from '@storybook/components';
import { ApolloClientPanel } from './panel';
import { ADDON_ID, PARAM_KEY } from './constants';
import { useTitle } from './title';

addons.register(ADDON_ID, api => {
  addons.add(ADDON_ID, {
    paramKey: PARAM_KEY,
    render({ active = false }) {
      return (
        <AddonPanel active={active}>
          {active && api.getCurrentStoryData() ? <ApolloClientPanel /> : <div />}
        </AddonPanel>
      );
    },
    title: useTitle,
    type: types.PANEL
  });
});
