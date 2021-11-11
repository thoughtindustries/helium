import React, { ReactNode } from "react";
import { Header } from "@thoughtindustries/header";
import { HeaderOptions } from "../../types";

interface FeaturedContentContentWrapperProps {
    headerOptions: HeaderOptions;
    children: ReactNode;
}

const ContentWrapper = ({ headerOptions, children }: FeaturedContentContentWrapperProps): JSX.Element => {
    const { title, ...restHeaderProps } = headerOptions;
    return (
        <>
            {title && <Header title={title} {...restHeaderProps} alternateTitleDisplay />}
            {children}
        </>
    )
}

ContentWrapper.displayName = "ContentWrapper";

export default ContentWrapper;
