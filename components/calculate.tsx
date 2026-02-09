import Image from "next/image"

const calculateCards = [
    {image: '/Group 555.svg', title: 'Размер строения'},
    {image: '/Group 563.svg', title: 'Выбор материала'},
    {image: '/Group 577.svg', title: 'Способ монтажа'},
    {image: '/Group 577-1.svg', title: 'Техническое решение'},
    {image: '/Group 577-2.svg', title: 'Зональное управление'},
    {image: '/Group 589.svg', title: 'Толщина утеплителя'},

]

export function Calculate() {
    return (
        <section id="calculate" className="py-6 flex justify-center">
            <div className="flex flex-col gap-7 container">
                <p className="uppercase text-[#666666] text-2xl text-center"><span className="font-bold">Что  влияет  на стоимость</span> водяного теплого  пола?</p>
                <div className="flex gap-17.5 justify-center">
                    {calculateCards.map((card, index) => (
                        <div key={index} className="flex flex-col gap-2 items-center px-7">
                            <Image 
                            src={card.image}
                            alt=""
                            width={64}
                            height={64}
                            className="size-20"
                            />
                            <p className="text-[#666666] font-extralight max-w-[10ch] text-center">{card.title}</p>
                        </div>
                ))}
                </div>
            </div>
        </section>
    )
}