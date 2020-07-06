import React from "react";
import Logo from "../Logo";
import HeaderProps from '../interfaces/HeaderProps';

const Header: React.FC<HeaderProps> = ({ title, text }) => {
  return (
    <header>
      <Logo
        url="https://shapedivider.app/img/logo_500x500.18aca7aa.png"
        alt="Svg Shape Generator"
      />
      {title && <h1>{title}</h1>}
      {text && <p>{text}</p>}
    </header>
  );
};

export default Header;
