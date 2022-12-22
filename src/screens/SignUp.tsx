import { Center, Heading, VStack } from 'native-base';
import { Controller, useForm } from 'react-hook-form';
import { Button } from '../components/Button';
import { Input } from '../components/Input';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

type FormDataProsp = {
  name: string;
  email: string;
  password: string;
  password_confirm: string;
};

// definindo Schema de validação
const signUpSchema = yup.object({
  name: yup.string().required('O nome é obrigatório'),
  email: yup
    .string()
    .required('O email é obrigatório')
    .email('Digite um e-mail válido'),
  password: yup
    .string()
    .required('A senha é obrigatória')
    .min(6, 'A senha deve ter no mínimo 6 caracteres'),
  password_confirm: yup
    .string()
    .required('Confirmar a senha é obrigatória')
    .oneOf([yup.ref('password'), null], 'As senhas não conferem'),
});

export function SignUp() {
  // controlando os dados com react-hook-form e validando com yup
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProsp>({ resolver: yupResolver(signUpSchema) });
  // função para submeter os dados todos de uma unica vez
  const onSubmit = (data: FormDataProsp) => {
    () => console.log(data);
  };

  //
  return (
    <VStack bgColor='amber.200' flex={1} px={5}>
      <Center>
        <Heading>Create a Count</Heading>
        {/* controlando os dados com react-hook-form */}
        <Controller
          control={control}
          // aplicar regras de validação para o campo
          name='name'
          render={({ field: { onChange } }) => (
            <Input
              placeholder='name'
              onChangeText={onChange}
              errorMessage={errors.name?.message}
            />
          )}
        />
        <Controller
          control={control}
          name='email'
          render={({ field: { onChange } }) => (
            <Input
              placeholder='email'
              onChangeText={onChange}
              errorMessage={errors.email?.message}
            />
          )}
        />
        <Controller
          control={control}
          name='password'
          render={({ field: { onChange } }) => (
            <Input
              placeholder='password'
              secureTextEntry
              onChangeText={onChange}
              errorMessage={errors.password?.message}
            />
          )}
        />
        <Controller
          control={control}
          name='password_confirm'
          render={({ field: { onChange } }) => (
            <Input
              placeholder='confirm password'
              secureTextEntry
              onChangeText={onChange}
              errorMessage={errors.password_confirm?.message}
            />
          )}
        />

        <Input placeholder='password' />
        <Input placeholder='confirm password' />
        <Button title='Register' onPress={handleSubmit(onSubmit)} />
      </Center>
    </VStack>
  );
}
