import React, { forwardRef, MouseEvent, useCallback } from 'react';
import { useCatalog } from '../../hooks/use-catalog';
import { CatalogLinkButtonProps } from './types';

/**
 * The `CatalogLinkButton` component renders a link button that conditionally
 * overrides the link behavior and handles client side navigation.
 * It must be a descendent of a `CatalogProvider` component.
 */
const CatalogLinkButton = forwardRef<HTMLAnchorElement, CatalogLinkButtonProps>(
  ({ children, href, ...passThroughProps }, ref) => {
    const { ssr, navigateClientSideAsync } = useCatalog();
    const handler = useCallback(
      (event: MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        if (href && navigateClientSideAsync) {
          navigateClientSideAsync({ url: href });
        }
      },
      [href]
    );

    const props = {
      ...passThroughProps,
      href,
      onClick: ssr ? undefined : handler
    };

    return (
      <a ref={ref} {...props}>
        {children}
      </a>
    );
  }
);

CatalogLinkButton.displayName = 'CatalogLinkButton';
export default CatalogLinkButton;
