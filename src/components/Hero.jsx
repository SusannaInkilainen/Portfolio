import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Hitulat from "./Hitulat.jsx";

const navigation = [
    { name: 'Mie', href: '#Mie' },
    { name: 'Duuni', href: '#Work' },
    { name: 'Projektit', href: '#' },
    { name: 'Hilpetööri', href: '#' },
]

export default function Hero() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div className="bg-lime-200">
            <header className="fixed inset-x-0 top-0 z-50 bg-slate-300/30">
                <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
                    <div className="flex lg:flex-1">
                        <a href="#" className="-m-1.5 p-1.5">
                            <p className="text-lime-700 md:uppercase">Susanna Inkiläinen</p>
                        </a>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(true)}
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-800"
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="size-6" />
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">
                        {navigation.map((item) => (
                            <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-violet-800">
                                {item.name}
                            </a>
                        ))}
                    </div>
                </nav>
                <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                    <div className="fixed inset-0 z-50" />
                    <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <a href="#" className="-m-1.5 p-1.5">
                                <span>Susanna Inkiläinen</span>

                            </a>
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(false)}
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            >
                                <span className="sr-only">Sulje</span>
                                <XMarkIcon aria-hidden="true" className="size-6" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </DialogPanel>
                </Dialog>
            </header>

            <div className="relative isolate px-6 pt-14 lg:px-8">
                <Hitulat />
                <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">

                    <div className="text-center">
                        <h1 className="text-5xl font-semibold tracking-tight text-balance text-lime-800 sm:text-7xl">
                            Learning <span className="underline decoration-purple-900">everything</span> about <span className="underline decoration-purple-900">anything</span>
                        </h1>
                        <p className="mt-8 text-lg font-medium text-pretty text-lime-700 sm:text-xl/8">
                            Tää on tosi tarttuva täyteteksti. Tää saa biisin soimaan sun päähäsi :)
                        </p>
                    </div>
                </div>
                <Hitulat />
            </div>
        </div>
    )
}
