import React from 'react';

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-6 w-full">
      <div className="flex gap-3">
        <img src="/src/assets/Logo.svg" alt="" />
        <p className="text-sm font-normal">
          Hello Robert 👋 <br /> Good Morning
        </p>
      </div>
      <div>
        <input
          type="text"
          placeholder="Search"
          className="border rounded-md p-2"
        />
      </div>
      <div className="flex items-center gap-3">
        <img className="w-10 h-10 rounded-full" src="/noavatar.png" alt="" />
        <p className='text-sm'>Robert Allen <br/> HR Manager</p>      </div>
    </div>
  );
};

export default Navbar;

