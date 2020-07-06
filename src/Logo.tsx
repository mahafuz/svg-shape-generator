import React from 'react';
import LogoProps from './interfaces/LogoProps'
import { Link } from 'react-router-dom';

const Logo: React.FC<LogoProps> = ({url, alt}) => (<Link to="/"><img src={url} alt={alt} /></Link>);

export default Logo;