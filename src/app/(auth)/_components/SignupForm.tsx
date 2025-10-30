import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod';

import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

import { signupSchema } from '@/lib/schemas';

const SignupForm = () => {
  const form = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data: z.infer<typeof signupSchema>) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid w-full max-w-sm gap-5"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>이메일</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="이메일을 입력해 주세요."
                  {...field}
                />
              </FormControl>
              {form.formState.errors.email && (
                <FormMessage>{form.formState.errors.email.message}</FormMessage>
              )}
            </FormItem>
          )}
        ></FormField>
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>비밀번호</FormLabel>
              <FormControl>
                <Input
                  placeholder="비밀번호를 입력해 주세요."
                  type="password"
                  {...field}
                />
              </FormControl>
              {form.formState.errors.password && (
                <FormMessage>
                  {form.formState.errors.password.message}
                </FormMessage>
              )}
            </FormItem>
          )}
        ></FormField>
        <Button
          type="submit"
          disabled={!form.formState.isValid}
          className="mt-2"
        >
          회원가입
        </Button>
      </form>
    </Form>
  );
};

export default SignupForm;
