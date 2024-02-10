import { Flex, Heading, Stack, Text } from '@chakra-ui/react';
import LoginForm from 'components/LoginForm/LoginForm';

const LogIn = () => {
  return (
    <Flex justify={'center'} minH={'82.8vh'}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={{ base: '3xl', lg: '4xl' }} textAlign={'center'}>
            Sign in to your account
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to find your{' '}
            <Text color={'#66bfbf'} display={'inline-block'} as={'b'}>
              contacts ✌️
            </Text>
          </Text>
        </Stack>
        <LoginForm />
      </Stack>
    </Flex>
  );
};

export default LogIn;
