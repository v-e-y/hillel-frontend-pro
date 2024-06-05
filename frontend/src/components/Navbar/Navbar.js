import LogoWhite from "../LogoWhite/LogoWhite";

/**
 * Navbar
 * @module Navbar
 */
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-success">
            <div className="container-fluid">
                <a className="navbar-brand" href="/#">
                    <LogoWhite />
                </a>
            </div>
        </nav>
    );
}

export default Navbar;