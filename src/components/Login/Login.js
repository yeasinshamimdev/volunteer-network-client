import React, { useEffect } from 'react';
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Spinner from '../Spinner/Spinner';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [user, loading, error] = useAuthState(auth);
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        const totalError = error || googleError;
        if (totalError) {
            if (error?.message || googleError?.message === 'Firebase: Error (auth/popup-closed-by-user).') {
                toast.error('User login failed!!')
            }
        }
    }, [error, googleError]);

    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
            toast.success('Login successful');
        }
    }, [googleUser])

    if (googleLoading || loading) {
        return <Spinner />
    }



    return (
        <div className='flex justify-center'>
            <button onClick={() => signInWithGoogle()} className='bg-indigo-400 text-white py-2 px-5 rounded hover:bg-indigo-500 my-14'>Sign in with google</button>
        </div>
    );
};

export default Login;