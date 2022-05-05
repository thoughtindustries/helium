import React from 'react';
import NavigationBarContext from './context';

export default function useNavigationBar() {
  const context = React.useContext(NavigationBarContext);

  if (!context) {
    throw new Error('Expected a Navigation Bar Context, but no such Context was found');
  }

  return context;
}
