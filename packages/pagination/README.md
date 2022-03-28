# `@thoughtindustries/pagination`

> This package is used to display pagination controls on components such as the catalog.

## Import component

```
import { Pagination } from '@thoughtindustries/pagination';
```

## Usage

```
<Pagination
  page={2}
  pageSize={6}
  total={100}
  getPageLink={(page) => `/?page=${page}`} />
```
