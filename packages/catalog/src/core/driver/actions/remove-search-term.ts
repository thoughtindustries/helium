import CatalogDriverBase from '../catalog-driver-base';

export type Fn = () => Promise<void>;
export default async function removeSearchTerm(this: CatalogDriverBase) {
  await this.updateResults({
    searchTerm: undefined
  });
}
