// 서버 클라이언트에서만 redirect가 동작하기 때문에, client 컴포넌트로 변경, Route를 통한 리다이렉트
'use client';
import { useRouter } from 'next/navigation';
// import { redirect } from 'next/navigation';
import Main from '@/app/(beforeLogin)/_component/Main';

export default function Login() {
  const router = useRouter();
  router.replace('/i/flow/login');
  return <Main />;
}
// router.push - 뒤로 가기시 이전 페이지(login) 으로 이동하지만, 다시 i/flow/login으로 이동되어 무한반복
// -> login -> i/flow/login

// router.replace - 페이지를 갈아치우기떄문에 뒤로가기시 /
// -> login (i/flow/login)
