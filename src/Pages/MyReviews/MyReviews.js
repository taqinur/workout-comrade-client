import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Loading from '../Loading/Loading';
import ReviewCard from './ReviewCard';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const url = `https://workout-comrade-server.vercel.app/reviews?email=${user.email}`;

    const { data: reviews, isLoading, refetch } = useQuery({
        queryKey: ['review'],
        queryFn: () => fetch(url)
            .then(res => res.json())
    })

    if (isLoading) {
        return <Loading></Loading>;
    }
    return (
        <div className='py-4 bg-green-200'>
            <h2 className='text-center text-lg'>
                <img
                    className="mb-3 h-24 w-24 mx-auto rounded-full shadow-lg"
                    src={user?.photoURL || <FaUser></FaUser>} alt='' />
                Name: {user?.displayName} <br /> Total reviews: {reviews.length}</h2>
            <div className="mx-auto my-6 grid gap-5 grid-cols-1 md:grid-cols-3">
                {
                    reviews?.map(reviewc => <ReviewCard key={reviewc._id}
                        reviewc={reviewc}
                    ></ReviewCard>)
                }
            </div>
        </div>
    );
};

export default MyReviews;