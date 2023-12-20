// next의 모든 컴포넌트는 서버컴포넌트 이므로 클라이언트 컴포넌트를 사용하려면 아래 구문을 사용
'use client';
import style from '@/app/(beforeLogin)/_component/login.module.css';
import { useState } from 'react';

// _폴더 = private 폴더
// 주소창에 검색되지않음. 총 (), @(페러렐), _ 3개의 폴더
// 서버 컴포넌트는 클라이언트 컴포넌트를 import 가능하지만, 클라이언트 -> 서버 import하면 안됨!
export default function LoginModal() {
  const [id, setId] = useState();
  const [password, setPassword] = useState();
  const [message, setMessage] = useState();

  const onSubmit = () => {};

  const onClickClose = () => {};

  const onChangeId = () => {};

  const onChangePassword = () => {};

  return (
    <div className={style.modalBackground}>
      <div className={style.modal}>
        <div className={style.modalHeader}>
          <button className={style.closeButton} onClick={onClickClose}>
            <svg
              width={24}
              viewBox='0 0 24 24'
              aria-hidden='true'
              className='r-18jsvk2 r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03'
            >
              <g>
                <path d='M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z'></path>
              </g>
            </svg>
          </button>
          <div>로그인하세요.</div>
        </div>
        <form onSubmit={onSubmit}>
          <div className={style.modalBody}>
            <div className={style.inputDiv}>
              <label className={style.inputLabel} htmlFor='id'>
                아이디
              </label>
              <input id='id' className={style.input} value={id} onChange={onChangeId} type='text' placeholder='' />
            </div>
            <div className={style.inputDiv}>
              <label className={style.inputLabel} htmlFor='password'>
                비밀번호
              </label>
              <input
                id='password'
                className={style.input}
                value={password}
                onChange={onChangePassword}
                type='password'
                placeholder=''
              />
            </div>
          </div>
          <div className={style.message}>{message}</div>
          <div className={style.modalFooter}>
            <button className={style.actionButton} disabled={!id && !password}>
              로그인하기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
