import React, { 
    createContext, 
    useContext, 
    useMemo, 
    useState, 
    useCallback
} from "react";
import {
    LinkListContextType,
    LinkListProps,
    LinkListLinkProps
} from "./types";

const LinkListContext = createContext<LinkListContextType | undefined>(undefined);

function useLinkListContext() {
    const context = useContext(LinkListContext);
    if (!context) {
        throw new Error("No context found for LinkList");
    }
    return context;
}

const Icon = (): JSX.Element => (
    <svg xmlns="http://www.w3.org/2000/svg" className="leading-none text-xs border border-solid border-gray-300 pr-0 inline-block" width="15" height="15" aria-label="expand" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
    </svg>
)

const LinkList = ({
    children,
    key,
    label,
    totalItems,
    displayCutoff
}: LinkListProps): JSX.Element => {
    const isLimited = displayCutoff !== undefined && totalItems !== undefined && totalItems > displayCutoff;
    const [expanded, setExpanded] = useState<boolean>(!isLimited);
    const onExpand = useCallback(() => {
        setExpanded(true);
    }, []);
    const value = useMemo(() => ({
        expanded,
        totalItems,
        displayCutoff
    }), [totalItems, displayCutoff, expanded]);

    return (
        <LinkListContext.Provider value={value}>
            <li key={key} className="mb-4">
                <div className="border-r">
                    <h4 className="text-sm font-bold">{label}</h4>
                    <ul className="m-0 p-0 list-none">
                        {children}
                    </ul>
                    {!expanded && (
                        <button className="border-0 text-link cursor-pointer inline-block font-normal text-xs leading-normal p-0 relative m-0 text-left no-underline shadow-none h-auto font-primary hover:text-link-hover focus:outline-blue focus:shadow" onClick={onExpand}>
                            <Icon />
                            <span className="ml-1">more</span>
                        </button>
                    )}
                </div>
            </li>
        </LinkListContext.Provider>
    )
}

const Link = ({
    key,
    index,
    linkOpenInNewTab,
    children,
    ...restProps
}: LinkListLinkProps): JSX.Element | null => {
    const { expanded, displayCutoff } = useLinkListContext();

    if (!expanded && displayCutoff !== undefined && index !== undefined && index >= displayCutoff) {
        return null;
    }

    const linkProps: { className: string, href: string, target?: string } = {
        ...restProps,
        className: 'text-sm text-link underline'
    };
    if (linkOpenInNewTab) {
        linkProps.target = "_blank";
    }
    
    return (
        <li key={key} className="pl-5 before:content-['\2022\20']">
            <a {...linkProps}>{children}</a>
        </li>
    )
}

LinkList.displayName = "LinkList";
LinkList.Link = Link;

export default LinkList;
