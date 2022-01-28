import { GlobalTypes } from '@thoughtindustries/content';
import CatalogDriverBase from '../catalog-driver-base';

export type Fn = (displayType: GlobalTypes.ContentItemDisplayType) => Promise<void>;
export default async function setDisplayType(
  this: CatalogDriverBase,
  displayType: GlobalTypes.ContentItemDisplayType
) {
  const { contentTypes } = this.getState();
  let newContentTypes = [...contentTypes];
  // `calendar` displayType results are pre-filtered, so existing
  // contentType selections are cleared.
  if (displayType === GlobalTypes.ContentItemDisplayType.Calendar) {
    newContentTypes = [];
  }

  await this.updateResults({
    contentTypes: newContentTypes,
    displayType
  });
}
