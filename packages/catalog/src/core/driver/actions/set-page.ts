import CatalogDriverBase from '../catalog-driver-base';

export type Fn = (page: number) => Promise<void>;
export default async function setPage(this: CatalogDriverBase, page: number) {
  await this.updateResults({
    page
  });
}
