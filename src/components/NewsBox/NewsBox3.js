import React from 'react';
import NewCard3 from './NewCard/NewCard3';

const NewsBox3 = () => {
    return (
        <div className="grid grid-cols-3 gap-4 mt-[15px]">
            <NewCard3 />
            <NewCard3 />
            <NewCard3 />
        </div>
    );
};

export default NewsBox3;