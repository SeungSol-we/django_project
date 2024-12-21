"use client"

import { CircleCheck } from 'lucide-react';
import Link from 'next/link';
import { Button } from "@/components/ui/button"



 
import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"
 
import { cn } from "@/lib/utils"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
 
const wol = [
  {
    value: "월세",
    label: "월세",
  },
  {
    value: "전세",
    label: "전세",
  },
  {
    value: "매매",
    label: "매매",
  },
]

const person = [
  {
    value: "1인가구",
    label: "1인가구",
  },
  {
    value: "2인가구",
    label: "2인가구",
  },
  {
    value: "3인가구",
    label: "3인가구",
  },
  {
    value: "4인가구",
    label: "4인가구",
  },
  {
    value: "5인가구",
    label: "5인가구",
  },
]

const region = [
  {
    value: "서울",
    label: "서울",
  },
  {
    value: "대전",
    label: "대전",
  },
  {
    value: "세종",
    label: "세종",
  },
  {
    value: "대구",
    label: "대구",
  },
  {
    value: "울산",
    label: "울산",
  },
  {
    value: "부산",
    label: "부산",
  },
  {
    value: "광주",
    label: "광주",
  },
  {
    value: "경기도",
    label: "경기도",
  },
  {
    value: "강원도",
    label: "강원도",
  },
  {
    value: "경상북도",
    label: "경상북도",
  },
  {
    value: "충청남도",
    label: "충청남도",
  },
  {
    value: "전라북도",
    label: "전라북도",
  },
  {
    value: "경상남도",
    label: "경상남도",
  },
  {
    value: "전라남도",
    label: "전라남도",
  },
]


export default function Data_1() {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")

    const [open2, setOpen2] = React.useState(false)
    const [value2, setValue2] = React.useState("")

    const [open3, setOpen3] = React.useState(false)
    const [value3, setValue3] = React.useState("")
    
    return (
        <div className="w-full h-{100vh} bg-[#FFF6FE] ">
            <div className="px-5 pt-8 w-{100vw} h-{100vh}">
                <p className="w-auto h-auto text-3xl ">선호하시는 집</p>
                <p className="w-auto h-auto text-3xl font-bold">정보를 입력해주세요</p>
                <p className="w-full h-auto mt-2 text-xs">해당 정보를 바탕으로 회원님께 딱 맞는 집을 분석해요</p>
            
                <p className="w-full h-auto mt-4 text-base font-semibold ">월세/전세/매매 중 무엇인가요?</p>
                <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                        <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={open}
                        className="w-[330px] justify-between mt-2 border-0 rounded-3xl"
                        >
                        {value
                            ? wol.find((wol) => wol.value === value)?.label
                            : "월세"}
                        <ChevronsUpDown className="opacity-50" />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[300px] p-0">
                        <Command>
                        <CommandInput placeholder="검색 임대종류..." />
                        <CommandList>
                            <CommandEmpty>No wol found.</CommandEmpty>
                            <CommandGroup>
                                {wol.map((wol) => (
                                    <CommandItem
                                    key={wol.value}
                                    value={wol.value}
                                    onSelect={(currentValue) => {
                                        setValue(currentValue === value ? "" : currentValue)
                                        setOpen(false)
                                    }}
                                    >
                                    {wol.label}
                                    <Check
                                        className={cn(
                                        "ml-auto",
                                        value === wol.value ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </CommandList>
                        </Command>
                    </PopoverContent>
                    </Popover>
                    <p className="w-[310px] h-auto mt-2 text-[11px] text-[#C299AB]">월세는 매월 돈을 지급하고, 전세는 보증금을 맡기고 거주하며, 매매는 주택 소유권을 완전히 취득하는 방식이에요</p>

                    <p className="w-full h-auto mt-8 text-base font-semibold ">몇인 가구가 살 예정인가요?</p>
                    <Popover open={open2} onOpenChange={setOpen2}>
                    <PopoverTrigger asChild>
                        <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={open2}
                        className="w-[330px] justify-between mt-2 border-0 rounded-3xl"
                        >
                        {value2
                            ? person.find((person) => person.value === value2)?.label
                            : "1인가구"}
                        <ChevronsUpDown className="opacity-50" />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[300px] p-0">
                        <Command>
                        <CommandInput placeholder="검색 임대종류..." />
                        <CommandList>
                            <CommandEmpty>No person found.</CommandEmpty>
                            <CommandGroup>
                                {person.map((person) => (
                                    <CommandItem
                                    key={person.value}
                                    value2={person.value}
                                    onSelect={(currentValue) => {
                                        setValue2(currentValue === value ? "" : currentValue)
                                        setOpen2(false)
                                    }}
                                    >
                                    {person.label}
                                    <Check
                                        className={cn(
                                        "ml-auto",
                                        value2 === person.value ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </CommandList>
                        </Command>
                    </PopoverContent>
                    </Popover>


                    <p className="w-full h-auto mt-6 text-base font-semibold ">선호지역은 무엇인가요?</p>
                    <Popover open={open3} onOpenChange={setOpen3}>
                    <PopoverTrigger asChild>
                        <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={open3}
                        className="w-[330px] justify-between mt-2 border-0 rounded-3xl"
                        >
                        {value3
                            ? region.find((region) => region.value === value3)?.label
                            : "서울/경기도/광주"}
                        <ChevronsUpDown className="opacity-50" />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[300px] p-0">
                        <Command>
                        <CommandInput placeholder="검색 지역종류..." />
                        <CommandList>
                            <CommandEmpty>No region found.</CommandEmpty>
                            <CommandGroup>
                                {region.map((region) => (
                                    <CommandItem
                                    key={region.value}
                                    value={region.value}
                                    onSelect={(currentValue) => {
                                        setValue3(currentValue === value3 ? "" : currentValue)
                                        setOpen3(false)
                                    }}
                                    >
                                    {region.label}
                                    <Check
                                        className={cn(
                                        "ml-auto",
                                        value3 === region.value ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </CommandList>
                        </Command>
                    </PopoverContent>
                    </Popover>

                    <div className="w-full h-[15rem] pt-36">
                        <Link href="/data_in_2" className="w-32 h-12">
                            <Button variant="outline" className="border-[#C299AB] w-full h-12 border-2 rounded-3xl text-[#FF70BA] font-extrabold">
                                다음으로 넘어가기
                            </Button>
                        </Link>
                    </div>

            </div> 
    </div>
  );
}
