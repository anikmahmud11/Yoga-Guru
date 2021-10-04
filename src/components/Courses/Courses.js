import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import Rating from 'react-rating';
import './Courses.css';

const Courses = (props) => {
    const{image, name, type, rating, cost}= props.course;
    const icon3 = <FontAwesomeIcon icon={faShoppingCart} />
    
    return  (
        <div className="course-card">
            <img src={image} alt="" />
            <h5>{name}</h5>
            <h5>{type}</h5>
            
            <h6 className="rating"> Rating : <Rating
            initialRating={rating}
            emptySymbol="far fa-star"
            fullSymbol="fas fa-star"
            readonly></Rating></h6>
            <h5>price : {cost}</h5>
            <button  className="add-to-cart-btn">{icon3} Add to Cart</button>
            <br />
            <br />

            <div>
           
           </div>
        </div>
    );
};

export default Courses;