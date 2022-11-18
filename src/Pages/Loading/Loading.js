import { Spinner } from 'flowbite-react';
import React from 'react';

const Loading = () => {
    return (
        <div className="text-center">
            <Spinner aria-label="Center-aligned spinner example" />
        </div>
    );
};

export default Loading;