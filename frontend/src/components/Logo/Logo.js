import GreenLogo from '../../assets/images/logo/logo.svg';
import WhiteLogo from '../../assets/images/logo/logo-white.svg';

/**
 * @module Logo
 * @param {string} alt - alt text
 */
const Logo = ({alt, className, type}) => {
    className = className || 'img-fluid w-75';
    alt = alt || 'logo';
    type = type || 'green';

    const logo = type === 'white' ? WhiteLogo : GreenLogo;

    return (
        <img 
            src={logo} 
            alt={alt}
            className={className}
        />
    );
}

export default Logo;