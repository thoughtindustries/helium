import CatalogDriverBase from '../catalog-driver-base';

export type Fn = (contentType: string) => Promise<void>;
export default async function removeContentType(this: CatalogDriverBase, contentType: string) {
  const { contentTypes } = this.getState();
  if (contentTypes.find(item => item === contentType)) {
    const newContentTypes = [...contentTypes].filter(item => item !== contentType);
    await this.updateResults({
      contentTypes: newContentTypes
    });
  }
}
