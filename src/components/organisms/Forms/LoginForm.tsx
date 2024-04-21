import { FC } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import SubmitBtn from '../../molecules/Buttons/SubmitBtn';
import Input from '../../atoms/Forms/Input';

interface LoginForm {
  textField: string;
  textareaField: string;
  checkboxField: string;
  selectField: string;
  multiselectField: string[];
  date: string;
}

const LoginForm: FC = () => {
  const methods = useForm<LoginForm>();
  const { handleSubmit, getValues } = methods;

  const onSubmit = () => {
    console.log(getValues());
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className='max-w-md mx-auto mt-8' noValidate>
        <Input name='login' text='Login' type='email' required />
        <Input name='password' text='Password' type='password' required />
        <SubmitBtn text='submit' />
      </form>
    </FormProvider>
  );
};

export default LoginForm;
