// 패러렐 라우터에 대한 기본 값
export default function Default() {
  return null;
}

// 인터셉팅 라우팅
// 조건1.  (beforeLogin) > i,login은 children을 통해 렌더, @modal은 modal을 통해 렌더
// children = (beforeLogin) > page , modal = @modal/(.i)/flow/login의 page.tsx 가 가능하다 ? 모달이 덮어씌워 먹는느김??
// 폴더가 (.)i일 때 현재 폴더(beforeLogin)의 i를 대체하여, i/flow/login이 아닌 @modal/(.i)/flow/login의 page.tsx가 대체함
// (.), (..)은 브라우저의 주소를 기반으로함. 그래서 @modal의 현재 주소는 루트 주소이기 때문에 -> /i/

// 주소가 z.com(localhost:3000)일 땐 children->page.tsx, modal -> @modal/default.tsx
// 주소가 /i/flow/login일 땐 children -> i/flow/login/page.tsx, modal -> @modal/i/flow/login/page.tsx
