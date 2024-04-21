import { FC } from 'react';
import { useFormContext } from 'react-hook-form';

interface MultiSelectProps {
  name: string;
  required?: boolean;
  text: string;
}

const MultiSelect: FC<MultiSelectProps> = ({ name, required, text }) => {
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
            required={required}
            className='form-multiselect mt-1 block w-full'
            multiple
            {...register(name, {
              required: required ? 'This field is required' : false,
            })}>
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

export default MultiSelect;
