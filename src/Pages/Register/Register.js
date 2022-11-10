import { Button, Card, Label, TextInput } from 'flowbite-react';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Register = () => {

    const [error, setError] = useState('');
    const { createUser } = useContext(AuthContext);

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        console.log('clicked',form);
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                form.reset();
                form.reset();
                setError('');

            })
            .catch(error => {
                setError(error.message);
            });
    }
    return (
        <div className="max-w-sm mx-auto my-16">
            <Card>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className='form-control'>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="name1"
                                value="Your Name"
                            />
                        </div>
                        <TextInput name='name'
                            id="name"
                            type="name"
                            placeholder="Enter Your Name"
                            required={true}
                        />
                    </div>
                    <div className='form-control'>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="email1"
                                value="Your email"
                            />
                        </div>
                        <TextInput name='email'
                            id="email1"
                            type="email"
                            placeholder="Your Email"
                            required={true}
                        />
                    </div>
                    <div className='form-control'>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="password1"
                                value="Your password"
                            />
                        </div>
                        <TextInput name='password'
                            id="password1"
                            type="password"
                            required={true}
                        />
                    </div>
                    <Button className='form-control' type="submit">
                        Submit
                    </Button>
                    <h6 className='mt-2'>Already have an account? <Link to={'/login'}> <span className='text-blue-700'>Log In here</span> </Link></h6>
                    <p className='text-red-700'>{error.slice(22, -2)}</p>
                </form>
            </Card>
        </div>
    );
};

export default Register;