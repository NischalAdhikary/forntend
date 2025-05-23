import React, { useEffect, useRef, useState } from 'react';
import { EllipsisVertical } from 'lucide-react';
import Dropdown from './Dropdown';

export default function     Todocard({task,index}) {
  const list = [
    { label: 'Edit', value: "edit" },
    { label: 'Delete', value: "delete" }

  ];

  const [showDropdown, setShowDropdown] = useState(false);
  const wrapperRef = useRef(null);

  const handleToggle = () => {
    setShowDropdown(prev => !prev);
  };



  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return (
    <div className='w-full flex flex-col justify-between space-y-4 relative shadow-lg border-gray-200 border p-4 md:max-w-[250px] rounded-xl h-50 bg-white'>
      
      <div className="relative" ref={wrapperRef}>
        <div className='flex justify-between'>
          <h3 className='text-2xl font-bold'>{task.title}</h3>
          <div onClick={handleToggle}>
            <EllipsisVertical size={20} className='cursor-pointer' />
          </div>
        </div>

       
        {showDropdown && (
          <div className="absolute right-0 top-0 z-50">
            <Dropdown options={list} task={task} onClose={handleToggle}  />
          </div>
        )}
      </div>

      <p>{task.description}</p>

      <div className='border-t flex justify-between items-center px-1 border-gray-200'>
        <p>{index}</p>
        <p>{task.date}</p>
      </div>
    </div>
  );
}
