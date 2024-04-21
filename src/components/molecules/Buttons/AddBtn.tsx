import { FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import Button from '../../atoms/Forms/Button';

interface AddBtnProps {
  onClick: () => void;
  text: string;
}

const AddBtn: FC<AddBtnProps> = ({ onClick, text }) => {
  return (
    <>
      <FormProvider {...useForm()}>
        <Button onClick={onClick}>
          <div className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'>{text}</div>
        </Button>
      </FormProvider>
    </>
  );
};

export default AddBtn;
