import { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import { pattern as pt } from '../../shared/assets/patterns/pattern';

interface InputProps {
  name: string;
  required?: boolean;
  text: string;
  type?: string;
  pattern?: {
    value: RegExp;
    message: string;
  };
}

const Input: FC<InputProps> = ({ name, required, text, pattern = pt, type = 'text' }) => {
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
            type={type}
            className='form-input mt-1 block w-full'
            {...register(name, {
              required: required ? 'This field is required' : false,
              pattern,
            })}
          />
        </label>
        {errors[name]?.message as string}
      </div>
    </>
  );
};

export default Input;
