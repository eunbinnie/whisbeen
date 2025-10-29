import Link from 'next/link';

export default function Home() {
  return (
    <div>
      Hello World
      <Link href="/signup">회원가입</Link>
    </div>
  );
}
