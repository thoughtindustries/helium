import { CatalogState } from '../../utilities/parse-catalog-state';

export type CatalogPaginationState = Pick<CatalogState, 'page' | 'pageSize' | 'total'>;
