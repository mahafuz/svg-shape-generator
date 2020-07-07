import React, { useState } from "react";
import InputProperties from "../../InputProperties";
import DropdownIcon from './DropDownIcon';
import "./select.sass";

interface Props extends InputProperties {
  /**
   * Select value type
   */
  type?: "single" | "multi";
  /**
   * Open value
   */
  isOpen?: boolean;
  /**
   * Options
   */
  options: string[];
  /**
   * React ref passthrough to select node
   */
  ref?: React.Ref<HTMLSelectElement>;
}

const Select: React.FC<Props> = (props) => {
  const [selected, setSelected] = useState("");
  const [isOpen, toggle] = useState(false);

  const { title, desc, options } = props;

  const first: string = options[0];

  const handleOption = (option: string) => {
    setSelected(option);
    toggle(false);
  };

  const handleToggle = () => {
    toggle(!isOpen);
  }

  return (
    <div className="pretty-select-wrap">
      {title && <h4>{title}</h4>}
      {desc && <p>{desc}</p>}

      <div className="pretty-select">
        <input
          name="get-shape"
          value={selected ? selected : first}
          onClick={handleToggle}
        />
        <DropdownIcon />
        {isOpen && <ul className="dropdown">
          {options.map((option) => (
            <li onClick={() => handleOption(option)}>{option}</li>
          ))}
        </ul>}
      </div>
    </div>
  );
};

export default Select;
