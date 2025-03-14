import me from "../assets/photos/me.jpg";
import Hitulat from "./Hitulat.jsx";


const Me = () => {
    return (
        <div id="Mie" className="bg-lime-200 py-24 sm:py-32">
            <div className="mx-auto max-w-auto px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h1 className="text-xl font-semibold text-purple-700">My favourite quote: "Hello world!"</h1>


                        <div className="relative z-1 flex items-end h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[45rem]">
                            <div className="absolute top-0 left-0  pointer-events-none md:w-3/5 xl:w-auto">
                                <img
                                    className="w-full h-full object-cover md:object-right"
                                    width={400} height={330} alt="Meikä"
                                    src={me} />
                            </div>
                            <div className="relative z-1 max-w-[15rem] ml-auto bg-slate-50/70 rounded-3xl pt-2 mb-2 lg:w-3/5 xl:w-auto">
                                <h2 className="text-base/7 uppercase font-semibold text-purple-700 text-center"><span className="underline decoration-4 decoration-lime-500">IT Insinööri</span> </h2>
                                <p className="text-center text-base">Intohimoihini kuuluu uusien asioiden oppiminen ja tiedon hakeminen.</p>

                            </div>
                            <Hitulat />
                        </div>
                            <div className="relative z-1 grid gap-5 lg:grid-cols-2">
                                <div className="relative min-h-[39rem] rounded-2xl overflow-hidden bg-lime-100/70">

                                    <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                                        <p className="body-2 mb-[3rem] text-n-3">Tekköö sitä tätä ja tuota tekoälyllä, kantsii koklaa now.</p>
                                    </div>


                                </div>



                                <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
                                    <div className="py-12 px-4 xl:px-8">
                                        <h4>Video generation</h4>
                                        <p className="body-2 mb-[2rem] text-n-3">
                                            Olen nopea työssäni, uskallan ajatella boksin ulkopuolelta ja olen valmis etsimään ratkaisuja ongelmiin.
                                        </p>

                                        <ul className="flex items-center justify-between">
                                            <li>x</li>
                                            <li>x</li>
                                            <li>x</li>

                                        </ul>
                                    </div>

                                    <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                                        <img
                                            src={me}
                                            className="w-full h-full object-cover"
                                            width={520}
                                            height={400}
                                            alt="Scary robot"
                                        />

                                    </div>
                                </div>
                            </div>
                        </div>

                <Hitulat />
            </div>



                </div>



    )
}
export default Me
