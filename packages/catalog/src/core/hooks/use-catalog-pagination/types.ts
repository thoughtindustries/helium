import { CatalogDriverState } from '../../driver';

export type CatalogPaginationState = Pick<CatalogDriverState, 'page' | 'pageSize' | 'total'>;
