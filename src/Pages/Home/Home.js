import { Card } from 'flowbite-react';
import React from 'react';

const Home = () => {
  return (
      <div className="w-full h-auto my-6">
        <Card imgSrc="/banner1.jpg">
          <h5 className="text-4xl font-bold tracking-tight text-center text-red-500 dark:text-white">
          Join Us for The Absolute Transformation!!
          </h5>
        </Card>
      </div>
  );
};

export default Home;