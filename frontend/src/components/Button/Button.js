/**
 * Button component
 * @module Button
 * @prop {string} type
 * @prop {string} text
 * @prop {?React.JSX.Element} icon
 * @prop {string} size
 * @prop {string} color
 * @prop {boolean} outline
 */

const Button = ({ type, text, icon, size, color, outline, className }) => {
    type = type || 'button';
    size = size || 'md';
    color = color || 'primary';

    return (
        <button
            type={type}
            className={`
                btn btn-${size} 
                btn-${color} 
                ${outline ? `btn-outline-${color}` : ''} 
                ${className}
                ${icon ? 'd-inline-flex align-items-center' : ''}
            `}
        >
            {icon}
            {text}
        </button>
    )
}

export default Button;