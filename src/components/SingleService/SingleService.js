import React from 'react';

const SingleService = ({ service }) => {
    const { img } = service;
    return (
        <div>
            <img src={img} alt="" />
        </div>
    );
};

export default SingleService;