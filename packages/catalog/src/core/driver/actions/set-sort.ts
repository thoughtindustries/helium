import CatalogDriverBase from '../catalog-driver-base';
import { Sort } from '../types';

export type Fn = (sort: Sort) => Promise<void>;
export default async function setSort(this: CatalogDriverBase, sort: Sort) {
  await this.updateResults({
    sort
  });
}
