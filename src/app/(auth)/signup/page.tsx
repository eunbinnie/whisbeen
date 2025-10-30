'use client';

import Link from 'next/link';

import SignupForm from '../_components/SignupForm';

const SignupPage = () => {
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
        <div className="flex h-full flex-col gap-8 p-8">
          <Link href={'/login'} className="ml-auto px-4 py-2 text-sm">
            로그인
          </Link>
          <div className="flex flex-1 flex-col items-center justify-center gap-6">
            {/* TODO: 회원가입 폼 추가 */}
            <h1 className="text-2xl font-semibold">회원가입</h1>
            <SignupForm />
          </div>
          {/* 회원가입 폼 중앙 정렬 위해 div 추가 */}
          <div className="h-8" />
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
