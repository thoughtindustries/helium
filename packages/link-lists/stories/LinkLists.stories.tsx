import { Meta, Story } from '@storybook/react';
import React from 'react';
import { 
    LinkListsCategory,
    LinkListsSubCategory,
    LinkListsProps,
    LinkLists
} from '../src';

export default {
  title: 'Example/LinkLists',
  component: LinkLists,
  argTypes: {
    title: {
      name: 'title',
      type: { name: 'string', required: false },
      description: 'Title that appears on the Link Lists.',
      control: { type: 'text' }
    },
    alternateTitleDisplay: {
      name: 'alternateTitleDisplay',
      type: { name: 'boolean', required: false },
      defaultValue: false,
      description: 'Display alternate title.',
      control: { type: 'boolean' }
    },
    displayCutoff: {
      name: 'displayCutoff',
      type: { name: 'number', required: false },
      defaultValue: 0,
      description: 'Display subcategories at the cutoff with a toggle to display all.',
      control: { type: 'number' }
    },
    categories: {
      name: 'categories',
      type: { name: 'array', required: false },
      defaultValue: [],
      description: 'Categories of link lists.',
      control: { type: 'array' }
    }
  }
} as Meta;

const Template: Story<LinkListsProps> = (args) => <LinkLists {...args} />;

const getCategories = (
    number: number, 
    numberOfSubcategories: number,
    openLinkInNewTab: boolean = false
): LinkListsCategory[] => {
    const items: LinkListsCategory[] = [];
    for (let i = 0; i < number; i++) {
        items.push({
            label: `List category ${i + 1}`,
            subcategories: getSubcategories(numberOfSubcategories, openLinkInNewTab)
        });
    }
    return items;
}

const getSubcategories = (
    number: number, 
    openLinkInNewTab: boolean = false
): LinkListsSubCategory[] => {
    const items: LinkListsSubCategory[] = [];
    for (let i = 0; i < number; i++) {
        items.push({
            label: `List subcategory ${i + 1}`,
            href: `/subcategory-link${i + 1}`,
            linkOpenInNewTab: openLinkInNewTab
        });
    }
    return items;
}

export const Base = Template.bind({});
Base.args = {
  title: 'Dolor Nullam Mattis Sem',
  displayCutoff: 2,
  categories: getCategories(4, 3, true)
}