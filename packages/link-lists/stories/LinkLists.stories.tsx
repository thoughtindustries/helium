import React from 'react';
import {
    LinkLists,
    LinkList
} from '../src';

export default {
  title: "Example/LinkLists"
}

export const Base = () => (
  <LinkLists title="Dolor Nullam Mattis Sem">
    <LinkList label="Category 1">
      <LinkList.Link href="/subcategory-link1">List subcategory 1</LinkList.Link>
      <LinkList.Link href="/subcategory-link2">List subcategory 2</LinkList.Link>
      <LinkList.Link href="/subcategory-link3">List subcategory 3</LinkList.Link>
    </LinkList>

    <LinkList label="Category 2">
      <LinkList.Link href="/subcategory-link1">List subcategory 1</LinkList.Link>
      <LinkList.Link href="/subcategory-link2">List subcategory 2</LinkList.Link>
    </LinkList>

    <LinkList label="Category 3">
      <LinkList.Link href="/subcategory-link1">List subcategory 1</LinkList.Link>
      <LinkList.Link href="/subcategory-link2">List subcategory 2</LinkList.Link>
      <LinkList.Link href="/subcategory-link3">List subcategory 3</LinkList.Link>
      <LinkList.Link href="/subcategory-link4">List subcategory 4</LinkList.Link>
    </LinkList>

    <LinkList label="Category 4">
      <LinkList.Link href="/subcategory-link1">List subcategory 1</LinkList.Link>
    </LinkList>
  </LinkLists>
)

export const withDisplayCutoff = () => (
  <LinkLists title="Dolor Nullam Mattis Sem" alternateTitleDisplay>
    <LinkList label="Category 1" totalItems={3} displayCutoff={2}>
      <LinkList.Link index={0} href="/subcategory-link1">List subcategory 1</LinkList.Link>
      <LinkList.Link index={1} href="/subcategory-link2">List subcategory 2</LinkList.Link>
      <LinkList.Link index={2} href="/subcategory-link3">List subcategory 3</LinkList.Link>
    </LinkList>

    <LinkList label="Category 2" totalItems={2} displayCutoff={2}>
      <LinkList.Link index={0} href="/subcategory-link1">List subcategory 1</LinkList.Link>
      <LinkList.Link index={1} href="/subcategory-link2">List subcategory 2</LinkList.Link>
    </LinkList>

    <LinkList label="Category 3" totalItems={4} displayCutoff={2}>
      <LinkList.Link index={0} href="/subcategory-link1">List subcategory 1</LinkList.Link>
      <LinkList.Link index={1} href="/subcategory-link2">List subcategory 2</LinkList.Link>
      <LinkList.Link index={2} href="/subcategory-link3">List subcategory 3</LinkList.Link>
      <LinkList.Link index={3} href="/subcategory-link4">List subcategory 4</LinkList.Link>
    </LinkList>

    <LinkList label="Category 4" totalItems={1} displayCutoff={2}>
      <LinkList.Link index={0} href="/subcategory-link1">List subcategory 1</LinkList.Link>
    </LinkList>
  </LinkLists>
)