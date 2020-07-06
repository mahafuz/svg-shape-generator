import React from 'react';
import InputProperties from '../../InputProperties';
import "./select.sass";

interface Props extends InputProperties {
    /**
     * Select value type
     */
    type?: 'single' | 'multi';
    /**
     * Open value
     */
    isOpen?: boolean;
    /**
     * Options
     */
    options?: Array<string>;
    /**
     * React ref passthrough to select node
     */
    ref?: React.Ref<HTMLSelectElement>
}


const Select: React.FC<Props> = () => {
    return (
        <div></div>
    )
}

export default Select;