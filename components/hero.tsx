import Image from "next/image"

const heroCards = [
    {
        image: '/Group 492.svg',
        title: 'Точный расчет теплопотерь помещений'
    },
    {
        image: '/Group 441.svg',
        title: 'Надежное европейское оборудование'
    },
    {
        image: '/Group 438.svg',
        title: 'Профессиональный проект и расширенная гарантия 3 года'
    },
]

export function Hero() {
    return (
        <section className="bg-[url(/heroBG.png)] bg-no-repeat bg-cover flex justify-center" id="hero">
            <div className="flex flex-col py-11 container bg-[url(/woomen.png)] bg-no-repeat bg-cover bg-bottom gap-16">
                <div className="flex flex-col gap-4">
                    <p className="text-[#666666] text-2xl uppercase">Монтаж <span className="font-bold">водяного теплого пола</span> под ключ</p>
                    <h1 className="text-4xl font-bold text-[#BB8E34] uppercase">
                        по технологии energy efficient economy* <br />
                        за 5 дней с гарантией!
                    </h1>
                </div>
                <div className="flex gap-17.5">
                    {heroCards.map((card, index) => (
                        <div key={index} className="flex flex-col gap-2 items-center">
                            <Image 
                            src={card.image}
                            alt=""
                            width={64}
                            height={64}
                            className="size-20"
                            />
                            <p className="text-[#666666] font-extralight max-w-[25ch] text-center">{card.title}</p>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col gap-5 mt-10 mb-[15ch]">
                    <p className="uppercase text-[#666666] text-2xl">
                        <span className="font-bold">рассчитаем стоимость</span> водяного теплого пола<br />
                        <span className="font-bold">с учетом индивидуальных параметров объекта</span> в течении 24 часов!<br />
                        <span className="font-bold">для этого</span> заполните заявку <span className="font-bold">и отправьте ее нам</span> 
                    </p>
                    <button className="px-9 py-3.5 uppercase w-fit bg-[#BB8E34] rounded-md shadow-md backdrop-blur-sm">Рассчитать стоимость</button>
                </div>
            </div>
        </section>
    )
}