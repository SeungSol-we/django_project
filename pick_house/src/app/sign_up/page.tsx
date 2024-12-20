import Image from "next/image";

import { MoveDown } from 'lucide-react';
import { House } from 'lucide-react';

import { Button } from "@/components/ui/button"

import Link from 'next/link';

export default function Sign_Up() {
  return (
    <div className="px-5 w-{100vw} h-{100vh} bg-[#FFF6FE]">
        <p className="w-full h-auto pt-10 text-3xl font-medium">하우스픽을 처음</p>
        <p className="w-full h-auto text-3xl font-bold">시작하시는 군요!</p>
        <p className="w-full h-auto mt-2 text-xs">하우스픽에 오신걸 환영해요! 몇가지 정보를 적어주세요</p>

        <p className="w-full h-auto mt-5 text-base">사용될 성함을 입력해 주세요</p>
        <input className="w-full h-12 mt-2 px-4 text-xs text-red-300 bg-white border-red-200 border-2  rounded-full focus:outline-none focus:border-red-300" type="text" placeholder="여기에 성함을 입력해 주세요" />

        <p className="w-full h-auto mt-5 text-base">사용될 이메일을 입력해 주세요</p>
        <input className="w-full h-12 mt-2 px-4 text-xs text-red-300 bg-white border-red-200 border-2  rounded-full focus:outline-none focus:border-red-300" type="email" placeholder="여기에 이메일을 입력해 주세요" />

         <p className="w-full h-auto mt-5 text-base">비밀번호를 입력해 주세요</p>
        <input className="w-full h-12 mt-2 px-4 text-xs text-red-300 bg-white border-red-200 border-2  rounded-full focus:outline-none focus:border-red-300" type="email" placeholder="여기에 비밀번호를 입력해 주세요" />
        <input className="w-full h-12 mt-2 px-4 text-xs text-red-300 bg-white border-red-200 border-2  rounded-full focus:outline-none focus:border-red-300" type="email" placeholder="여기에 비밀번호를 확인시켜 주세요" />

        <div className="w-full h-44 pt-24">
            <Link href="/sign_in" className="w-32 h-12">
                <Button variant="outline" className="border-red-400 w-full h-12 border-2 rounded-3xl text-red-400">
                    회원가입하기
                </Button>
            </Link>
        </div>
        
    </div>
  );
}

