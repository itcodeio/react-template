import { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { routerMainConfig } from '../../shared/routes/router';

interface SidebarProps {
  children: ReactNode;
}

const Sidebar: FC<SidebarProps> = ({ children }) => {
  return (
    <div className='flex'>
      <div className='bg-gray-900 w-64 overflow-y-auto' style={{ height: '100vh' }}>
        <div className='mt-10'>
          {[...routerMainConfig].map((route, index) => (
            <Link
              key={index}
              to={route.path}
              className='block py-2 px-4 text-gray-300 hover:bg-gray-700 hover:text-white'>
              {route.name}
            </Link>
          ))}
        </div>
      </div>
      <div className='flex-grow bg-gray-100 p-8 overflow-y-auto' style={{ height: '100vh' }}>
        {children}
      </div>
    </div>
  );
};

export default Sidebar;
