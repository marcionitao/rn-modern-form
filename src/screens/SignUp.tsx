import { Center, Heading, VStack } from 'native-base';
import { Controller, useForm } from 'react-hook-form';
import { Button } from '../components/Button';
import { Input } from '../components/Input';

export function SignUp() {
  // controlando os dados com react-hook-form
  const { control, handleSubmit } = useForm();
  // função para submeter os dados todos de uma unica vez
  const onSubmit = (data: any) => console.log(data);

  //
  return (
    <VStack bgColor='amber.200' flex={1} px={5}>
      <Center>
        <Heading>Create a Count</Heading>
        {/* controlando os dados com react-hook-form */}
        <Controller
          control={control}
          name='name'
          render={({ field: { onChange } }) => (
            <Input placeholder='name' onChangeText={onChange} />
          )}
        />
        <Controller
          control={control}
          name='email'
          render={({ field: { onChange } }) => (
            <Input placeholder='email' onChangeText={onChange} />
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
