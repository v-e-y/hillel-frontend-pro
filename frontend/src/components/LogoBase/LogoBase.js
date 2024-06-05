import logo from '../../assets/images/logo/logo-base.svg';

/**
 * @module LogoBase
 * @param {string} alt - alt text
 */
const LogoBase = ({alt, className}) => {
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

export default LogoBase;