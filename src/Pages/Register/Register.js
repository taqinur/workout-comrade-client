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
                <form className="flex flex-col gap-4">
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="name1"
                                value="Your Name"
                            />
                        </div>
                        <TextInput
                            id="name"
                            type="name"
                            placeholder="Enter Your Name"
                            required={true}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="email1"
                                value="Your email"
                            />
                        </div>
                        <TextInput
                            id="email1"
                            type="email"
                            placeholder="Your Email"
                            required={true}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="password1"
                                value="Your password"
                            />
                        </div>
                        <TextInput
                            id="password1"
                            type="password"
                            required={true}
                        />
                    </div>
                    <Button onClick={handleSubmit} type="submit">
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