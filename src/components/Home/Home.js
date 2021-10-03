import React from 'react';
import { Carousel } from 'react-bootstrap';

const Home = () => {
    return (
        <div>
        <Carousel variant="dark">
  <Carousel.Item className="text-center mb-3 ">
    <img
      className="w-25"
      src="https://image.shutterstock.com/image-vector/young-girl-practices-yoga-lotus-260nw-1681422205.jpg"
      alt=""
    />
    
      <h5>Gentle Yoga Wake up</h5>
      <p>Beginner || Abiola</p>
      
  </Carousel.Item>
  <Carousel.Item className="text-center mb-3">
    <img
      className="w-25 mt-5 "
      src="http://thekolkatamail.com/wp-content/uploads/2021/06/all-about-yoga-mega-722x406.jpg"
      alt="Second slide"
    />
   
      <h5>Good Morning Yoga</h5>
      <p>Beginner || Elina</p>
   
  </Carousel.Item>
  <Carousel.Item className="text-center mb-3">
    <img
      className="w-25 mt-5 "
      src="https://i.insider.com/600af7c2c94799001992cc62?width=1136&format=jpeg"
      alt="Third slide"
    />
    
      <h5>Cardio Yoga</h5>
      <p>Intermediate || Rechel </p>
    
  </Carousel.Item>
</Carousel> 
        </div>
    );
};

export default Home;