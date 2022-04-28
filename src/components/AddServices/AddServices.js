import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import auth from '../../firebase.init';
import Spinner from '../Spinner/Spinner';

const AddServices = () => {
    const { register, handleSubmit } = useForm();
    const [user, loading, error] = useAuthState(auth);

    const onSubmit = data => {
        console.log(data);
        (async () => {
            const url = 'https://floating-caverns-85788.herokuapp.com/addservice';
            axios.post(url, data);
        })();

    };

    if (loading) {
        return <Spinner />
    }

    return (
        <div className='md:flex justify-center p-8 align-middle bg-indigo-200'>
            <form className='flex flex-col md:w-1/2' onSubmit={handleSubmit(onSubmit)}>
                <input className='mt-3 rounded p-2' {...register("title", { required: true, maxLength: 40 })} placeholder="Title" />
                <textarea className='mt-3 rounded p-2' {...register("description", { required: true })} placeholder="Descriptions" />
                <input className='mt-3 rounded p-2 ' type="date" {...register("date", { required: true })} />

                <input className='mt-3 rounded p-2 ' {...register("img", { required: true })} placeholder="image link" />

                <input className='mt-3 rounded p-2 w-1/3 mx-auto bg-indigo-800 text-white cursor-pointer' type="submit" value="Add Service" />
            </form>
        </div>
    );
};

export default AddServices;