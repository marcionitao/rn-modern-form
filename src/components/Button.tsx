import { Button as NativeBaseButton, IButtonProps, Text } from 'native-base';

type Props = IButtonProps & {
  title: string;
};

// {...rest}: IButtonProps é uma forma de termos acesso as propriedades do botão
export function Button({ title, ...rest }: Props) {
  return (
    <NativeBaseButton
      w='full'
      h={16}
      bg='pink.700'
      _pressed={{ bg: 'pink.800' }}
      {...rest}
    >
      <Text color='white' fontSize='md'>
        {title}
      </Text>
    </NativeBaseButton>
  );
}
