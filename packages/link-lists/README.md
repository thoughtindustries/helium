# `@thoughtindustries/link-lists`

> The Link Lists component is a nifty option for footers or when you just need to offer a cluster of navigation options. Choose from a variety of multi-column configurations for the one perfectly suited to your needs.

## Import component

```
import { LinkLists } from '@thoughtindustries/link-lists';
```

## Usage

```
<LinkLists
    title="Dolor Nullam Mattis Sem"
    displayCutoff={2}
    categories={[
        {
            label: "Category 1",
            subcategories: [
                {
                    label: "Subcategory 1",
                    href: "http://sample.com"
                }
            ]
        }
    ]} />
```
