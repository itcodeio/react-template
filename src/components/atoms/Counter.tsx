import { FC } from 'react';
import { observer } from 'mobx-react-lite';
import { useStores } from '../shared/models/RootStoreProvider';

const Counter: FC = () => {
  const {
    counterStore: { count, increment, decrement },
  } = useStores();
  return (
    <>
      <div className='flex items-center justify-center py-4'>
        <button
          onClick={() => increment(1)}
          className='text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-xl px-3 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
          +
        </button>
        <div className='mx-4 text-2xl font-bold'>{count}</div>
        <button
          onClick={() => decrement(1)}
          className='text-white bg-red-500 hover:bg-red-700 focus:ring-4 focus:ring-red-300 font-bold rounded-lg text-xl px-3 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800'>
          -
        </button>
      </div>
    </>
  );
};

export default observer(Counter);
