import { MapContextToProps, PartialCatalogState } from './types';

/* For a given object execute mapContextToProps to pluck out the relevant
properties */
export function catalogContextToMappedProps<TMappedProps extends PartialCatalogState>(
  context: TMappedProps,
  mapContextToProps: MapContextToProps<TMappedProps>
) {
  return mapContextToProps(context);
}
