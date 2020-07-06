import React from 'react';
import "./radio.sass";

const Radio: React.FC<{}> = () => {

    return (
        <label htmlFor="boxed-layout" className="boxed-layout-wrap checked">
            Enable boxed layout
            <input type="checkbox" id="boxed-layout" name="boxed-layout" />
        </label>
    );
};

export default Radio;