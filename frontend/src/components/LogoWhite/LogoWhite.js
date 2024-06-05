import logo from '../../assets/images/logo/logo-white.svg';

/**
 * @module LogoWhite
 * @param {string} alt - alt text
 */
const LogoWhite = ({alt, className}) => {
    className = className || 'img-fluid w-75';
    alt = alt || 'logo'; // TODO: research - include app name for example from env

    return (
        <img 
            src={logo} 
            alt={alt}
            className={className}
        />
    );
}

export default LogoWhite;