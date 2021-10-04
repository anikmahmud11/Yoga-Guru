import { animated } from '@react-spring/web';
import React, { useEffect, useState } from 'react';
import { Button, Carousel } from 'react-bootstrap';
import Courses from '../Courses/Courses';
import './Home.css'
import { useSpring } from 'react-spring'
import { Link } from 'react-router-dom';

const Home = () => {
  const [flip, set] = useState(false);
  const [courses , setCourses]=useState([]);
  useEffect(()=>{
    fetch('./fakedata.json')
    .then(res=>res.json())
    .then(data=>setCourses(data));
  },[])
    return (
       <div>
          <div className="d-flex mt-5">
          <div className="text-center text-success mt-5 pt-4 ">
            <h3>YOGA COLLECTION</h3>
            <p className="pt-3">Improve strength, balance and flexibility to feel your absolute best! Join our excellent certified yoga instructors to explore movement or take your practice to the next level.</p>
            <Button className="bg-success mt-4 w-50 rounded "><animated.div style={useSpring({ 
                  to: { opacity: 1 },
                  reset: true,
                  reverse: flip,
                  delay: 300, 
                  onRest: () => set(!flip),
                  from: { opacity: 0 } 
                  })}><h5>Sign Up Now !</h5></animated.div></Button>
          </div>
        <div className="w-100 h-100">
        <Carousel variant="dark">
  <Carousel.Item className="text-center mb-3 ">
    <img
      className="w-50 h-50 mt-3"
      src="https://www.yogajournal.com/wp-content/uploads/2021/01/yoga-poses-graphic_getty-images.jpg"
      alt=""
    />
    
      <h5>Gentle Yoga Wake up</h5>
      <p>Beginner || Abiola</p>
      
  </Carousel.Item>
  <Carousel.Item className="text-center mb-3">
    <img
      className="w-50 h-50 mt-3"
      src="http://thekolkatamail.com/wp-content/uploads/2021/06/all-about-yoga-mega-722x406.jpg"
      alt="Second slide"
    />
   
      <h5>Good Morning Yoga</h5>
      <p>Beginner || Elina</p>
   
  </Carousel.Item>
  <Carousel.Item className="text-center mb-3">
    <img
      className="w-50 h-50 mt-3 "
      src="https://i.ytimg.com/vi/m756Gz8de4M/maxresdefault.jpg"
      alt="Third slide"
    />
    
      <h5>Cardio Yoga</h5>
      <p>Intermediate || Rechel </p>
     
    
  </Carousel.Item>
</Carousel> 
        </div>
        </div>
        <div className="text-center mt-5 text-success  "> 
          <Link className="btn text-success" to="/service"><h3>Our Services</h3></Link>
        </div>
        <div className="courses-container">
          {
             
              courses.map(course=><Courses
              key={courses.name}
              course={course}
              ></Courses>)
            
          }
        </div>
       </div>
        
    );
};

export default Home;