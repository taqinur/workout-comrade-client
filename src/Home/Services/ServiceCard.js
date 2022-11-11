import { Button, Card } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
    const {_id, title, price, img, description} = service;
    return (
        <div className="max-w-sm mt-4 mx-auto">
            <Card imgSrc={img} style={{ height: '28rem' }} >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {title}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    {description.slice(0,78)+'...'}
                </p>
                <div className='grid grid-cols-2'>
                    <h6 className='my-auto text-lg font-semibold text-red-700'>Price: ${price}</h6>
                    <Link to={`/services/${_id}`}><Button className='mx-auto'>View Details</Button></Link>
                </div>
            </Card>
        </div>
    );
};

export default ServiceCard;