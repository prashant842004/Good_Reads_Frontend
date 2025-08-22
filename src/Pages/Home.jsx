import React from 'react';
import logo from '../Assets/book.png';
import { Link } from 'react-router-dom';

const Home = () => {
    return (


            //  <div className="h-screen w-full bg-[url('C:\Users\JOHN\Desktop\Good_Reads_Frontend\src\Assets\background.jpg')] 
            //  bg-cover bg-center flex items-center justify-center">
      
    <div className='flex flex-col items-center justify-center gap-10 h-screen w-full bg-[url("C:\Users\JOHN\Desktop\Good_Reads_Frontend\src\Assets\background.jpg")] '>
            <div className='h-50 w-50'>
                <img className='h-full w-full'
                src={logo}
                 alt="logo" />
            </div>
             
             <div className='flex justify-center items-center gap-10'>
                <div className='w-2/3 text-center font-semibold'>
                    <h1 className='text-white text-5xl font-bold tracking-widest leading-13'>
                        BookShelf <br/>
                        <span className='text-yellow-200'>
                        Your Personal Library and Social Networks For BookWorms
                        </span>
                    </h1>
                </div>
                
            </div>
                <div>

                    <button className='btn btn-primary rounded-md  text-2xl'>
                       <Link to='/Signup'>Register
                       </Link> </button>
                    <button className='btn btn-warning mx-4 rounded-md  text-2xl text-white'>Login</button>
                </div>
             
           </div>

    );
}

export default Home;
