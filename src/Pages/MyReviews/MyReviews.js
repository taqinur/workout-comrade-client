import React, { useContext, useEffect, useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import ReviewCard from './ReviewCard';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([])

    const url = `http://localhost:5000/reviews?email=${user.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])

    return (
        <div className='py-4 bg-green-200'>
            <h2 className='text-center text-lg'>
                <img
                    className="mb-3 h-24 w-24 mx-auto rounded-full shadow-lg"
                    src={user?.photoURL || <FaUser></FaUser>} alt=''/>
                    Name: {user?.displayName} <br /> Total reviews: {reviews.length}</h2>
            <div className="mx-auto my-6 grid gap-5 grid-cols-1 md:grid-cols-3">
                {
                    reviews.map(reviewc => <ReviewCard key={reviewc._id}
                        reviewc={reviewc}
                    ></ReviewCard>)
                }
            </div>
        </div>
    );
};

export default MyReviews;