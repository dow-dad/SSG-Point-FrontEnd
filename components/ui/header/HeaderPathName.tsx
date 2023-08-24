'use client'

import React from 'react'
import { useRouter } from 'next/navigation';


function HeaderPathName(props : {pathname: string}) {

  const {pathname} = props;
  const router = useRouter();


  return (
    <>
      <button className='back_btn' onClick={() => router.back()}></button>
      <div className="pt-2.5 font-bold text-base">
        {
          pathname === '/login'? '로그인' 
          : pathname === '/coupon' ? '쿠폰' 
          : pathname === '/ingevents' ? '이벤트 - 진행 이벤트' 
          : pathname === '/endevents' ? '이벤트 - 종료 이벤트'
          : pathname === '/winevents' ? '이벤트 - 당첨 확인'
          :'other page'
        }
      </div>
      
    </>
  )
}

export default HeaderPathName