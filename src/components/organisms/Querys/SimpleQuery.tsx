import { FC } from 'react';
import useSWR from 'swr';
import Preloader from '../../atoms/UI/Preloader';

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const fetcher = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Error');
  }
  return response.json();
};

const SimpleQuery: FC = () => {
  const { data, isLoading } = useSWR<Todo[]>('https://jsonplaceholder.typicode.com/todos', fetcher);

  return (
    <Preloader isLoading={isLoading}>
      <>
        {data?.map((item) => (
          <div key={item.id}>
            <>{item.title}</>
          </div>
        ))}
      </>
    </Preloader>
  );
};

export default SimpleQuery;
