import { Button, Card, Label, TextInput } from 'flowbite-react';
import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const ServiceDetails = () => {
    const { _id, title, img, rating, price, description } = useLoaderData();
    const {user} = useContext(AuthContext);

    const handleReview = event =>{
        event.preventDefault();
        const form = event.target;
        const email = user?.email;
        const review = form.review.value;
        const userRating = form.rating.value || 'unrated';
        const reviewService = {
            service: _id,
            serviceName: title,
            userName: user?.displayName,
            userPhoto: user?.photoURL,
            email,
            userRating,
            review
        }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewService)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
                alert('Your review of this service is accepted');
                form.reset();
            }
        })
        .catch(e => console.error(e));
    }

    return (
        <div className='py-4 bg-green-200'>
            <Card className="m-auto mt-8 mb-5" style={{ maxWidth: '40rem' }} >
                <h2 className="text-4xl font-bold text-violet-700">{title}</h2>
                <p className='text-red-700'>User Rating: {rating} / 5</p>
                <div className="row g-0">
                    <div className="my-auto">
                        <img src={img} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="mt-5">

                        <p className="text-xl tracking-tight">{description}</p>
                        <h3 className="text-red-700 text-2xl font-bold">Price: $ {price}</h3>

                    </div>
                </div>
            </Card>


            <form onSubmit={handleReview} className="w-9/12 mx-auto my-8 flex flex-col gap-4">
                <h2 className='text-2xl'>Review This Service</h2>
                <div className='form-control'>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="large"
                            value="Your Review"
                        />
                    </div>
                    <TextInput
                        id="large"
                        name='review'
                        type="text"
                        sizing="lg"
                        required={true}
                    />
                </div>
                <div className='form-control'>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="base"
                            value="Rating (Optional)"
                        />
                    </div>
                    <TextInput
                        id="base"
                        name='rating'
                        type="number"
                        min="1" max="5"
                        sizing="sm"
                    />
                </div>
                <div className='form-control'>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="small"
                            value="Your Email"
                        />
                    </div>
                    <TextInput
                        id="small"
                        name='email'
                        type="text"
                        sizing="sm"
                        defaultValue={user?.email}
                        readOnly
                    />
                </div>
                <Button className='form-control' type="submit">Post Your Review</Button>
            </form>
        </div>

    );
};

export default ServiceDetails;