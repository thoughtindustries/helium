export interface LinkListsSubCategory {
    /** url for link */
    href: string;
    /** label for link */
    label: string;
    /** open link in new tab for link */
    linkOpenInNewTab?: boolean;
}

export interface LinkListsCategory {
    /** label for category */
    label: string;
    /** list of subcategories */
    subcategories?: LinkListsSubCategory[];
}

export interface LinkListsProps {
    /** title that appears on top of the link lists */
    title?: string;
    /** display alternate title */
    alternateTitleDisplay?: boolean;
    /** display subcategories at the cutoff with a toggle to display all  */
    displayCutoff?: number;
    /** list of categories */
    categories?: LinkListsCategory[];
}