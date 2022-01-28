import CatalogDriverBase from '../catalog-driver-base';

export type Fn = () => Promise<void>;
export default async function removeToken(this: CatalogDriverBase) {
  await this.updateResults({
    token: undefined,
    tokenLabel: undefined
  });
}
