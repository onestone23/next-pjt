// 페이지를 변경할 때, 리렌더링(마운트)이 필요하다면 template, 필요하지 않다면 layout => 공존하면안됨
export default function AfterLoginLayout({ children }: { children: React.ReactNode }) {
  return <div>애프터 로그인 레이아웃{children}</div>;
}
