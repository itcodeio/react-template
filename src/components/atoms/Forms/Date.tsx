import { FC, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useFormContext } from 'react-hook-form';

interface DPProps {
  name: string;
}

const Date: FC<DPProps> = ({ name }) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const { setValue } = useFormContext();

  return (
    <div className='mb-4'>
      <DatePicker
        className='w-full border-gray-300 border focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm'
        selected={selectedDate}
        onChange={(date) => {
          setValue(name, date?.toLocaleDateString());
          setSelectedDate(date);
        }}
        dateFormat='dd/MM/yyyy'
      />
    </div>
  );
};

export default Date;
