import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='text-4xl  text-center font-bold mt-16'>
        <img className="mx-auto w-80" src={'https://i.ibb.co/5h7JNnJ/images.png'} alt="" />
        <h1 className="text-red-600">404 NOT FOUND</h1>
      <Link to={'/'}><button className="px-3 py-4 rounded-lg bg-gradient-to-r from-indigo-700 to-cyan-400 mt-5 text-white">Back to Home</button></Link>
    </div>
    );
};

export default Error;