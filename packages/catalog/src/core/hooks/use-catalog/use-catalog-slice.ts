import { useState } from 'react';
import { MapContextToProps, PartialCatalogState } from './types';
import useCatalog from './use-catalog';
import { catalogContextToMappedProps } from './utilities';

export default function useCatalogSlice<TMappedProps extends PartialCatalogState>(
  contextMapper: MapContextToProps<TMappedProps>
) {
  const { state } = useCatalog();
  const [slicedCatalogState] = useState({
    ...catalogContextToMappedProps<TMappedProps>(state as TMappedProps, contextMapper)
  });

  return slicedCatalogState;
}
