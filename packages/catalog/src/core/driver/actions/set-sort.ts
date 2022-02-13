import CatalogDriverBase from '../catalog-driver-base';
import { Sort } from '../types';

export type Fn = (sort: Sort | string) => Promise<void>;
export default async function setSort(this: CatalogDriverBase, sort: Sort | string) {
  await this.updateResults({
    sort
  });
}
