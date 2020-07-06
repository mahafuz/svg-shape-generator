interface InputProperties {
    /**
     * Title
     */
    title: string;
    /**
     * Description
     */
    desc: string;
    /**
     * CSS classes
     */
    classes?: Array<string>;
    /**
     * Input name
     */
    name: string;
    /**
     * Input Placeholder
     */
    placeholder?: string;
    /**
     * Value
     */
    value?: string;
    /**
     * Input field disable?
     */
    disabled?: boolean;
};

export default InputProperties;