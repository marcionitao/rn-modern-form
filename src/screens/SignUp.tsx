import { Center, Heading, VStack } from 'native-base';
import { Input } from '../components/Input';

export function SignUp() {
  return (
    <VStack bgColor='amber.200' flex={1} px={5}>
      <Center>
        <Heading>Create a Count</Heading>
        <Input placeholder='name' />
        <Input placeholder='email' />
        <Input placeholder='password' />
        <Input placeholder='confirm password' />
      </Center>
    </VStack>
  );
}
