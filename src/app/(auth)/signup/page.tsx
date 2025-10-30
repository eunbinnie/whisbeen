'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod';

import { useForm } from 'react-hook-form';

import Link from 'next/link';

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

const formSchema = z.object({
  email: z.string().email('이메일 형식이 올바르지 않습니다.'),
  password: z
    .string()
    .min(6, '비밀번호는 6자 이상이어야 합니다.')
    .max(16, '비밀번호는 16자 이하이어야 합니다.'),
});

const SignupPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };

  return (
    <div className="flex h-full min-h-dvh">
      <div className="hidden flex-1 md:block">
        <div className="h-full bg-muted p-10">
          <Link href={'/'} className="text-lg font-medium">
            Whisbeen
          </Link>
        </div>
      </div>
      <div className="flex-1">
        <div className="flex h-full flex-col p-8">
          <Link href={'/login'} className="ml-auto px-4 py-2 text-sm">
            로그인
          </Link>
          <div className="flex flex-1 flex-col items-center justify-center gap-6">
            {/* TODO: 회원가입 폼 추가 */}
            <h1 className="text-2xl font-semibold">회원가입</h1>
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
                        <FormMessage>
                          {form.formState.errors.email.message}
                        </FormMessage>
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
                <Button type="submit" disabled={!form.formState.isValid}>
                  회원가입
                </Button>
              </form>
            </Form>
          </div>
          {/* 회원가입 폼 중앙 정렬 위해 div 추가 */}
          <div className="h-8" />
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
