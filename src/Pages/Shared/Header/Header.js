import { Button, Navbar } from 'flowbite-react';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Header = () => {
    const {user, logOut} = useContext(AuthContext);

    const handleLogOut = ()=>{
        logOut()
        .then( ()=> {})
        .catch(error => console.error(error))
    }
    return (
        <div 
        className="m-4">
            <Navbar
                fluid={true}
                rounded={true}
            >
                <Navbar.Brand>
                    <img
                        src="/icon.png"
                        className="mr-3 h-6 sm:h-9"
                        alt="Flowbite Logo"
                    />
                    <span className="self-center whitespace-nowrap text-3xl text-violet-800 font-semibold dark:text-white">
                        Workout Comrade
                    </span>
                </Navbar.Brand>
                <div className="flex text-2xl md:order-2">
                    
                    {user ?
                <>
                <Link className='mx-2 text-decoration-none text-xl'>{user?.displayName}
                </Link>
                            <Button onClick={logOut}>Logout</Button>
                </>
                : <><Button>
                <Link to={'/login'}>
                Login / SignUp
                </Link>
            </Button></>
                }

                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                <Navbar.Link
                        className="text-lg"
                    >
                        <Link to={'/'}>
                        Home
                        </Link>
                    </Navbar.Link>
                    <Navbar.Link className="text-lg">
                    <Link to={'/about'}>
                        About
                        </Link>
                    </Navbar.Link>
                    <Navbar.Link className="text-lg">
                        <Link to={'/services'}> Services </Link>
                    </Navbar.Link>
                    <Navbar.Link className="text-lg">
                        Pricing
                    </Navbar.Link>
                    <Navbar.Link className="text-lg">
                    <Link to={'/blog'}>
                        Blog
                        </Link>
                    </Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;