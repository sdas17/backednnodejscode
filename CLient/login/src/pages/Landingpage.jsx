import React from 'react';
import dumyimage from '../assets/background1.jpg'
const backgroundImage = dumyimage; 

const Header = () => {
  return (
    <div className="relative min-h-screen bg-center bg-cover m-0 " style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <h1 className=" lg:text-7xl text-5xl   text-slate-700	">Welcome to Note Zipper</h1>
        <p className="text-3xl py-5 text-slate-700	">One sage place for all your notes</p>
        <div className="w-96 text-center space-x-4">
          <a href="/login">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Login</button>
          </a>
          <a href="/register">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Register</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
