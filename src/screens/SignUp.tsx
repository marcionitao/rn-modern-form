import { Center, Heading, VStack } from 'native-base';
import { Button } from '../components/Button';
import { Input } from '../components/Input';

export function SignUp() {
  return (
    <VStack bgColor='amber.200' flex={1} px={5}>
      <Center>
        <Heading>Create a Count</Heading>
        <Input placeholder='name' isInvalid />
        <Input placeholder='email' />
        <Input placeholder='password' />
        <Input placeholder='confirm password' />
        <Button title='Register' />
      </Center>
    </VStack>
  );
}
