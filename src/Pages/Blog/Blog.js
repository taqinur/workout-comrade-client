import { Accordion } from 'flowbite-react';
import React from 'react';

const Blog = () => {
    return (
        <div className='py-6 bg-green-200'>
            <Accordion className='my-12 mx-10'>
            <Accordion.Panel>
                <Accordion.Title>
                    Difference between SQL and NoSQL?
                </Accordion.Title>
                <Accordion.Content>
                    <p className="mb-2 text-gray-700 dark:text-gray-400">
                        1. A SQL, or relational, database enables us to store and access data with clearly defined relations; in other words, each item in a table is connected to the others in some capacity. <br />
                        With a non-relational database, data is not beholden to relationships. A non-relational database is typically much more flexible than its relational counterpart.
                    </p>
                    <p className="text-gray-500 dark:text-gray-400">
                        2. NoSQL databases tend to be more flexible than SQL ones, because data does not need a predefined schema.
                    </p>
                    <p className="text-gray-500 dark:text-gray-400">
                        3. Both SQL and NoSQL databases can handle lots of data, but scale differently. SQL databases are scaled vertically. NoSQL was designed to be scaled horizontally.
                    </p>
                </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
                <Accordion.Title>
                    What is JWT, and how does it work?
                </Accordion.Title>
                <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                        A JSON Web Token is a pre-defined format developers use to exchange claims between two applications. A typical token would consist of claims in the JSON format (hence the J for JSON) accompanied by a mechanism for encrypting and signing the JSON in order for other applications to trust it.
                    </p>
                    <p className="text-gray-500 dark:text-gray-400">
                        The client is requesting the identity provider (idP) for login with credentials (username + password). The idP then generates a JWT certifying the user identity. This JWT is a key for the client to authorize itself against a protected resource. The JSON Web token is actually sent in the header of the request when requesting a GET, POST, PUT or DELETE command to the resource server. <br /> To break it down: <br />

                        1. The user is signing into idP (Facebook, Azure AD, Google, Keycloak, FusionAuth, etc…) <br />
                        2. The identity provider is verifying the user credentials and upon success returns a JWT signed with a secret key. <br />
                        3. The user forwards this JWT when requesting a protected endpoint at the resource server inside the header of the request. <br />
                        4. The resource server then verifies against Facebook, Azure AD, Google, etc… that the token is valid using the public key. <br />
                        5. The resource server then returns a true/false response to whether the token is valid and issued by them for that client. This would authorize them and give them a role that allows them to perform actions at the resource server.

                    </p>
                </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
                <Accordion.Title>
                    What is the difference between javascript and NodeJS?
                </Accordion.Title>
                <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                        1. The main difference is that JavaScript is a basic programming language that can be used in any browser that has the JavaScript Engine installed. While Node JS is an interpreter or runtime environment for the JavaScript programming language, it requires libraries that can be readily accessible from JavaScript programming to make it more useful.
                    </p>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                        2. JavaScript is a scripting language that adheres to the Java programming language standard. There may be some differences in the way code is written, but we can say that it adheres to the Java programming language standard. Whereas node JS is designed in C++ and provides a browser javascript runtime engine based on the V8 engine, it allows us to run a written javascript programme in any browser environment.
                    </p>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                        3. Unique non-blocking job JavaScript includes several specific objects to access any operating system, however, they are all operating system specific. For e.g., ActiveX Control is a Windows-only application. However, Node JS is provided with the ability to conduct non-blocking operations related to the operating system from any JavaScript programming. There is no operating system specific constants in it. Node JS is well-versed in creating a particular coupling with the file system, allowing the developer to read and write to disc.
                    </p>
                </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
                <Accordion.Title>
                    How does NodeJS handle multiple requests at the same time?
                </Accordion.Title>
                <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                        Node.js is said to be single-threaded. While not quite true, it reflects that most work is done on a single thread running the event loop. The asynchronous nature of JavaScript means that Node.js can handle a larger number of concurrent requests on that single thread. <br />
                        At the same time that does not mean that Node.js applications/solutions are single-threaded. Today's computers provide multiple concurrent threads of execution (either with multiple cores and/or cores that can support multiple concurrent threads of execution) and Node.js applications have long exploited those additional threads by running multiple Node.js instances.
                    </p>

                </Accordion.Content>
            </Accordion.Panel>
        </Accordion>
        </div>
    );
};

export default Blog;