import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <>
        <div className='h-[100vh] flex flex-col items-center justify-center  bg-[url("C:\Users\JOHN\Desktop\Good_Reads_Frontend\src\Assets\login.jpg")]'>
        <div className='p-5 text-black text-5xl '>
                Login To Your Account
            </div>
        <div className='w-full'>
            

            <form 
            className='flex flex-col justify-center items-center w-[100%] mx-auto' autocomplete="off">

                 <div className='my-5 w-1/4 rounded-md'>
                    <input type="text" 
                    autocomplete="off"
                    placeholder='email....'
                    className='px-8 py-3 bg-white w-full'/>

                </div>
                 <div className='my-5 w-1/4'>
                    <input type="password" 
                    autocomplete="off"
                    placeholder='password....'
                    className='px-8 py-3 bg-white w-full'/>

                </div>
                <div className='my-5 w-1/4'>
                    <button className='btn btn-success rounded-md px-2 py-1 w-full hover:bg-green-800' type='submit'>Submit</button>
                </div>
            </form>
            

             <div className='mt-4 flex justify-center items-center'>
                <p className='text-white'>
                    Do not have Account ? 
                    <button className='btn btn-danger rounded-md px-2 mx-5 hover:bg-green-500'>
                        <Link to='/Signup'>
                        Sign up
                        </Link>

                    </button>
                </p>
            </div>
        </div>
</div>
        </>

    );
}

export default Signup;
