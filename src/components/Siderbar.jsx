
import React, { useState } from 'react';
import { ListChecks, LogOut, ArrowLeft, ArrowRight, Menu } from 'lucide-react';
import useAuth from '../hooks/Authhook';

export default function Sidebar() {
 
const {logout,user}=useAuth()
console.log(user);

  const [expand, setExpand] = useState(true);
  const [width, setWidth] = useState('w-1/6');

  const handleToggle = () => {
    setExpand(!expand);
    setWidth(!expand ? 'w-1/6' : 'w-1/12');
  };
const handleClick=()=>{
  logout()
}
  return (
    <div className={`bg-black  h-screen p-4 ${width} duration-300`}>
      <div className='w-full relative h-full flex flex-col items-center gap-5'>

        {/* Toggle Button */}
        <div
          onClick={handleToggle}
          className={`absolute top-4 ${expand ? 'right-2' : 'right-8 top--2'} cursor-pointer`}
        >
          {expand ? <ArrowLeft  className='text-white'/> : <Menu size={25}  className='text-white'/>}
        </div>

        {/* Profile Picture */}
        <div className={`${expand ? 'w-20 h-20 ' : 'w-12 h-12'} rounded-full  bg-white mt-16`} />

      ``
        {expand && <h1 className='text-2xl font-bold text-white'>{user.name}</h1>}

        {/* TODO Link */}
        <div className='w-full'>
          <div className='text-xl flex gap-4 items-center w-full font-bold bg-white p-3 justify-center'>
            <ListChecks size={20} />
            {expand && <span>TODO</span>}
          </div>
        </div>

        {/* Logout Button */}
        <div onClick={handleClick}   className='p-3 cursor-pointer text-xl flex gap-4 items-center font-bold w-full absolute bottom-0 bg-green-200 justify-center'>
          <LogOut size={20} />
          {expand && <span>Logout</span>}
        </div>
      </div>
    </div>
  );
}
