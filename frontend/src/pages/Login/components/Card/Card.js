import './Card.css';

/**
 * Cmp Card
 * @module Card
 */
const Card = ({ children }) => {
    return (
        <div className="card card-body">
            {children}
        </div>
    );
}

export default Card;