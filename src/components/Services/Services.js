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
        <div>
            <h2>hello service</h2>
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