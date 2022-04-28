import React from 'react';

const SingleService = ({ service }) => {
    const { img, title } = service;
    return (
        <div className='relative'>
            <img className='rounded' src={img} alt="" />
            <h5 className='absolute bottom-0 w-full text-center py-2 text-white font-bold cursor-pointer rounded-b bg-yellow-300'>{title}</h5>
        </div>
    );
};

export default SingleService;