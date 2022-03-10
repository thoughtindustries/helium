import { useCatalogSlice } from '../use-catalog';
import { CatalogErrorState } from './types';

export default function useCatalogError() {
  const mapper = ({ error }: CatalogErrorState) => ({ error });
  return useCatalogSlice(mapper);
}
