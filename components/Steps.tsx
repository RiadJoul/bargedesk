import React from 'react'
import { FaListCheck, FaRegHandshake } from 'react-icons/fa6'
import { HiOutlineLightBulb } from 'react-icons/hi'
import { LuMousePointerClick } from 'react-icons/lu'

export default function Steps() {
    return (
        <section id="steps" className="py-32 bg-no-repeat bg-cover" style={{backgroundImage: "url(./intro-background.png)"}}>
            <div className="container mx-auto">
                <div className="text-center max-w-xl mx-auto">
                    <h6 className="font-normal uppercase mb-2">How it <span className="font-semibold">Work</span></h6>
                    <h2 className="text-3xl font-semibold mb-3">How does it work ?</h2>
                    <p className="text-base font-normal text-gray-500">Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque rem aperiam.</p>
                </div>
                <div className="mt-20">
                    <div className="grid lg:grid-cols-4 grid-cols-1 gap-10">
                        <div>
                            <div className="relative">
                                <div className="text-center">
                                    <span className="inline-flex relative z-0 bg-blue-500/10 h-24 w-24 items-center justify-center" style={{
                                        borderRadius: "28% 72% 50% 50%/26% 20% 80% 74%"
                                    }}>
                                        <LuMousePointerClick className="text-5xl"/>
                                       
                                    </span>
                                    <h5 className="text-xl font-semibold mb-3 mt-5">1. STEP</h5>
                                    <p className="text-base font-normal text-gray-500">Nemo enim ipsam quia voluptas sit aspernatur ist dolores.</p>
                                    <div className="hidden lg:block">
                                        <img src="arrow-up.png" className="absolute -right-16 top-2/4 w-28"/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="relative">
                                <div className="text-center">
                                    <span className="inline-flex relative z-0 bg-emerald-500/10 h-24 w-24 items-center justify-center" style={{
                                        borderRadius: "28% 72% 50% 50%/26% 20% 80% 74%"
                                    }}>
                                        <HiOutlineLightBulb className="text-5xl"/>

                                    </span>
                                    <h5 className="text-xl font-semibold mb-3 mt-5">2. STEP</h5>
                                    <p className="text-gray-600 dark:text-gray-400">Nemo enim ipsam quia voluptas sit aspernatur ist dolores.</p>
                                    <div className="hidden lg:block">
                                        <img src="arrow-down.png" className="absolute -right-20 top-2/4 w-28"/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="relative">
                                <div className="text-center">
                                    <span className="inline-flex relative z-0 bg-emerald-500/10 h-24 w-24 items-center justify-center" style={{
                                        borderRadius: "28% 72% 50% 50%/26% 20% 80% 74%"
                                    }}>
                                        <FaListCheck className="text-5xl"/>

                                    </span>
                                    <h5 className="text-xl font-semibold mb-3 mt-5">3. STEP</h5>
                                    <p className="text-gray-600 dark:text-gray-400">Nemo enim ipsam quia voluptas sit aspernatur ist dolores.</p>
                                    <div className="hidden lg:block">
                                    <img src="arrow-up.png" className="absolute -right-20 top-2/4 w-28"/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="text-center">
                                <span className="inline-flex relative z-0 bg-amber-500/10  h-24 w-24 items-center justify-center" style={{
                                    borderRadius: "28% 72% 50% 50%/26% 20% 80% 74%"
                                }}>
                                    <FaRegHandshake className="text-5xl"/>

                                </span>
                                <h5 className="text-xl font-semibold mb-3 mt-5">4. STEP</h5>
                                <p className="text-gray-600 dark:text-gray-400">Nemo enim ipsam quia voluptas sit aspernatur ist dolores.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>

    )
}
