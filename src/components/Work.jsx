import { PhoneIcon, CodeBracketIcon, TrashIcon, WrenchIcon, AcademicCapIcon } from '@heroicons/react/24/outline'


const opinnot = [
    {
        name: 'Tietotekniikan insinööri, Savonia',
        time: '2021-2024',
        description:
            'Painotuksena ohjelmistotekniikka, sekä suoritin maisteripolun opintoja.',
        icon: AcademicCapIcon,
    },
    {
        name: 'Baaritarjoilija, Koulutuskuntayhtymä Tavastia',
        time: '2014',
        description:
            'Baaritarjoilijan koulutus',
        icon: AcademicCapIcon,
    },
    {
        name: 'Datanomi, Koulutuskeskus Tavastia',
        time: '2011-2014',
        description:
            'Tietojenkäsittelyn perustutkinto',
        icon: AcademicCapIcon,
    },
    {
        name: 'Peruskoulu',
        time: '2001-2010',
        description:
            'Alakoulu, sekä yläkoulu.',
        icon: AcademicCapIcon,
    },
    ]
const works = [
    {
        name: 'Harjoittelu, Savonian XR Center',
        time: '2024, 5kk',
        description:
            'Savonian XR Centerillä harjoitteluuni kuului Centerin päivittäiseen toimintaan osallistuminen, verkkosivujen päivitys, sekä kuntoutussovelluksen kehittäminen Quest3 -virtuaalilaseille',
        learning: 'Itseohjautuva työskentely, tiedonhaku, xr-teknologia',
        icon: CodeBracketIcon,
    },
    {
        name: 'Kahviteknikko, Jobmeal',
        time: '2022, 4kk (kesätyö)',
        description:
            'JobMeal tarjosi minulla mahdollisuuden päästä tutustumaan kahviteknikon maailmaan. Huolsin ja täytin asiakaskohteissa kahvikoneita.',
        learning: 'Itsenäinen työskentely, päivän aikatauluttaminen, loogisen ajattelun kehittyminen',
        icon: WrenchIcon,
    },
    {
        name: 'Myyntineuvottelija, PrimeSales oy',
        time: '08/2019 - 08/2021',
        description:
            'Vastuullani oli palvelujen lisämyynti omille asiakkaille. Työskentelin osittain etänä.',
        learning: 'Asiakaspalvelu, konfliktien ratkaiseminen',
        icon: PhoneIcon,
    },
    {
        name: 'Siivooja, Coor Service Oy',
        time: '05/2018 - 08/2019',
        description:
            'Kohteinani oli toimistoja, koulutiloja sekä tehdasta. Hallitsen peruspesut.',
        learning: 'Nopeuden ja tehokkuuden yhdistäminen, asioiden priorisointi',
        icon: TrashIcon,
    },
]

export default function Work() {
    return (
        <div id="Work" className="bg-lime-100 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base/7 font-semibold text-purple-700">Hieman syvemmin</h2>
                    <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
                        Koulutus
                    </p>
                    <hr className="h-px my-8" />
                    <p className="mt-6 text-lg/8 text-gray-600">
                        Olen aina ollut innokas oppimaan uutta. Opiskelu on ollut minulle helppoa, sekä olen motivoitunut uusista asioista. Olen aina halunnut kehittää itseäni eteenpäin ja osallistunut aktiivisesti tarjolla oleviin koulutuksiin.
                        Sormi ei mene suuhun keittiössäkään, sillä kävin vuoden verran kokkiopintoja.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {opinnot.map((feature) => (
                            <div key={feature.name} className="relative pl-16">
                                <dt className="text-base/7 font-semibold text-gray-900">
                                    <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-lime-800">
                                        <feature.icon aria-hidden="true" className="size-6 text-white" />
                                    </div>
                                    {feature.name}
                                    <p>{feature.time}</p>
                                </dt>
                                <dd className="mt-2 text-base/7 text-gray-600">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
                <div className="mx-auto pt-15 max-w-2xl lg:text-center">
                    <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
                        Työhistoria
                    </p>
                    <hr className="h-px my-8" />
                    <p className="mt-6 text-lg/8 text-gray-600">
                        Monessa pesusoikossa olen käynyt ja se on opettanut minulle paljon. En pelkää liata käsiäni, enkä pelästy teknisiä asioita tai pelkää purkaa ja kasata laitteita.
                        Olen parhaimmillani stressaavissa tilanteissa.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {works.map((feature) => (
                            <div key={feature.name} className="relative pl-16">
                                <dt className="text-base/7 font-semibold text-gray-900">
                                    <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-lime-800">
                                        <feature.icon aria-hidden="true" className="size-6 text-white" />
                                    </div>
                                    {feature.name}
                                    <p>{feature.time}</p>
                                </dt>
                                <dd className="mt-2 text-base/7 text-gray-600">{feature.description}</dd>
                                <dd className="mt-2 text-base/7 text-gray-600"><strong className="text-purple-700">Opitut taidot:</strong> {feature.learning}</dd>

                            </div>
                        ))}
                    </dl>
                    <hr className="h-px my-8" />
                    <p className="mt-2 text-base/7 text-gray-600">Näiden lisäksi olen siivonnut monissa eri kohteissa, työskennellyt ravintola-alalla (baari, pikaruokala, ravintola), ollut töissä jäätelötehtaalla sekä hevospuolella.</p>
                </div>
            </div>
        </div>
    )
}
