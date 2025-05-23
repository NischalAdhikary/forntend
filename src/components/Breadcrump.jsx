import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Breadcrumb = () => {
  const location = useLocation();
  const segments = location.pathname.split("/").filter(Boolean);

  return (
    <nav className="flex items-center h-15 shadow border-b  border-gray-400  bg-white space-x-1 text-sm text-black p-4">
     
      {segments.map((segment, index) => {
        const path = '/' + segments.slice(0, index + 1).join('/');
        return (
          <React.Fragment key={path}>
          
            <Link to={path} className="hover:underline capitalize">
              {segment}
            </Link> 
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;
