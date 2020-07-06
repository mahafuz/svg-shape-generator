import React from 'react';

const Sidebar: React.FC<{}> = (props): JSX.Element => (
    <aside>
        {props.children}
    </aside>
);

export default Sidebar;