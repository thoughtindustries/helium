import { CatalogDriverState, CatalogDriverActions } from '../../driver';

export type CatalogStateOrActions = Partial<CatalogDriverState> & Partial<CatalogDriverActions>;

export type MapContextToProps<T extends CatalogStateOrActions> = (stateOrContext: T) => T;
