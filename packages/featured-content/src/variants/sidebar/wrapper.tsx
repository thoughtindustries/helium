import React from "react";
import { Header } from "@thoughtindustries/header";
import { 
    FeaturedContentSidebarBaseProps
} from "../../types";

interface FeaturedContentSidebarWrapperProps extends FeaturedContentSidebarBaseProps {}

const SidebarWrapper = ({ title, children }: FeaturedContentSidebarWrapperProps): JSX.Element => (
    <div className="h-full absolute left-0 w-full">
        {title && <Header title={title} alternateTitleDisplay />}
        <div className="overflow-y-scroll text-sm h-full">
            {children}
        </div>
    </div>
)

SidebarWrapper.displayName = "SidebarWrapper";

export default SidebarWrapper;
