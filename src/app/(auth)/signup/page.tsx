import Link from 'next/link';

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
        <div className="flex h-full flex-col p-8">
          <Link href={'/login'} className="ml-auto px-4 py-2 text-sm">
            로그인
          </Link>
          <div className="flex-1 bg-red-200">
            {/* TODO: 회원가입 폼 추가 */}
          </div>
          {/* 회원가입 폼 중앙 정렬 위해 div 추가 */}
          <div className="h-8" />
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
