/**
 * @module Input
 * @param {string} type
 * @param {string} name
 * @param {string} id
 * @param {string} placeholder
 * @param {string} value
 * @param {string} className
 */
const Input = ({ type, name, id, placeholder, value, className}) => {
    return (
        <input 
            className={`form-control ${className}`}
            type={type} 
            name={name} 
            id={id} 
            placeholder={placeholder} 
            value={value} 
        />
    );
}

export default Input;