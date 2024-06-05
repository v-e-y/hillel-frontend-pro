import './Card.css';

/**
 * Cmp Card
 * @module Card
 */
const Card = ({ className, children }) => {
    return (
        <div className={`card card-body ${className}`}>
            {children}
        </div>
    );
}

export default Card;