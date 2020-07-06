import React from 'react';
import LogoProps from '../interfaces/LogoProps'
import { Link } from 'react-router-dom';
import "../styles/logo.sass";

const Logo: React.FC<LogoProps> = ({url, alt}) => (<Link className="app-logo" to="/"><img src={url} alt={alt} /></Link>);

export default Logo;