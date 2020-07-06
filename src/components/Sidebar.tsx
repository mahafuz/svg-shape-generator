import React from 'react';
import "../styles/sidebar.sass";

const Sidebar: React.FC<{}> = (props): JSX.Element => (
    <aside>
        <div className="sidebar-inner">{props.children}</div>
    </aside>
);

export default Sidebar;