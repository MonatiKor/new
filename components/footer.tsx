import { BsTwitterX, BsYoutube } from "react-icons/bs";
import { Logo } from "./logo";
import Image from "next/image";


export function Footer() {
    return (
        <div className="bg-[#1F2B38] flex justify-center">
            <div className="container py-11 flex justify-between items-center">
                <div className="flex gap-6">
                    <div className="flex gap-3">
                        <Logo />
                        <div className="flex flex-col gap-1">
                            <p className="text-2xl font-bold font-roboto leading-none">STOPRADIATORS</p>
                            <p className="font-roboto uppercase leading-none">Все инженерные сети</p>
                        </div>
                    </div>
                    <div className="h-full w-px bg-[#798797]/20"/>
                    <div className="flex flex-col">
                        <p className="font-roboto">2025 © «StopRadiators» Все права защищены.</p>
                        <div className="flex gap-4">
                            <BsYoutube />
                            <BsTwitterX />
                        </div>
                    </div>
                </div>
                <div className="flex gap-4 items-center">
                    <p className="font-roboto text-sm text-[#C9CCCF]">Мы принимаем <br />к оплате карты:</p>
                    <Image 
                    src={'/master card.svg'}
                    alt=""
                    width={128}
                    height={128}
                    className="w-[10ch]"
                    />
                    <Image 
                    src={'/visa.svg'}
                    alt=""
                    width={128}
                    height={128}
                    className="w-[10ch]"
                    />
                    <Image 
                    src={'/mir.svg'}
                    alt=""
                    width={128}
                    height={128}
                    className="w-[10ch]"
                    />
                </div>
            </div>
        </div>
    )
}