import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/24/outline'
import React from 'react'


const features = [
    {
        name: 'Push to deploy.',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: CloudArrowUpIcon,
    },
    {
        name: 'SSL certificates.',
        description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
        icon: LockClosedIcon,
    },
    {
        name: 'Database backups.',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: ServerIcon,
    },
    {
        name: 'Push to deploy.',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: CloudArrowUpIcon,
    },
    {
        name: 'SSL certificates.',
        description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
        icon: LockClosedIcon,
    },
    {
        name: 'Database backups.',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: ServerIcon,
    },
]

export default function Features() {
    return (
        <section id="features" className="bg-gray-200 py-32">
            <div className='container mx-auto px-4 space-y-6'
            >


                <div className="text-center max-w-xl mx-auto">
                    <h3 className="font-normal uppercase mb-2">What is <span className="font-semibold text-primary">Bargedesk</span> useful for</h3>
                    <h2 className="text-2xl font-semibold mb-3">Optimization, innovation and the focus on sustainability</h2>
                </div>

                <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:grid-cols-3">
                    {
                        features.map((feature, index) => (


                            <div key={index} className="flex flex-col items-start p-6 border border-gray-200 space-y-2 rounded-lg shadow bg-dark">
                                <feature.icon className="h-10 w-10 text-primary" />
                                <a href="#">
                                    <h5 className="mb-2 text-xl font-semibold tracking-tight text-white">Need a help in Claim?</h5>
                                </a>
                                <p className="mb-3 text-gray-300">Go to this step by step guideline process on how to certify for your weekly benefits:</p>

                            </div>

                        ))
                    }

                </div>
            </div>


        </section>
    )
}
