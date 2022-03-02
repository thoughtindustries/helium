import CatalogDriverBase from '../catalog-driver-base';
import { DEFAULT_PAGE } from '../constants';
import { reset } from './utilities';

export type Fn = (searchTerm: string) => Promise<void>;
// TODO: validate input
export default async function setSearchTerm(this: CatalogDriverBase, searchTerm: string) {
  const { isCurated } = this.getState();
  let newBaseState = {};
  if (isCurated) {
    newBaseState = { ...reset() };
  }

  await this.updateResults({
    ...newBaseState,
    page: DEFAULT_PAGE,
    searchTerm
  });
}
