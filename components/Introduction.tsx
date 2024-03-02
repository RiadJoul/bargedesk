import Image from 'next/image';
import { FaCalendarCheck } from 'react-icons/fa';

const Introduction = () => {
    return (
        <section id="introduction" className="py-32 bg-gray-100 px-10 bg-no-repeat bg-cover" style={{backgroundImage: "url(./intro-background.png)"}}>
            <div className="container mx-auto">
                <div className="text-center max-w-xl mx-auto">
                    <h6 className="font-normal uppercase mb-2">
                        What is <span className="font-semibold text-primary">Bargedesk</span>
                    </h6>
                </div>
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 mt-16 items-center">
                    
                    <div className="lg:ms-24">
                        <h1 className="text-4xl font-semibold">What is it?</h1>
                        <p className="text-base font-normal text-gray-800 mt-8">
                        Bargedesk is a modern, cloud-based transport matching system for charterers in the inland shipping industry. It accelerates the entire order processing process and provides real-time insight, resulting in optimal planning and a strong position when attracting tenders and spot requests.
                        </p>
                        <div className="flex items-center gap-5 mt-5">
                            <div>
                                <div className="w-10 h-10 rounded-full shadow-xl bg-white flex items-center justify-center">
                                    <FaCalendarCheck/>
                                </div>
                            </div>
                            <p className="text-base font-normal text-gray-800">
                                
                            Strengthened Competitive Position
                            </p>
                            
                        </div>
                        <div className="flex items-center gap-5 mt-5">
                            <div>
                                <div className="w-10 h-10 rounded-full shadow-xl bg-white flex items-center justify-center">
                                    <FaCalendarCheck/>
                                </div>
                            </div>
                            <p className="text-base font-normal text-gray-800">
                                
                            Less Empty
                            </p>
                            
                        </div>
                        <div className="flex items-center gap-5 mt-5">
                            <div>
                                <div className="w-10 h-10 rounded-full shadow-xl bg-white flex items-center justify-center">
                                    <FaCalendarCheck/>
                                </div>
                            </div>
                            <p className="text-base font-normal text-gray-800">
                                
                            Increased Efficiency Through Unique Matching System
                            </p>
                            
                        </div>
                        <div className="flex items-center gap-5 mt-5">
                            <div>
                                <div className="w-10 h-10 rounded-full shadow-xl bg-white flex items-center justify-center">
                                    <FaCalendarCheck/>
                                </div>
                            </div>
                            <p className="text-base font-normal text-gray-800">
                                
                            Increased Customer Satisfaction
                            </p>
                            
                        </div>

                    </div>
                    <div>
                        <Image
                            src="/computer.png"
                            alt=""
                            width={500} // Set your preferred width
                            height={350} // Set your preferred height
                            className="mx-auto"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Introduction;
