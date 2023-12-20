import styles from '@/app/page.module.css';

type Props = { children: React.ReactNode; modal: React.ReactNode };

export default function Layout({ children, modal }: Props) {
  return (
    <div className={styles.container}>
      {/* 패러럴 모달의 경우 페이지가 같은 라인에 있어야함 = app->(beforeLogin) */}
      {/* 골뱅이 뒤의 폴더명을 따라감 @mdoal -> modal , @hello -> hello */}
      {children}
      {modal}
    </div>
  );
}
