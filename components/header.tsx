'use client'

import { CiLocationOn } from "react-icons/ci"
import { Logo } from "./logo"
import { TfiHeadphoneAlt } from "react-icons/tfi"
import { IoMailOutline } from "react-icons/io5"
import { smoothScroll } from "@/lib/utils"

const headerButtons = [
    {title: 'Расчет', id: 'calculate'},
    {title: 'Этапы монтажа', id: 'steps'},
    {title: 'Примеры работ', id: 'examples'},
    {title: 'Контакты', id: 'contacts'},
]

export function Header() {
    return (
        <div className="bg-[url(/headerBG.png)] bg-no-repeat bg-cover flex flex-col gap-4 items-center px-4 py-9 sticky top-0 z-30">
            <div className="flex justify-between container">
                <div className="flex gap-15">
                    {headerButtons.map((button) => (
                        <button onClick={() => smoothScroll(button.id, 'center')} key={button.title} className="text-sm w font-bold hover:underline transition-all duration-300 hover:-translate-y-1 cursor-pointer">{button.title}</button>
                    ))}
                </div>
                <div className="flex gap-2 items-center">
                    <CiLocationOn className="text-[#BB8E34] size-6"/>
                    <p>г. Санкт-Петербург, Выборгское шоссе, д.212, строение 8</p>
                </div>
            </div>
            <div className="flex justify-between container">
                <div className="flex gap-4">
                    <button onClick={() => smoothScroll('hero', 'end')}><Logo /></button>
                    <p className="text-2xl font-bold font-roboto">STOPRADIATORS</p>
                    <div className="h-full w-px bg-[#798797]/20"/>
                    <div>
                        <p className="font-bold">МОНТАЖ ИНЖЕНЕРНЫХ СИСТЕМ</p>
                        <p className="font-extralight text-[#C9CCCF]">И ПРОДАЖА ОБОРУДОВАНИЯ</p>
                    </div>
                </div>
                <div className="flex gap-7">
                    <div className="flex items-center gap-2">
                        <TfiHeadphoneAlt className="size-6 text-[#BB8E34]"/>
                        <div className="flex gap-5">
                            <div className="flex flex-col gap-0.5 font-bold">
                                <p>8 (812) 245-23-46</p>
                                <p className="text-[#C9CCCF]">8 (812) 438-32-58</p>
                            </div>
                            <button className="px-8 py-0.5 bg-[#BB8E34] rounded-md leading-none w-[20ch]">Заказать звонок</button>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <IoMailOutline className="size-6 text-[#BB8E34]"/>
                        <div className="flex flex-col gap-0.5 font-bold">
                            <p>8 (812) 245-23-46</p>
                            <p className="text-[#C9CCCF]">8 (812) 438-32-58</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}