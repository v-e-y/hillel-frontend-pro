/**
 * Base/Main layout component
 * @param {object} children - Child components
 * @returns {JSX.Element}
 */
const Base = ({ children }) => (
    <div className='container-fluid'>
        {children}
    </div>
);

export default Base;
