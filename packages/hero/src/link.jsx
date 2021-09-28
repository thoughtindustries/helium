import React, { forwardRef } from 'react';

const Link = forwardRef(({ children, className, ...restProps }, ref) => (
    <a className={className} ref={ref} {...restProps}>
        {children}
    </a>
))

export { Link };
