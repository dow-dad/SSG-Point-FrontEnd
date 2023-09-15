'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { noticeDataType } from '@/types/cscenterDataType';

function DateForm({ createAt } : { createAt: string }) {
  const year = createAt[0];
  const month = createAt[1] + 1; // 월은 0부터 시작하므로 1을 더해줍니다.
  const day = createAt[2];

  return (
    <div>
      {year}-{month}-{day}
    </div>
  );
}

export default function Noticelist() {
  const [noticeData, setNoticeData] = useState<noticeDataType[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 10; // 페이지당 아이템 수

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://newbiefive.store/api/v1/notice');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setNoticeData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []); // 컴포넌트가 마운트될 때 한 번만 실행

  // 페이지 변경 핸들러
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  console.log(noticeData);
  // 현재 페이지의 아이템 추출
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = noticeData.slice(startIndex, endIndex);

  return (
    <div>
      {currentItems.map((props, index) => (
        <div className='box-border p-4 border' key={index}>
          <div className='hidden'>{props.noticeId}</div>
          <Link href={`/cscenter/notice/${props.noticeId}`}>
            <p className='text-[14px] leading-[24px] break-all'>{props.title}</p>
            <p className='text-[#767676] text-[11px] pt-[4px]'><DateForm createAt={props.createAt} /></p>
          </Link>
        </div>
      ))}
      

      {/* 페이지네이션 컴포넌트 또는 버튼을 여기에 추가 */}
      <div className='flex justify-center space-x-2'>
        {Array.from({ length: Math.ceil(noticeData.length / itemsPerPage) }).map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`box-border ${currentPage === index + 1 ? 'active' : ''}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}