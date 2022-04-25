import { useMedia } from '@thoughtindustries/hooks';

export enum ScreenSize {
  XXXLarge = 'xxxlarge',
  XXLarge = 'xxlarge',
  XLarge = 'xlarge',
  Large = 'large',
  Medium = 'medium',
  Small = 'small'
}

// map screen size to media query (smallest range or largest screen on top)
type ScreenSizeToMediaQueryMap = { [key in ScreenSize]?: string };
const screenSizeToMediaQueryMap: ScreenSizeToMediaQueryMap = {
  [ScreenSize.XXXLarge]: '(min-width: 160.063em)',
  [ScreenSize.XXLarge]: '(min-width: 120.063em)',
  [ScreenSize.XLarge]: '(min-width: 90.063em)',
  [ScreenSize.Large]: '(min-width: 64.063em)',
  [ScreenSize.Medium]: '(min-width: 48.063em)'
};

export function useScreenSize(): ScreenSize {
  const queries = Object.values(screenSizeToMediaQueryMap);
  const values = Object.keys(screenSizeToMediaQueryMap) as ScreenSize[];
  const screenSize = useMedia<ScreenSize>(queries, values, ScreenSize.Small);
  return screenSize;
}
