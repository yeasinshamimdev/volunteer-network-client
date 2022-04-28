import React from 'react';

const SingleService = ({ service }) => {
    const { img, title } = service;
    return (
        <div className='relative'>
            <img className='rounded' src={img} alt="" />
            <button className={`absolute bottom-0 w-full text-center py-2 text-white font-bold cursor-pointer rounded-b hover:bg-yellow-400 bg-yellow-300`}>{title}</button>
        </div>
    );
};

export default SingleService;