import Link from 'next/link';
import Image from 'next/image'

import { Button } from "@/components/ui/button"


export default function Chu_List() {
    let name  = ['앱잼 아파트 1단지', '앱잼 아파트 2단지', '앱잼 아파트 3단지', '앱잼 아파트 4단지', '앱잼 아파트 5단지', '앱잼 아파트 6단지', '앱잼 아파트 7단지',]
    let coment = [
        '아파트, 원룸, 다세대, 신축(2018~)',
        '아파트, 원룸, 다세대, 신축(2022~)',
        '아파트, 원룸, 다세대, 신축(2021~)',
        '아파트, 원룸, 다세대, 신축(2019~)',
        '아파트, 원룸, 다세대, 신축(2020~)',
        '아파트, 원룸, 다세대, 신축(2023~)',
        '아파트, 원룸, 다세대, 신축(2022~)',
    ]
    let date = [
        '2018년 7월',
        '2022년 10월',
        '2021년 6월',
        '2019년 9월',
        '2020년 12월',
        '2023년 11월',
        '2022년 8월',
    ]
    let price = [
        '525/40',
        '492/30',
        '498/42',
        '513/39',
        '537/35',
        '462/41',
        '556/35',  
    ]


  return (
    <div className="w-full h-{100vh} bg-[#FFF6FE] ">
      <div className="px-5 w-{100vw} h-{100vh}">
        <p className="w-full h-auto pt-10 text-3xl font-medium font-thins">회원님의 요구사항을</p>
        <p className="w-full h-auto text-3xl font-bold font-thins">반영한 집 리스트 입니다</p>
        <p className="w-full h-auto mt-2 text-xs">회원님이 선택한 데이터들을 반영 했어요</p>
        
        <div className="w-24 h-6 pt-1 flex justify-center mt-8 text-xs rounded-2xl bg-white">
            서울특별시 ▼
        </div>
        {
            name.map((a, i) => (
                <div className='w-full h-[7rem] bg-white flex mt-4 rounded-2xl' key={'a'+i}>
                    <div className='w-20 h-20 m-3'>
                        <Image className=' rounded-2xl' src="/apt.jpg" alt="아파트" width={100} height={100} ></Image>
                    </div>
                    <div className='pt-3'>
                        <p className='font-bold text-xl'>{a}</p>
                        <p className='text-xs text-[#4A3941] pt-1 font-bold'>{coment[i]}</p>
                        <p className='text-xs text-[#4A3941] font-bold'>계약일: {date[i]}</p>
                        <p className='font-bold text-[#FF70BA] pt-1 text-lg'>보증금/월세: {price[i]}</p>
                    </div>
                    <div className='w-12 text-[#F5E1EB] flex justify-center pt-10 text-2xl'>
                        ★
                    </div>
                </div>       
            ))
        }
      
      </div>
      
      <div className="w-full h-24 flex justify-center align-items-center mt-8 bg-white">
        <Link href="/main_page" className="w-[22rem] h-14 flex pt-3">
          <Button variant="destructive" className="bg-[#FF70BA] w-[22rem] h-14 border-2 rounded-[2rem] text-white font-bold hover:bg-[#FF70BA]" >
            다음으로
          </Button>
        </Link>
      </div>
    </div>
  );
}
