import { FC, ReactNode } from 'react';

interface PreloaderProps {
  children: ReactNode;
  isLoading: boolean;
}

const Preloader: FC<PreloaderProps> = ({ children, isLoading }) => {
  return (
    <>
      {isLoading ? (
        <div className='flex justify-center items-center h-screen'>
          <div className='animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900'></div>
        </div>
      ) : (
        children
      )}
    </>
  );
};

export default Preloader;
