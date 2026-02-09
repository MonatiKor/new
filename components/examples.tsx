'use client'

import Image from "next/image"
import { useState } from "react"
import { CiLocationOn } from "react-icons/ci"

const exampleImages = [
    {image: '/photoOne.jpg', id: 0},
    {image: '/photoTwo.jpg', id: 1},
    {image: '/photoThree.jpg', id: 2},
]

export function Examples() {
    const [active, setActive] = useState<number>(0)

    return (
        <section id="examples" className="flex justify-center py-18.5">
            <div className="container flex flex-col gap-8">
                <p className="uppercase text-[#666666] text-2xl text-center"><span className="font-bold">Примеры</span> наших работ</p>
                <div className="flex gap-25">
                    <Image 
                    src={exampleImages.find(i => i.id === active)!.image}
                    alt=""
                    width={1920}
                    height={1080}
                    className="rounded-xl"
                    />
                    <div className="flex flex-col gap-4 w-full">
                        <div className="flex gap-5 w-fit items-center">
                            <CiLocationOn className="text-[#BB8E34] size-6"/>
                            <p className="text-[#666666] text-2xl font-bold">Лебяжье - 92 <span className="text-[#BB8E34]">М<sup>2</sup></span></p>
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className="flex justify-between items-center">
                                <p className="text-[#757575]">Стоимость материалов HENCO:</p>
                                <p className="text-[#BB8E34]">259 925 Р</p>
                            </div>
                            <div className="flex justify-between items-center">
                                <p className="text-[#757575]">Стоимость монтажных работ:</p>
                                <p className="text-[#BB8E34]">259 925 Р</p>
                            </div>
                            <div className="flex justify-between items-center">
                                <p className="text-[#757575]">Срок выполнения работ:</p>
                                <p className="text-[#BB8E34]">2 НЕДЕЛИ</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-5 gap-2">
                            {exampleImages.map((image) => {
                                const activeImage = image.id === active
                                return (
                                    <Image 
                                    src={image.image}
                                    alt=""
                                    width={1920}
                                    height={1080}
                                    key={image.id}
                                    className={`size-20 object-cover rounded-md ${activeImage ? 'scale-110 shadow-md' : ''}`}
                                    onClick={() => setActive(image.id)}
                                    />
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}