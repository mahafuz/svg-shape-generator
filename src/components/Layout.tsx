import React from 'react';
import "../styles/layout.sass";

const Layout: React.FC<{}> = (props): JSX.Element => (
    <div className="layout-wrapper">
        {props.children}
    </div>
);

export default Layout;