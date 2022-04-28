import axios from 'axios';
import React, { useEffect, useState } from 'react';

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
        <div>

        </div>
    );
};

export default Home;