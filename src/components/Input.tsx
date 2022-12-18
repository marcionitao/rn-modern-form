import {
  FormControl,
  IInputProps,
  Input as NativeBaseInput,
} from 'native-base';

type Props = IInputProps & {
  errorMessage?: string | null;
};

// {...rest}: IButtonProps é uma forma de termos acesso as propriedades do input
export function Input({ errorMessage, isInvalid, ...rest }: Props) {
  // quando o conteudo será considerado inválido?
  const invalid = !!errorMessage || isInvalid;
  // FormControl permite que os inputs sejam controlados por um formulário de autenticação
  return (
    <FormControl mb={2} isInvalid={invalid}>
      <NativeBaseInput
        bg='amber.300'
        fontSize='md'
        h={16}
        isInvalid={invalid} // a msg será exibida atraves do componente SignUp
        _focus={{
          bg: 'amber.100',
          borderWidth: 1,
          borderColor: 'amber.700',
        }}
        _invalid={{
          borderColor: 'red.500',
          borderWidth: 1,
        }}
        {...rest}
      />
      <FormControl.ErrorMessage>{errorMessage}</FormControl.ErrorMessage>
    </FormControl>
  );
}
