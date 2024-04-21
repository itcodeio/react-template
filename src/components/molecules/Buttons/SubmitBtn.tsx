import { FC } from 'react';
import Button from '../../atoms/Forms/Button';

interface SubmitBtnProps {
  onClick?: () => void;
  text: string;
  type?: 'button' | 'submit' | 'reset';
}

const SubmitBtn: FC<SubmitBtnProps> = ({ onClick, text, type = 'submit' }) => {
  return (
    <Button
      onClick={() => {
        onClick && onClick();
      }}
      type={type}>
      <div className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>{text}</div>
    </Button>
  );
};

export default SubmitBtn;
