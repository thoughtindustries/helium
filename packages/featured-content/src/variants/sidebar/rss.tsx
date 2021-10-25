import React from "react";
import { Header } from "@thoughtindustries/header";
import { 
    FeaturedContentSidebarProps, 
    FeaturedContentSidebarRssLinkProps
} from "../../types";

const SidebarRss = ({ title, children }: FeaturedContentSidebarProps): JSX.Element => (
    <div className="h-full absolute left-0 w-full">
        {title && <Header title={title} alternateTitleDisplay />}
        <div className="overflow-y-scroll text-sm h-full">
            {children}
        </div>
    </div>
)

const Link = ({
    key,
    href,
    children
}: FeaturedContentSidebarRssLinkProps): JSX.Element => (
    <a key={key} href={href} className="block mb-4">
        {children}
    </a>
);

SidebarRss.displayName = "SidebarRss";
SidebarRss.Link = Link;

export default SidebarRss;
