import { FC } from 'react';
import { useFormContext } from 'react-hook-form';

interface CheckboxProps {
  name: string;
  required?: boolean;
  text: string;
}

const Checkbox: FC<CheckboxProps> = ({ name, required, text }) => {
  const {
    formState: { errors },
    register,
  } = useFormContext();
  return (
    <>
      <div className='mb-4'>
        <label className='block text-gray-700 text-sm font-bold mb-2'>
          {text}
          <input
            required={required}
            style={{ border: errors[name] && 'solid 1px red' }}
            type='checkbox'
            className='ml-2'
            {...register(name, {
              required: required ? 'This field is required' : false,
            })}
          />
        </label>
        {errors[name]?.message as string}
      </div>
    </>
  );
};

export default Checkbox;
