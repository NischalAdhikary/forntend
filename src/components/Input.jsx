import React from 'react'

export default function Input({type,placehoder,name,value,onChange, ...rest}) {
  return (
    <div className='w-full '>
        <input {...rest} name={name}  value={value} onChange={onChange} className='w-full p-2 rounded  border-b-gray-50 outline' type={type} placeholder={placehoder}>
       
        </input>
      
    </div>
  )
}
