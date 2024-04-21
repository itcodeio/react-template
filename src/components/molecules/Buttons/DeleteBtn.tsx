import { FC } from 'react';
import Button from '../../atoms/Forms/Button';

interface DeleteBtnProps {
  onClick: () => void;
  text: string;
}

const DeleteBtn: FC<DeleteBtnProps> = ({ onClick, text }) => {
  return (
    <>
      <Button onClick={onClick}>
        <div className='bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded'>{text}</div>
      </Button>
    </>
  );
};

export default DeleteBtn;
