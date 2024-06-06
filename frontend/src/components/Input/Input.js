/**
 * @module Input
 * @param {string} type
 * @param {string} name
 * @param {string} id
 * @param {string} placeholder
 * @param {string} value
 * @param {string} className
 */
const Input = ({ type, name, id, placeholder, value, className, icon}) => {
    return (
        <div className='position-relative'>
            <input 
                className={`form-control ${className}`}
                type={type} 
                name={name} 
                id={id} 
                placeholder={placeholder} 
                value={value} 
            />
            {icon &&
                <div
                    type='button'
                    className='pe-2 position-absolute end-0 top-50 translate-middle-y cursor-pointer'
                >
                    {icon}
                </div>
            }
        </div>
    );
}

export default Input;