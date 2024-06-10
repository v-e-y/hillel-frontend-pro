/**
 * Base/Main layout component
 * @param {object} children - Child components
 * @returns {JSX.Element}
 */
const Base = ({ children, className }) => (
    <div className={`w-100 h-100 bg-success bg-gradient ${className}`}>
        {children}
    </div>
);

export default Base;
