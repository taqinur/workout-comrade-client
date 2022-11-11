import { Button, Card } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';
import Services from '../Services/Services';

const Home = () => {
  return (
      <div className="w-full py-4 h-auto my-6 bg-green-200">
        <Card imgSrc="https://i.ibb.co/y58H87T/banner1.jpg" className='w-9/12 m-auto'>
          <h5 className="text-4xl font-bold tracking-tight text-center text-red-500 dark:text-white">
          Join The Comrade for The Absolute Transformation!!
          </h5>
        </Card>
        <Services></Services>
        <Button className='mx-auto mt-4'><Link to={'/services'}>View All Services</Link></Button>
        
      </div>
  );
};

export default Home;