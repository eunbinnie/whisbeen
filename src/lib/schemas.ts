import z from 'zod';

export const signupSchema = z.object({
  email: z.string().email('이메일 형식이 올바르지 않습니다.'),
  password: z
    .string()
    .min(6, '비밀번호는 6자 이상이어야 합니다.')
    .max(16, '비밀번호는 16자 이하이어야 합니다.'),
});
