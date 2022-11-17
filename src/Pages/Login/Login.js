import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { Button, Card, Label, TextInput } from 'flowbite-react';


const Login = () => {

    const [error, setError] = useState('');
    const { logIn } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        logIn(email, password)
            .then(result => {
                const user = result.user;
                form.reset();
                setError('');
                navigate(from, { replace: true });
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const { providerLogin } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();

    const githubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;

            })
            .catch(error => {
                setError(error.message);
            })
    }

    const handleGithubSignIn = () => {
        providerLogin(githubProvider)
            .then(result => {
                const user = result.user;

            })
            .catch(error => {
                setError(error.message);
            })
    }

    return (

        <div className='py-6 bg-green-200'>
            <div className="max-w-sm mx-auto my-3">
            <Card>
                <form onSubmit={handleSubmit}  className="flex flex-col gap-4">
                    <div className='form-control'>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="email1"
                                value="Your email"
                            />
                        </div>
                        <TextInput
                        name='email'
                            id="email"
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
                            id="password"
                            type="password"
                            required={true}
                        />
                    </div>
                    <Button className='form-control' type="submit">
                        Submit
                    </Button>
                    <h6 className='mt-2'>Do not have an account? <Link to={'/register'}><span className='text-blue-700'>Register here</span></Link></h6>
                    <Button onSubmit={handleGoogleSignIn} className='mb-2'><FaGoogle className='mr-2'></FaGoogle> Log In with Google
                    </Button>
                    <Button onClick={handleGithubSignIn}>
                        <FaGithub className='mr-2'></FaGithub> Log In with Github
                    </Button>
                    <p className='text-red-700'>{error.slice(22, -2)}</p>
                </form>
            </Card>
        </div>
        </div>
    );
};

export default Login;