import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SingleService from '../SingleService/SingleService';

const Home = () => {
    const [volunteerServices, setVolunteerServices] = useState([]);
    useEffect(() => {
        (async () => {
            const url = 'http://localhost:5000/services';
            axios.get(url)
                .then(data => {
                    console.log(data);
                    setVolunteerServices(data.data);
                });
        })();
    }, []);


    return (
        <div >
            <div className='grid md:grid-cols-4 gap-5 px-20 py-5'>
                {
                    volunteerServices.map(service => <SingleService key={service._id} service={service}></SingleService>)
                }
            </div>
        </div>
    );
};

export default Home;