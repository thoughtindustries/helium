import React from "react";
import { 
    FeaturedContentSidebarBaseProps
} from "../../types";
import SidebarWrapper from "./wrapper";

const SidebarDefault = ({ title, children }: FeaturedContentSidebarBaseProps): JSX.Element => (
    <SidebarWrapper title={title}>
        {children}
    </SidebarWrapper>
)

SidebarDefault.displayName = "SidebarDefault";

export default SidebarDefault;
