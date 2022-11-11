import { Button } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect( ()=>{
        fetch('https://workout-comrade-server.vercel.app/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className='bg-green-200 py-6'>
        <div>
            <p className="text-5xl text-center mt-10 font-bold text-green-700">Most Popular Services</p>
            <p className='text-center mt-3 font-semibold text-violet-600'>Get in shape with a totally customizable intensive workout program <br />Only Available for YOU!</p>
        </div>
        <div className='grid gap-5 grid-cols-1 md:grid-cols-3'>
            {
                services.map(service => <ServiceCard
                key={service._id}
                service={service}
                ></ServiceCard>)
            }
        </div>
        </div>
    );
};

export default Services;