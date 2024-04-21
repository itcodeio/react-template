import { FC } from 'react';
import { useFormContext } from 'react-hook-form';

interface SelectProps {
  name: string;
  required?: boolean;
  text: string;
}

const Select: FC<SelectProps> = ({ name, required, text }) => {
  const {
    formState: { errors },
    register,
  } = useFormContext();
  return (
    <>
      <div className='mb-4'>
        <label className='block text-gray-700 text-sm font-bold mb-2'>
          {text}
          <select
            defaultValue=''
            required={required}
            className='form-select mt-1 block w-full'
            {...register(name, {
              required: required ? 'This field is required' : false,
            })}>
            <option value='' disabled>
              Select an option
            </option>
            <option value='option1'>Option 1</option>
            <option value='option2'>Option 2</option>
            <option value='option3'>Option 3</option>
          </select>
        </label>
        {errors[name]?.message as string}
      </div>
    </>
  );
};

export default Select;
