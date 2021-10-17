import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import Rating from 'react-rating';
import './Course.css';
import { Link } from 'react-router-dom';


const Course = (props) => {
    const{ id , image, name, type, rating, cost}= props.course;
    const icon3 = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div>
             <div className="courses-card">
            <img src={image} alt="" />
            <h5> {name}</h5>
            <h5> {type}</h5>
            
            <h6 className="rating"> <Rating
            initialRating={rating}
            emptySymbol="far fa-star"
            fullSymbol="fas fa-star"
            readonly></Rating></h6>
            <h4>$ {cost}</h4>
            <Link to={`/booking/${id}`}>
            <button className="add-to-cart-btn">{icon3} Add to Cart</button>
            </Link>
            <br />
            <br />

            <div>
           
           </div>
        </div>
        </div>
    );
};

export default Course;