import { Builder, BuilderComponent, builder, withChildren, withBuilder } from '@builder.io/react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Layout from '../../components/Layout';
import { Hero } from '@thoughtindustries/hero';
import {
  FeaturedContent,
  ContentTileStandardLayout,
  FeaturedContentContentItem
} from '@thoughtindustries/featured-content';
import {
  hydrateContent,
  useCatalogQuery,
  useAddResourceToQueueMutation
} from '@thoughtindustries/content';
import { Appearance, CurrentUser } from '../../types';
import { Header } from '@thoughtindustries/header';

export { Page };
export { documentProps };

const documentProps = {
  title: 'Home Page',
  description: 'The home page'
};

const FeaturedContentWithChildren = withChildren(FeaturedContent);

builder.init('55898168a2e34c64810d0395eb1f500a');

Builder.registerComponent(Header, {
  name: 'Header',
  inputs: [
    {
      name: 'title',
      type: 'string'
    }
  ]
});

const FeaturedItemsWithChildren = withChildren(FeaturedItems);

Builder.registerComponent(FeaturedItemsWithChildren, {
  name: 'Featured Items',
  defaultChildren: [
    {
      '@type': '@builder.io/sdk:Element',
      component: {
        name: 'Featured Content'
      }
    }
  ]
});

Builder.registerComponent(Hero, {
  name: 'Hero',
  inputs: [
    {
      name: 'title',
      type: 'string'
    },
    {
      name: 'subtitle',
      type: 'string'
    },
    {
      name: 'linkText',
      type: 'string'
    },
    {
      name: 'linkOpenInNewTab',
      type: 'boolean',
      defaultValue: true
    },
    {
      name: 'linkUrl',
      type: 'string'
    },
    {
      name: 'asset',
      type: 'file',
      allowedFileTypes: ['jpeg', 'jpg', 'png']
    },
    {
      name: 'largeAsset',
      type: 'file',
      allowedFileTypes: ['jpeg', 'jpg', 'png']
    },
    {
      name: 'smallAsset',
      type: 'file',
      allowedFileTypes: ['jpeg', 'jpg', 'png']
    }
  ]
});

function Page({ appearance, currentUser }: { appearance: Appearance; currentUser: CurrentUser }) {
  return (
    <Layout appearance={appearance} currentUser={currentUser}>
      <div className="flex flex-col items-start space-y-2">
        <BuilderComponent model="page" />
      </div>
    </Layout>
  );
}

function FeaturedItems() {
  const { i18n } = useTranslation();
  const [addResourceToQueue] = useAddResourceToQueueMutation();
  const handleAddedToQueue = (item: FeaturedContentContentItem): Promise<boolean | void> =>
    item.displayCourse
      ? addResourceToQueue({ variables: { resourceId: item.displayCourse } }).then()
      : Promise.resolve(undefined);

  const { data, loading, error } = useCatalogQuery({
    variables: {
      query:
        'courseGroup:4e3a0be6-3b5a-4f3e-8e57-e52c558603b2 OR courseGroup:11ad125b-9c17-4894-be31-fb2beeb06e67'
    }
  });

  const handleClick = (evt, item: FeaturedContentContentItem) => {
    console.log('clicked!', item);
  };

  let content;

  if (loading) {
    content = <p>Loading content</p>;
  }
  if (error) {
    content = <p>Error loading content</p>;
  }
  if (data) {
    content = data.CatalogQuery.contentItems.map((item, index) => {
      const hydratedItem = hydrateContent(i18n, item);
      const { authors, description, href, ...restItemProps } = hydratedItem;
      const transformedItem = {
        ...restItemProps,
        authors,
        shortDescription: description && `${description.substring(0, 75)} ...`,
        linkUrl: href
      };
      return <ContentTileStandardLayout.Item key={`item-${index}`} {...transformedItem} />;
    });
  }

  return (
    <div className="px-4">
      <FeaturedContent>
        <ContentTileStandardLayout
          desktopColumnCount={4}
          headerOptions={{ title: 'Featured Content' }}
          onAddedToQueue={handleAddedToQueue}
          onClick={handleClick}
        >
          {content}
        </ContentTileStandardLayout>
      </FeaturedContent>
    </div>
  );
}
