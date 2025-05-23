
export default function SkeletonCard() {
  return (
    <div className='w-full flex flex-col justify-between space-y-4 shadow-lg border border-gray-200 p-4 md:max-w-[250px] rounded-xl h-50 bg-white animate animate-pulse'>
     
      <div className='flex justify-between items-center'>
        <div className='h-6 bg-gray-300 rounded w-2/3'></div>
        <div className='h-5 w-5 bg-gray-300 rounded-full'></div>
      </div>

    
      <div className='space-y-2'>
        <div className='h-4 bg-gray-300 rounded w-full'></div>
        <div className='h-4 bg-gray-300 rounded w-5/6'></div>
      </div>

   
      <div className='border-t border-gray-200 flex justify-between items-center pt-2'>
        <div className='h-4 w-8 bg-gray-300 rounded'></div>
        <div className='h-4 w-16 bg-gray-300 rounded'></div>
      </div>
    </div>
  );
}
