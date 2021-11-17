import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { useTranslation } from 'react-i18next';
import { FeaturedContentSidebarRssProps } from '../../types';
import SidebarWrapper from './wrapper';

interface RssItemsData {
  RssItems: RssItem[];
}

interface RssItem {
  title: string;
  link: string;
}

interface RssItemsVars {
  feedUrl: string;
}

export const RSS_ITEMS_QUERY = gql`
  query RssItemsQuery($feedUrl: String!) {
    RssItems(feedUrl: $feedUrl) {
      title
      link
    }
  }
`;

const SidebarRss = ({ title, feedUrl }: FeaturedContentSidebarRssProps): JSX.Element => {
  const { t } = useTranslation();
  const { data, loading, error } = useQuery<RssItemsData, RssItemsVars>(RSS_ITEMS_QUERY, {
    variables: { feedUrl }
  });
  let content;
  if (loading || error) {
    content = <h5>{t('please-wait')}</h5>;
  } else {
    content = (
      <>
        {data &&
          data.RssItems.map(({ title, link }, index) => (
            <a key={index} href={link} className="block mb-4">
              {title}
            </a>
          ))}
      </>
    );
  }

  return <SidebarWrapper title={title}>{content}</SidebarWrapper>;
};

SidebarRss.displayName = 'SidebarRss';

export default SidebarRss;
