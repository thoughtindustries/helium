import React from 'react';
import HeightEqualizerContext from './context';

/**
 * The `useHeightEqualizer` hook provides access to the height equalizer context. It must be a descendent of a `HeightEqualizer` component.
 */
export default function useHeightEqualizer() {
  const context = React.useContext(HeightEqualizerContext);

  if (!context) {
    throw new Error('Expected a Height Equalizer Context, but no context was found');
  }

  return context;
}
