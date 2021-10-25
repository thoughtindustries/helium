import React from "react";
import { 
    SidebarPosition,
    FeaturedContentProps
} from "./types";

const FeaturedContent = ({ 
    sidebar,
    sidebarPosition,
    children
}: FeaturedContentProps): JSX.Element => {
    const wrappedSidebar = sidebar && (<div className="relative">{sidebar}</div>);
    const wrappedChildren = (
        <div className={sidebar? "col-span-3" : "col-span-full"}>
            {children}
        </div>
    );
    return (
        <div className="w-auto -ml-4 -mr-4 mt-0 mb-0 max-w-none">
            <div className="w-full relative pl-4 pr-4 float-left grid grid-cols-1 md:grid-cols-4 gap-8">
                {sidebarPosition === SidebarPosition.Left && wrappedSidebar}
                {wrappedChildren}
                {sidebarPosition === SidebarPosition.Right && wrappedSidebar}
            </div>
        </div>
    )
}

FeaturedContent.displayName = "FeaturedContent";

export default FeaturedContent;
