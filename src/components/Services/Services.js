import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import './Services.css';

const Services = () => {
    const [courses , setCourses]=useState([]);
    useEffect(()=>{
      fetch('./serviceFake.json')
      .then(res=>res.json())
      .then(data=>setCourses(data));
    },[])
    return (
        <div className="text-center text-success mt-5 mb-5">
            <h2>Welcome to our service</h2>
            <p>Chose the best service for you</p>
            <div className="service-card">
                {
                    courses.map(course=><Course
                        key={courses.name}
                        course={course}
                        ></Course>)
                }
            </div>
        </div>
    );
};

export default Services;