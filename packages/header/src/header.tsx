import React from 'react';
import { HeaderProps } from './types';

const Header = (props: HeaderProps): JSX.Element => {
    const { 
        title, 
        alternateTitleDisplay,
        linkOpenInNewTab,
        linkText,
        linkUrl
    } = props;

    if (alternateTitleDisplay) {
        const shouldDisplayCta = alternateTitleDisplay && linkText && linkUrl;
        const titleClasses = shouldDisplayCta && "pr-8 max-w-3/4";
        let link;
        if (shouldDisplayCta) {
            const linkProps: { className: string, href: string, target?: string } = {
                className: 'text-gray-700 absolute text-xs border border-solid border-gray-100 text-center px-1 py-0.5 max-w-1/4 right-4 top-2',
                href: linkUrl
            };
            if (linkOpenInNewTab) {
                linkProps.target = "_blank";
            }
            link = (
                <a {...linkProps}>{linkText}</a>
            )
        }
        return (
            <>
                <div className={titleClasses}>
                    <h3>{title}</h3>
                </div>
                {link}
                <hr className="relative my-4" />
            </>
        );
    }

    return (
        <h2 className="text-2xl text-center text-gray-700 mb-4 font-header">{title}</h2>
    );
}

Header.displayName = 'Header';

export default Header;
