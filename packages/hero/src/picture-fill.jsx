import React from 'react';

export { PictureFill };

const htmlRegexp = /(<([^>]+)>)/g;

function PictureFill({ children, className='inline-block w-full', ...restProps }) {
    const { src, alt } = restProps;
    const altText = (alt || '').replace(htmlRegexp, '');
    return (
        <picture className={className}>
            {children}
            <img src={src} alt={altText} className='w-full' />
        </picture>
    )
}

function Source({ srcSet, media }) {
    return (
        <source srcSet={srcSet} media={media} />
    )
}

PictureFill.Source = Source;
