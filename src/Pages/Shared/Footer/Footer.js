import { Footer } from 'flowbite-react';
import React from 'react';

const FooterBar = () => {
    return (
        <div>
            <Footer container={true}>
                <Footer.Copyright
                    href=""
                    by="Workout Comrade™"
                    year={2023}
                />
                <Footer.LinkGroup>
                    <Footer.Link href="#">
                        About
                    </Footer.Link>
                    <Footer.Link href="#">
                        Contact
                    </Footer.Link>
                </Footer.LinkGroup>
            </Footer>
        </div>
    );
};

export default FooterBar;