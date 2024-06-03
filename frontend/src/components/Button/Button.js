/**
 * Button component
 * @module Button
 * @prop {string} type
 * @prop {string} text
 * @prop {string} size
 * @prop {string} color
 * @prop {boolean} outline
 */

const Button = ({ type, text, size, color, outline, className }) => {
    size = size || 'md';
    color = color || 'primary';

    return (
        <button
            type={type}
            className={`btn btn-${size} btn-${color} ${outline ? `btn-outline-${color}` : ''} ${className}`}
        >
            {text}
        </button>
    )
}

export default Button;