import Logo from "../Logo/Logo";

/**
 * Navbar
 * @module Navbar
 */
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-success">
            <div className="container-fluid">
                <a className="navbar-brand" href="/#">
                    <Logo type="white" />
                </a>
            </div>
        </nav>
    );
}

export default Navbar;