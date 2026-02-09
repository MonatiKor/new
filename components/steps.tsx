import Image from "next/image"

const stepCards = [
    {image: '/Rectangle 527.png', title: 'Подготовка основания', description: 'Пол выравнивается перед укладкой пенополистирола (сбиваются наплывы бетонного раствора)'},
    {image: '/Rectangle 527-1.png', title: 'Укладка утеплителя', description: 'Укладываем пенополистирол толщиной определеннойв расчёте (по умолчанию 100мм). Сверху укладываем подложку для теплого пола с разметкой.'},
    {image: '/Rectangle 527-2.png', title: 'Укладка трубы', description: 'Труба укладывается с определенным шагом в расчете (по умолчанию 150мм). Контуры делаются примерно одинаковой длины для лучшей балансировки системы. Прокладываем кабеля от коллектора к местам будущей установки комнатных термостатов.'},
    {image: '/Rectangle 527-3.png', title: 'Монтаж коллектора', description: 'В заранее определенном месте устанавливается коллектор. Затем все трубы подключаются к коллектору с помощью специальных присоединительных элементов.'},
    {image: '/Rectangle 527-4.png', title: 'Опрессовка и проверка', description: 'Перед выполнением работ по стяжке система опрессовывается воздухом с фиксацией давления (проверка на герметичность).'},
    {image: '/Rectangle 527-5.png', title: 'Заливка стяжки', description: 'После того как убедились, что система герметична выполняем цементно-песчанную стяжку.'},
    {image: '/Rectangle 527-6.png', title: 'Установка автоматики', description: 'После окончания чистовой отделки устанавливается автоматика для управления системой отопления.'},
    {image: '/Rectangle 527-7.png', title: 'Запуск системы в работу', description: 'Когда стяжка высохла, система запускается в работу с постепенным поднятием температуры.'},

]

export function Steps() {
    return (
       <section 
        id="steps" 
        className="relative flex justify-center bg-[url('/heroBG.png')] bg-no-repeat bg-cover bg-center 
                    after:content-[''] after:absolute after:inset-0 after:bg-[#666666]/30 after:opacity-50"
        >
            <div className="relative z-10 container flex flex-col gap-8 py-18.5">
                <p className="uppercase text-[#666666] text-2xl text-center"><span className="font-bold">Как будет</span> происходить работа <span className="font-bold">по монтажу системы</span> водяного теплого пола</p>
                <div className="grid grid-cols-4 gap-3">
                    {stepCards.map((card) => (
                        <div key={card.title} className="flex flex-col gap-4 bg-white rounded-xl hover:scale-110 hover:shadow-xl transition-all duration-200">
                            <Image 
                            src={card.image}
                            alt=""
                            width={312}
                            height={169}
                            className="w-full"
                            />
                            <div className="px-3 mb-8">
                                <p className="uppercase text-[#BB8E34] text-sm">{card.title}</p>
                                <p className="text-[#666666] text-sm leading-[120%]">{card.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}