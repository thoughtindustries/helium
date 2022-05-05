import React from 'react';
import { NavigationBar, NavigationBarLink } from '../src';

export default {
  title: 'Example/NavigationBar'
};

export const Base = () => (
  <NavigationBar>
    <NavigationBarLink label="Link 1">
      <NavigationBarLink.SubLink label="Sub link 1-1" href="/sublink-1-1" linkOpenInNewTab />
      <NavigationBarLink.SubLink label="Sub link 1-2" href="/sublink-1-2" />
    </NavigationBarLink>
    <NavigationBarLink label="Link 2" href="/link-2" linkOpenInNewTab />
    <NavigationBarLink label="Link 3">
      <NavigationBarLink.SubLink label="Sub link 3-1" href="/sublink-3-1" linkOpenInNewTab />
      <NavigationBarLink.SubLink label="Sub link 3-2" href="/sublink-3-2" />
    </NavigationBarLink>
    <NavigationBarLink label="Link 4" href="/link-4" />
  </NavigationBar>
);
