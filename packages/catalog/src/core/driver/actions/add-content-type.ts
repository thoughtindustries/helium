import CatalogDriverBase from '../catalog-driver-base';

export type Fn = (contentType: string) => Promise<void>;
export default async function addContentType(this: CatalogDriverBase, contentType: string) {
  const { contentTypes } = this.getState();
  const newContentTypes = [...contentTypes];
  newContentTypes.push(contentType);
  await this.updateResults({
    contentTypes: newContentTypes
  });
}
