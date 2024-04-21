import { FC } from 'react';
import { useForm, FormProvider, useWatch } from 'react-hook-form';
import SubmitBtn from '../../molecules/Buttons/SubmitBtn';
import Input from '../../atoms/Forms/Input';
import Textarea from '../../atoms/Forms/Textarea';
import Checkbox from '../../atoms/Forms/Checkbox';
import Select from '../../atoms/Forms/Select';
import MultiSelect from '../../atoms/Forms/MultiSelect';
import Date from '../../atoms/Forms/Date';

interface SimpleForm {
  textField: string;
  textareaField: string;
  checkboxField: string;
  selectField: string;
  multiselectField: string[];
  date: string;
}

const SimpleForm: FC = () => {
  const methods = useForm<SimpleForm>();
  const { handleSubmit, getValues } = methods;

  const onSubmit = () => {
    console.log(getValues());
  };

  console.log(useWatch({ control: methods.control }));

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className='max-w-md mx-auto mt-8' noValidate>
        <Input name='textField' text='Text Input' required />
        <Textarea name='textareaField' text='Text Input' required />
        <Checkbox name='checkboxField' text='Checkbox' required />
        <Select name='selectField' text='Select' required />
        <MultiSelect name='multiselectField' text='Multiselect' required />
        <Date name='date' />
        <SubmitBtn text='submit' />
      </form>
    </FormProvider>
  );
};

export default SimpleForm;
