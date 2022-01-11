import React from 'react';
import { useTranslation } from 'react-i18next';
import { FeaturedContentSidebarRssProps } from '../../types';
import SidebarWrapper from './wrapper';
import { useRssItemsQuery } from '@thoughtindustries/content';

const SidebarRss = ({ title, feedUrl }: FeaturedContentSidebarRssProps): JSX.Element => {
  const { t } = useTranslation();
  const { data, loading, error } = useRssItemsQuery({
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
