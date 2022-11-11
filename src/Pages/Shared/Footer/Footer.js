import { Footer } from 'flowbite-react';
import React from 'react';

const FooterBar = () => {
    return (
        <div className="my-auto mx-6">
            <Footer container={true}>                
                <Footer.LinkGroup>
                    <Footer.Link href="#" className="text-lg text-black px-5">
                        About
                    </Footer.Link>
                    <Footer.Link href="#" className="text-lg text-black">
                        Contact
                    </Footer.Link>
                </Footer.LinkGroup>
                <Footer.Copyright
                    href=""
                    by="Workout Comrade™"
                    year={2023} className="text-md"
                />
            </Footer>
        </div>
    );
};

export default FooterBar;