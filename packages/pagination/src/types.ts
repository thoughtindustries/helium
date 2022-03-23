export type VisiblePage = {
  number: number;
  label: number | string;
  isActive?: boolean;
  isFirst?: boolean;
  isLast?: boolean;
};

export type DisplayedPageRange = {
  start: number;
  end: number;
};

export interface PaginationProps {
  /** Optional current page number */
  page?: number;
  /** Total items count */
  total: number;
  /** Optional page size */
  pageSize?: number;
  /** Function to get link for a given page */
  getPageLink: (page: number) => string;
  /** Optional setting to hide page list */
  hidePageList?: boolean;
}
