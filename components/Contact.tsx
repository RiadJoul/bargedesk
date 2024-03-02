import React from 'react'

export default function Contact() {
    return (
        <section id="contact" className="py-32 bg-gray-100 bg-no-repeat bg-cover" style={{backgroundImage: "url(./intro-background.png)"}}>
            <div className="container mx-auto">
                <div className="text-center max-w-xl mx-auto">
                    <h6 className="font-normal uppercase mb-2">
                        Our <span className="font-semibold">Contact Us</span>
                    </h6>
                    <h2 className="text-3xl font-semibold mb-3">Get in Touch</h2>
                    <p className="text-base font-normal text-gray-500">
                        Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium
                        doloremque rem aperiam.
                    </p>
                </div>
                <div className="grid lg:grid-cols-3 gap-6 items-center mt-16 mx-10">


                    <div>
                        <div className="flex items-center gap-6">
                            <img src="/appexy_tv/assets/hello-icon-128ea0ab.png" className="h-20" alt="" />
                            <h2 className="text-3xl font-semibold">Say Hello!</h2>
                        </div>
                        <div className="flex items-center gap-5 mt-10">
                            <div className="h-10 w-10 rounded-md bg-blue-100 flex items-center justify-center">
                                <i className="mdi mdi-email text-2xl text-blue-600"></i>
                            </div>
                            <h5 className="text-xl font-medium">Email</h5>
                        </div>
                        <p className="flex items-center gap-1 text-gray-500 mt-4">
                            <i className="mdi mdi-arrow-right-thin text-2xl"></i>
                            <a href="#" className="text-base font-normal">JuanaMRush@jourrapide.com</a>
                        </p>
                        <p className="flex items-center gap-1 text-gray-500">
                            <i className="mdi mdi-arrow-right-thin text-2xl"></i>
                            <a href="#" className="text-base font-normal">BrandonDBrown@jourrapide.com</a>
                        </p>
                        <div className="flex items-center gap-5 mt-6">
                            <div className="h-10 w-10 rounded-md bg-blue-100 flex items-center justify-center">
                                <i className="mdi mdi-phone text-2xl text-blue-600"></i>
                            </div>
                            <h5 className="text-xl font-medium">Phone</h5>
                        </div>
                        <p className="flex items-center gap-1 text-gray-500 mt-4">
                            <i className="mdi mdi-arrow-right-thin text-2xl"></i>
                            <a href="#" className="text-base font-normal">(+01) 1234 5678 00</a>
                        </p>
                        <p className="flex items-center gap-1 text-gray-500">
                            <i className="mdi mdi-arrow-right-thin text-2xl"></i>
                            <a href="#" className="text-base font-normal">(+01) 1234 5678 00</a>
                        </p>
                        <div className="flex items-center gap-5 mt-6">
                            <div className="h-10 w-10 rounded-md bg-blue-100 flex items-center justify-center">
                                <i className="mdi mdi-google-maps text-2xl text-blue-600"></i>
                            </div>
                            <h5 className="text-xl font-medium">Address</h5>
                        </div>
                        <h5 className="flex items-center gap-1 text-gray-900 mt-4">
                            <i className="mdi mdi-arrow-right-thin text-2xl"></i>
                            <a href="#" className="text-base font-medium"> New York Office</a>
                        </h5>
                        <p className="text-base font-normal text-gray-500">331 Maple Street, Monroe Avenue, CA 90017</p>
                        <h5 className="flex items-center gap-1 text-gray-900 mt-4">
                            <i className="mdi mdi-arrow-right-thin text-2xl"></i>
                            <a href="#" className="text-base font-medium">Anguilla Office</a>
                        </h5>
                        <p className="text-base font-normal text-gray-500">2118 Bird Spring, Creek Road, TX 77388</p>
                    </div>




                    <div className="lg:col-span-2 lg:ms-24">
                        <div className="p-12 rounded-md shadow-2xl bg-white">
                            <form>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="formFirstName" className="block text-sm font-semibold text-gray-500 mb-2">
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            className="block w-full text-sm rounded-md py-2 px-3 border-gray-200 focus:border-gray-300 focus:ring-transparent"
                                            id="formFirstName"
                                            placeholder="Your first name..."
                                            required={true}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="formLastName" className="block text-sm font-semibold text-gray-500 mb-2">
                                            Last Name
                                        </label>
                                        <input
                                            type="text"
                                            className="block w-full text-sm rounded-md py-2 px-3 border-gray-200 focus:border-gray-300 focus:ring-transparent"
                                            id="formLastName"
                                            placeholder="Last first name..."
                                            required={true}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="formEmail" className="block text-sm font-semibold text-gray-500 mb-2">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            className="block w-full text-sm rounded-md py-2 px-3 border-gray-200 focus:border-gray-300 focus:ring-transparent"
                                            id="formEmail"
                                            placeholder="Your email..."
                                            required={true}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="formPhone" className="block text-sm font-semibold text-gray-500 mb-2">
                                            Phone Number
                                        </label>
                                        <input
                                            type="text"
                                            className="block w-full text-sm rounded-md py-2 px-3 border-gray-200 focus:border-gray-300 focus:ring-transparent"
                                            id="formPhone"
                                            placeholder="Type phone number..."
                                            required={true}
                                        />
                                    </div>
                                    <div className="sm:col-span-2">
                                        <div className="mb-3">
                                            <label htmlFor="formSubject" className="block text-sm font-semibold text-gray-500 mb-2">
                                                Subject
                                            </label>
                                            <input
                                                type="text"
                                                className="block w-full text-sm rounded-md py-2 px-3 border-gray-200 focus:border-gray-300 focus:ring-transparent"
                                                id="formSubject"
                                                placeholder="Type subject..."
                                                required={true}
                                            />
                                        </div>
                                    </div>
                                    <div className="sm:col-span-2">
                                        <div className="mb-4">
                                            <label htmlFor="formMessages" className="block text-sm font-semibold text-gray-500 mb-2">
                                                Messages
                                            </label>
                                            <textarea
                                                className="block w-full text-sm rounded-md py-2 px-3 border-gray-200 focus:border-gray-300 focus:ring-transparent"
                                                id="formMessages"
                                                rows={4}
                                                placeholder="Type messages..."
                                                required={true}
                                            ></textarea>
                                        </div>
                                    </div>
                                </div>

                                <button type="submit" className="py-2 px-6 rounded-md text-white bg-primary">
                                    Send Messages <i className="mdi mdi-send ms-1"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
