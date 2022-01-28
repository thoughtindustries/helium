import { GlobalTypes } from '@thoughtindustries/content';
import CatalogDriverBase from '../catalog-driver-base';

export type Fn = (contentType: GlobalTypes.ContentKind) => Promise<void>;
export default async function addContentType(
  this: CatalogDriverBase,
  contentType: GlobalTypes.ContentKind
) {
  const { contentTypes } = this.getState();
  const newContentTypes = [...contentTypes];
  newContentTypes.push(contentType);
  await this.updateResults({
    contentTypes: newContentTypes
  });
}
