/**
 * @name Header
 * @description Header component
 * @param {string} title - Title of the header
 * @returns {JSX.Element}
 */
const Header = ({ title }) => (
    <header>
        <h1>{title}</h1>
    </header>
);

export default Header;