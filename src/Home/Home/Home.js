import { Button, Card } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../Services/ServiceCard';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Pages/Loading/Loading';

const Home = () => {

  const { data: services, isLoading } = useQuery({
    queryKey: ('title'),
    queryFn: () => fetch('https://workout-comrade-server.vercel.app/services')
      .then(res => res.json())
  })

if (isLoading){
        return <Loading></Loading> ;
      }
  return (
    <div className="w-full py-4 h-auto my-6 bg-green-200">
      <Card imgSrc="https://i.ibb.co/y58H87T/banner1.jpg" className='w-9/12 m-auto'>
        <h5 className="text-4xl font-bold tracking-tight text-center text-red-500 dark:text-white">
          Join The Comrade for The Absolute Transformation!!
        </h5>
      </Card>

      <div>
        <p className="text-5xl text-center mt-10 font-bold text-green-700">Most Popular Services</p>
        <p className='text-center mt-3 font-semibold text-violet-600'>Get in shape with a totally customizable intensive workout program <br />Only Available for YOU!</p>
      </div>
      <div className='grid gap-5 grid-cols-1 md:grid-cols-3'>
        {
          services?.map(service => <ServiceCard
            key={service._id}
            service={service}
          ></ServiceCard>).slice(0, 3)
        }
      </div>
      <Link to={'/services'}><Button className='mx-auto mt-4'>View All Services</Button></Link>
    </div>
  );
};

export default Home;