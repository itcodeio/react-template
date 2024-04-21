import { observer } from 'mobx-react';
import { FC, useRef } from 'react';
import SimplePopup from './SimplePopup/SimplePopup';
import { useStores } from '../models/RootStoreProvider';
import Button from '../../atoms/Forms/Button';

const renderPopup = (name: string) => {
  switch (name) {
    case 'SimplePopup':
      return <SimplePopup />;

    //! If you want to display an error popup
    // case 'ErrorPopUp':
    // default:
    //   return <ErrorPopUp />;
  }
};

const Popup: FC = () => {
  const {
    popupStore: { name, isOpenPopup, closePopup },
  } = useStores();

  const blockRef = useRef<HTMLDivElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const clickedInsideBlock = blockRef.current?.contains(event.target as Node);
    if (clickedInsideBlock) {
      // click outside the block
    } else {
      // click inside the block
      closePopup();
    }
  };

  return (
    <>
      {isOpenPopup ? (
        <>
          <div
            onClick={handleClick}
            className='fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-50 z-50'>
            <div ref={blockRef} className='bg-white p-6 rounded shadow-lg w-96 relative'>
              <Button
                onClick={() => {
                  closePopup();
                }}>
                <div className='absolute top-4 right-4 text-gray-600 hover:text-gray-800'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                  </svg>
                </div>
              </Button>
              {renderPopup(name)}
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default observer(Popup);
