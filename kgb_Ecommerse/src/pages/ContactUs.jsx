import React from 'react'

const ContactUs = () => {
  return (
    <div className="bg-light-pink-1 font-[sans-serif] lg:h-screen">
            <div
                className="grid lg:grid-cols-3 items-center max-lg:justify-center gap-6 h-full sm:p-12 p-8 max-sm:p-4">
                <div className="max-w-lg max-lg:mx-auto max-lg:text-center max-lg:mb-6">
                    <h2 className="text-4xl font-extrabold text-gray-800">Contact Us</h2>
                    <p className="text-sm text-gray-600 mt-4 leading-relaxed">Have a specific inquiry? Our
                        experienced team is ready to engage with you.</p>
                    <form className="mx-auto mt-8 bg-white rounded-lg p-6 shadow-md space-y-4">
                        <input type='text' placeholder='Name'
                            className="w-full rounded-md h-12 px-6 bg-[#f0f1f2] text-sm outline-none" />
                        <input type='email' placeholder='Email'
                            className="w-full rounded-md h-12 px-6 bg-[#f0f1f2] text-sm outline-none" />
                        <input type='text' placeholder='Subject'
                            className="w-full rounded-md h-12 px-6 bg-[#f0f1f2] text-sm outline-none" />
                        <textarea placeholder='Message' rows="6"
                            className="w-full rounded-md px-6 bg-[#f0f1f2] text-sm pt-3 outline-none"></textarea>
                        <button type='button'
                            className="w-full text-white hover:bg-rose-700 focus:ring-4 focus:outline-none focus:ring-rose-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-rose-600 dark:hover:bg-rose-500 dark:focus:ring-rose-500 bg-[#ff006c]">Send
                            Message</button>
                    </form>
                </div>

                <div className="z-10 relative lg:col-span-2">
                    <img src="https://readymadeui.com/images/analtsis.webp" className="w-3/4 object-contain block mx-auto" />
                </div>
            </div>
        </div>
  )
}

export default ContactUs