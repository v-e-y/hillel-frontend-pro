import LogoBase from "../LogoBase/LogoBase";

/**
 * Navbar
 * @module Navbar
 */
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-success">
            <div className="container-fluid">
                <a class="navbar-brand" href="/#">
                    <LogoBase />
                </a>
            </div>
        </nav>
    );
}

export default Navbar;