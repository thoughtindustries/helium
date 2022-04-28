# `@thoughtindustries/navigation-bar`

> The Navigation Bar widget is a simple way to add standard horizontal navigation to any page. To share even more options with learners, add a drop-down sub-menu.

## Import component

```
import { NavigationBar, NavigationBarLink } from '@thoughtindustries/navigation-bar';
```

## Usage

```
<NavigationBar>
  <NavigationBarLink label="Link 1">
    <NavigationBarLink.SubLink label="Sub link 1" href="/sublink-1" linkOpenInNewTab={true} />
    <NavigationBarLink.SubLink label="Sub link 2" href="/sublink-2" />
  </NavigationBarLink>
  <NavigationBarLink label="Link 2" href="/link-2" />
</NavigationBar>
```
