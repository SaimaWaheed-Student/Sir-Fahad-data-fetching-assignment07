import React from 'react';

const Loader = () => {
  return (
    <div className='h-screen flex justify-center items-center'>
      <div className="relative">
        <div className="w-20 h-30 border-yellow-500 border-2 rounded-full" />
        <div className="w-20 h-30 border-red-700 border-t-2 animate-spin rounded-full absolute left-0 top-0" />
      </div>
      <div className="relative">
        <div className="w-10 h-20 border-yellow-500 border-2 rounded-full" />
        <div className="w-10 h-20 border-red-700 border-t-2 animate-spin rounded-full absolute left-0 top-0" />
      </div>

      <div className="relative">
        <div className="w-10 h-10 border-yellow-500 border-2 rounded-full" />
        <div className="w-10 h-10 border-red-700 border-t-2 animate-spin rounded-full absolute left-0 top-0" />
      </div>
      <div className="relative">
            </div>
  <div className="w-5 h-5 border-yellow-500 border-2 rounded-full" />
        <div className="w-5 h-5 border-red-700 border-t-2 animate-spin rounded-full absolute left-0 top-0" />
      
    </div>
  );
}

export default Loader;