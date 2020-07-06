import React from "react";
import HeaderProps from '../interfaces/HeaderProps';

const Header: React.FC<HeaderProps> = ({ title, text }) => {
  return (
    <header>
      {title && <h1>{title}</h1>}
      {text && <p>{text}</p>}
    </header>
  );
};

export default Header;
