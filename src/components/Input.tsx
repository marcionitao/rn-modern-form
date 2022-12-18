import { IInputProps, Input as NativeBaseInput } from 'native-base';

// usando tipagem
export function Input({ ...rest }: IInputProps) {
  return (
    <NativeBaseInput bg='amber.300' fontSize='md' h={16} mb={2} {...rest} />
  );
}
