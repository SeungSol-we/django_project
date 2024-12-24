"use client";

import Link from 'next/link';
import Image from 'next/image';

import { Button } from "@/components/ui/button"


import { useSearchParams } from 'next/navigation';



export default function Chu_List() {
    const searchParams = useSearchParams();
    const apartmentsString = searchParams.get('apartments');
    const apartments = apartmentsString ? JSON.parse(decodeURIComponent(apartmentsString)) : []; // URL 디코딩 추가

    console.log(apartments)

    let imageSrc = null;

    if (apartments[8] === '아파트') {
      imageSrc = '/apt.jpg';
    } else if (apartments[8] === '주택') {
      imageSrc = '/house.jpeg';
    }



  return (
    <div className="w-full h-{100vh} bg-[#FFF6FE] ">
      <div className="px-5 w-{100vw} h-{100vh}">
        <p className="w-full h-auto pt-10 text-3xl font-medium font-thins">회원님의 요구사항을</p>
        <p className="w-full h-auto text-3xl font-bold font-thins">반영한 집 리스트 입니다</p>
        <p className="w-full h-auto mt-2 text-xs">회원님이 선택한 데이터들을 반영 했어요</p>
        
        <div className="w-24 h-6 pt-1 flex justify-center mt-8 text-xs rounded-2xl bg-white">
            서울특별시 ▼
        {apartments.map((a:any, i:number) => (
          <div className='w-full h-[7rem] bg-white flex mt-4 rounded-2xl' key={i}>
              <div className='w-20 h-20 m-3'>
                {imageSrc && ( // imageSrc가 null이 아니면 렌더링
                  <Image
                      className='rounded-2xl'
                      src={imageSrc}
                      alt="아파트 또는 주택"
                      width={100}
                      height={100}
                  />
                )}
              </div>
              <div className='pt-3'>
                  <p className='font-bold text-xl'>{a.name}</p>
                  <p className='text-xs text-[#4A3941] pt-1 font-bold'>{a.area}</p>
                  <p className='text-xs text-[#4A3941] font-bold'>계약일: {a.계약년월}</p> {/* 계약년월 속성 이름 확인 */}
                  <p className='font-bold text-[#FF70BA] pt-1 text-lg'>보증금/월세: {a.보증금} / {a.월세금}</p> {/* 보증금, 월세금 속성 이름 확인 */}
              </div>
              {/* ... */}
          </div>
      ))}
        <div className='w-full h-auto flex justify-center mt-4'>
            <p className='text-sm font-bold text-[#C299AB]'>보증금과 월세는 만 원 단위예요</p>
        </div>
        
      
      </div>
      
      <div className="w-full h-24 flex justify-center align-items-center mt-4 bg-white">
        <Link href="/main_page" className="w-[22rem] h-14 flex pt-3">
          <Button variant="destructive" className="bg-[#FF70BA] w-[22rem] h-14 border-2 rounded-[2rem] text-white font-bold hover:bg-[#FF70BA]" >
            다음으로
          </Button>
        </Link>
      </div>
    </div>
  </div>
  );
}