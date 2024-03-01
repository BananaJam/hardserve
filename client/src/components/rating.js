import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './rating.css';

export default function Rating(props) {
    return (
        <div className="rating_container rating">
            {Array(props.rating).fill(0).map((_, index) => (
                    <FontAwesomeIcon icon={ faStar } className='checked' key={index} />
                )
            )}
            {Array(5 - props.rating).fill(0).map((_, index) => (
                    <FontAwesomeIcon icon={ faStar } key={index} />
                )
            )}
        </div>
    );
}