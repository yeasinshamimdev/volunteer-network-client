import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SingleService from '../SingleService/SingleService';
import Spinner from '../Spinner/Spinner';

const Home = () => {
    const [volunteerServices, setVolunteerServices] = useState([]);
    const [user, loading, error] = useAuthState(auth);

    useEffect(() => {
        (async () => {
            const url = 'https://floating-caverns-85788.herokuapp.com/services';
            axios.get(url)
                .then(data => {
                    console.log(data);
                    setVolunteerServices(data.data);
                });
        })();
    }, []);
    if (loading) {
        return <Spinner />
    }


    return (
        <div >
            <div className='grid md:grid-cols-4 gap-5 px-10 py-2 md:px-20 md:py-5'>
                {
                    volunteerServices.map(service => <SingleService key={service._id} service={service}></SingleService>)
                }
            </div>
        </div>
    );
};

export default Home;