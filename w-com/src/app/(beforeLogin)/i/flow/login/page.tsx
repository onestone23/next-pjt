// next의 모든 컴포넌트는 서버컴포넌트 이므로 클라이언트 컴포넌트를 사용하려면 아래 구문을 사용
'use client';
import LoginModal from '@/app/(beforeLogin)/_component/LoginModal';

export default function Page() {
  return <LoginModal />;
}
