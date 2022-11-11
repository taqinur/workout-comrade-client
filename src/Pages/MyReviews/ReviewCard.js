import { Button, Card } from 'flowbite-react';
import React from 'react';
import { FaWindowClose } from 'react-icons/fa';

const ReviewCard = ({ reviewc }) => {
    const {serviceName , userRating, review} = reviewc;
    
    return (
        <>
        {
            reviewc?
            <Card>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Service Name: {serviceName}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                Given Review: {review}
            </p>
            <p className="font-normal text-green-700 dark:text-gray-400">
                Rating: {userRating}
            </p>
            <Button><FaWindowClose></FaWindowClose> Delete</Button>
            
        </Card>
        :<>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                No reviews added
            </h5>
            </>
        }
        </>
    );
};

export default ReviewCard;