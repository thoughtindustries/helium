# `@thoughtindustries/link-lists`

> The Link Lists component is a nifty option for footers or when you just need to offer a cluster of navigation options. Choose from a variety of multi-column configurations for the one perfectly suited to your needs.

## Import component

```
import { LinkLists, LinkList } from '@thoughtindustries/link-lists';
```

## Usage

```
# Base
<LinkLists title="Dolor Nullam Mattis Sem">
    <LinkList label="Category 1">
        <LinkList.Link href="/subcategory-link1">List subcategory 1</LinkList.Link>
    </LinkList>
</LinkLists>

# With display cutoff
<LinkLists title="Dolor Nullam Mattis Sem">
    <LinkList label="Category 1" totalItems={2} displayCutoff={1}>
        <LinkList.Link index={0} href="/subcategory-link1">List subcategory 1</LinkList.Link>
        <LinkList.Link index={1} href="/subcategory-link2">List subcategory 2</LinkList.Link>
    </LinkList>
</LinkLists>
```
