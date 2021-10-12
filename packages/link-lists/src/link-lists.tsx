import React, { useState, useCallback, useEffect } from 'react';
import './styles.css';
import { 
    LinkListsSubCategory,
    LinkListsCategory,
    LinkListsProps
} from './types';

const Header = (props: { 
    title?: string, 
    alternateTitleDisplay?: boolean
}): JSX.Element | null => {
    const { 
        title, 
        alternateTitleDisplay
    } = props;

    if (!title) {
        return null;
    }

    if (alternateTitleDisplay) {
        return (
            <>
                <div>
                    <h3>{title}</h3>
                </div>
                <hr className="relative" />
            </>
        );
    }

    return (
        <h2 className="text-2xl text-center text-gray-700 mb-4 font-header">{title}</h2>
    );
}

const Subcategory = (props: { item: LinkListsSubCategory }): JSX.Element => {
    const { item } = props;
    const { label, href, linkOpenInNewTab } = item;

    const linkProps: { className: string, href: string, target?: string } = {
        className: 'text-sm text-link underline',
        href,
    };
    if (linkOpenInNewTab) {
        linkProps.target = "_blank";
    }
    return (
        <a {...linkProps}>{label}</a>
    );
}

const Icon = (): JSX.Element => (
    <svg xmlns="http://www.w3.org/2000/svg" className="leading-none text-xs border border-solid border-gray-300 pr-0 inline-block" width="15" height="15" aria-label="expand" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
    </svg>
)

const Category = (props: {
    item: LinkListsCategory,
    displayCutoff?: number
}): JSX.Element => {
    const { item, displayCutoff } = props;
    const { label, subcategories = [] } = item;
    const isLimited = displayCutoff !== undefined && subcategories.length > displayCutoff;
    const [expanded, setExpanded] = useState<boolean>(!isLimited);
    const [filteredSubcategories, setFilteredSubcategories] = useState<LinkListsSubCategory[]>(
        isLimited ? [...subcategories].slice(0, displayCutoff) : [...subcategories]
    );

    useEffect(() => {
        const isLimitedNew = displayCutoff !== undefined && subcategories.length > displayCutoff;
        setExpanded(!isLimitedNew);
        setFilteredSubcategories(isLimitedNew ? [...subcategories].slice(0, displayCutoff) : [...subcategories]);
    }, [displayCutoff, subcategories.length]);

    const onExpand = useCallback(() => {
        setExpanded(true);
        setFilteredSubcategories([...subcategories]);
    }, []);

    return (
        <div className="pl-8 pr-8 link-matrix-category">
            <h4 className="text-sm font-bold">{label}</h4>
            <ul className="m-0 p-0 list-none">
                {filteredSubcategories.map((subcategory, index) => (
                    <li key={`subcategory-${index}`} className="pl-5 link-matrix-category__subcategory">
                        <Subcategory item={subcategory} />
                    </li>
                ))}
            </ul>
            {!expanded && (
                <button className="border-0 text-link cursor-pointer inline-block font-normal text-xs leading-normal p-0 relative m-0 text-left no-underline shadow-none h-auto font-primary hover:text-link-hover focus:outline-blue focus:shadow" onClick={onExpand}>
                    <Icon />
                    <span className="ml-1">more</span>
                </button>
            )}
        </div>
    );
}

const LinkLists = (props: LinkListsProps): JSX.Element => {
    const { 
        title, 
        alternateTitleDisplay,
        displayCutoff,
        categories = [] 
    } = props;

    return (
        <div className="w-auto -ml-4 -mr-4 mt-0 mb-0 max-w-none">
            <div className="w-full relative pl-4 pr-4 float-left">
                <Header title={title} alternateTitleDisplay={alternateTitleDisplay} />
                <ul className="grid grid-cols-2 md:grid-cols-3 link-matrix-category__container">
                    {categories.map((category, index) => (
                        <li key={`category-${index}`} className="border-r border-solid border-gray-300 mb-4">
                            <Category item={category} displayCutoff={displayCutoff} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

LinkLists.displayName = 'LinkLists';

export default LinkLists;
