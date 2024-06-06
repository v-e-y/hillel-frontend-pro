import logoWhite from '../../assets/images/logo/logo-white.svg';

/**
 * Navbar
 * @module Navbar
 */
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-success">
            <div className="container-fluid">
                <a className="navbar-brand" href="/#">
                    <img src={logoWhite} alt="logo" />
                </a>
            </div>
        </nav>
    );
}

export default Navbar;