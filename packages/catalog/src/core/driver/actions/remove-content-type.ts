import { GlobalTypes } from '@thoughtindustries/content';
import CatalogDriverBase from '../catalog-driver-base';

export type Fn = (contentType: GlobalTypes.ContentKind) => Promise<void>;
export default async function removeContentType(
  this: CatalogDriverBase,
  contentType: GlobalTypes.ContentKind
) {
  const { contentTypes } = this.getState();
  if (contentTypes.find(item => item === contentType)) {
    const newContentTypes = [...contentTypes].filter(item => item !== contentType);
    await this.updateResults({
      contentTypes: newContentTypes
    });
  }
}
