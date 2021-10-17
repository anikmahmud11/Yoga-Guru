
import React, { useCallback, useState } from 'react';
import { Bar, BarChart, Cell } from 'recharts';

const AboutUs = () => {
    const data = [
        {
          name: "Page A",
          uv: 4000,
          pv: 2400,
          amt: 2400
        },
        {
          name: "Page B",
          uv: 3000,
          pv: 1398,
          amt: 2210
        },
        {
          name: "Page C",
          uv: 2000,
          pv: 9800,
          amt: 2290
        },
        {
          name: "Page D",
          uv: 2780,
          pv: 3908,
          amt: 2000
        },
        {
          name: "Page E",
          uv: 1890,
          pv: 4800,
          amt: 2181
        },
        {
          name: "Page F",
          uv: 2390,
          pv: 3800,
          amt: 2500
        },
        {
          name: "Page G",
          uv: 3490,
          pv: 4300,
          amt: 2100
        }
      ];
        const [activeIndex, setActiveIndex] = useState(0);
        const activeItem = data[activeIndex];
      
        const handleClick = useCallback(
          (entry, index) => {
            setActiveIndex(index);
          },
          [setActiveIndex]
        );
    return (
        <div>
            <div className="aboutUs-flex container w-100 ">
                <div className="w-100 mt-5 text-success about" >
                    <h1>Global Awareness Outreach</h1>
                    <p>In the last thirteen years, Yoga Gives Back has spread globally with 150 Ambassadors who are yoga teachers sharing YGB’s mission with their communities as well as raising funds with their events. We have also created a community of dedicated volunteers and partnering sponsors whose annual contribution also tremendously helps our mission.</p>
                </div>
                <div className=" w-100 mt-5">
                    <img src="https://image.shutterstock.com/image-photo/portrait-mixed-race-young-girl-260nw-1850790013.jpg" alt="" />
                </div>
            </div>
            <div className="text-center text-success mt-5 ">
                <h4>Health  Benefits</h4>
            <BarChart className="w-100 " width={650} height={400} data={data}>
        <Bar  dataKey="uv" onClick={handleClick}>
          {data.map((entry, index) => (
            <Cell
              cursor="pointer"
              fill={index === activeIndex ? "#82ca9d" : "#8884d8"}
              key={`cell-${index}`}
            />
          ))}
        </Bar>
      </BarChart>
      <p className="content">{`Uv of "${activeItem.name}": ${activeItem.uv}`}</p>
            </div>
        </div>
    );
};

export default AboutUs;