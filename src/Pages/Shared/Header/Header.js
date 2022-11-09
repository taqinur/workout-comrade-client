import { Button, Navbar } from 'flowbite-react';
import React from 'react';

const Header = () => {
    return (
        <div>
            <Navbar
                fluid={true}
                rounded={true}
                className="bg-green-300 py-10"
            >
                <Navbar.Brand>
                    <img
                        src="/icon.png"
                        className="mr-3 h-6 sm:h-9"
                        alt="Flowbite Logo"
                    />
                    <span className="self-center whitespace-nowrap text-3xl font-semibold dark:text-white">
                        Workout Comrade
                    </span>
                </Navbar.Brand>
                <div className="flex text-2xl md:order-2">
                    <Button>
                        Login / Signup
                    </Button>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <Navbar.Link
                        href="/navbars"
                        active={true}
                        className="text-lg"
                    >
                        Home
                    </Navbar.Link>
                    <Navbar.Link href="/navbars" className="text-lg">
                        About
                    </Navbar.Link>
                    <Navbar.Link href="/navbars" className="text-lg">
                        Services
                    </Navbar.Link>
                    <Navbar.Link href="/navbars" className="text-lg">
                        Pricing
                    </Navbar.Link>
                    <Navbar.Link href="/navbars" className="text-lg">
                        Blog
                    </Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;