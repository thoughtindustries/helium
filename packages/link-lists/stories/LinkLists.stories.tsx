import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import { LinkLists, LinkList, LinkListsProps } from '../src';

const meta: Meta<LinkListsProps> = {
  component: LinkLists,
  title: 'Packages/Link Lists'
};

export default meta;
type LinkLists = StoryObj<LinkListsProps>;

export const Base: LinkLists = {
  render: () => (
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
};

export const WithDisplayCutoff: LinkLists = {
  render: () => (
    <LinkLists title="Dolor Nullam Mattis Sem" alternateTitleDisplay>
      <LinkList label="Category 1" displayCutoff={2}>
        <LinkList.Link href="/subcategory-link1">List subcategory 1</LinkList.Link>
        <LinkList.Link href="/subcategory-link2">List subcategory 2</LinkList.Link>
        <LinkList.Link href="/subcategory-link3">List subcategory 3</LinkList.Link>
      </LinkList>

      <LinkList label="Category 2" displayCutoff={2}>
        <LinkList.Link href="/subcategory-link1">List subcategory 1</LinkList.Link>
        <LinkList.Link href="/subcategory-link2">List subcategory 2</LinkList.Link>
      </LinkList>

      <LinkList label="Category 3" displayCutoff={2}>
        <LinkList.Link href="/subcategory-link1">List subcategory 1</LinkList.Link>
        <LinkList.Link href="/subcategory-link2">List subcategory 2</LinkList.Link>
        <LinkList.Link href="/subcategory-link3">List subcategory 3</LinkList.Link>
        <LinkList.Link href="/subcategory-link4">List subcategory 4</LinkList.Link>
      </LinkList>

      <LinkList label="Category 4" displayCutoff={2}>
        <LinkList.Link href="/subcategory-link1">List subcategory 1</LinkList.Link>
      </LinkList>
    </LinkLists>
  )
};
