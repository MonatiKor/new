import Image from "next/image";

export function Contacts() {
    return (
        <section id="contacts" className="flex justify-center py-18.5">
            <div className="container flex flex-col gap-8">
                <p className="uppercase text-[#666666] text-2xl text-center"><span className="font-bold">Заказ монтажа теплых полов</span> в нашей компании</p>
                <div className="flex gap-5 items-center">
                    <Image 
                    src={'/contacts.jpg'}
                    alt=""
                    width={1920}
                    height={1080}
                    className="max-w-[80ch] rounded-xl"
                    />
                    <div className="flex flex-col gap-10">
                        <p className="text-[#757575] text-[18px] leading-[150%]">
                            Компания ООО «Системы ОВК» специализируется на монтаже инженерных систем зданий любых целевых назначений. <br />
                            Системы напольного отопления-наш конёк, так-как мы одни из первых кто начал делать водяной тёплый пол<br />
                            на территории Санкт-Петербурга и Ленинградской области. <br />
                            При принятии технических решений, подборе оборудования, монтаже, мы руководствуемся опытом основанном<br />
                            на плодотворной работе в течении семнадцати лет.  Мы готовы взять на себя обязательства по проектированию, поставке оборудования, монтажу и дальнейшему обслуживанию инженерных сетей Вашего объекта. <br /> 
                            Наша организация умеет принимать правильные концептуальные решения, что приводит к экономии<br />
                            в моменте стройки,  а так же во время эксплуатации здания.
                        </p>
                        <button className="px-9 py-3.5 uppercase w-fit bg-[#BB8E34] rounded-md shadow-md backdrop-blur-sm">Рассчитать стоимость</button>
                    </div>
                </div>
            </div>
        </section>
    )
}