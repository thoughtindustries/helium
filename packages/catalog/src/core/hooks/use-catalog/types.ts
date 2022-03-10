import { CatalogState } from '../../utilities/parse-catalog-state';

export type PartialCatalogState = Partial<CatalogState>;

export type MapContextToProps<T extends PartialCatalogState> = (context: T) => T;
