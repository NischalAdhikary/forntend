import React, { useEffect } from 'react'

export default function Modals({children,onClose}) {
    const divEl= React.useRef();
 useEffect(()=>{
    const handleClickOutside = (event) => {
      if (divEl.current && !divEl.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('click', handleClickOutside,true);

    return () => {
      document.removeEventListener('click', handleClickOutside,true);
    };
 })
  return (

    <div  className='fixed inset-0 z-50 bg-black/50 flex justify-center items-center ' > 
        <div ref={divEl}  className='w-1/2 h-auto bg-white p-8'>
       {children}
        
        </div>
        
    </div>
  )
}
