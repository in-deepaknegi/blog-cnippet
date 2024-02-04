import React from 'react'

const Hero = () => {
    return (
        <section className="relative isolate overflow-hidden">
            <div className="mx-auto max-w-4xl px-6 py-16 lg:px-0 lg:py-20">
                <h1 className="text-center text-5xl tracking-tight font-semibold text-black md:text-7xl">
                    The only source of knowledge is experience
                </h1>
                <p className="mt-6 text-center text-base text-gray-900 md:text-lg">
                    Our emphasis lies in delivering valuable insights, imparting fresh information, and presenting distinctive viewpoints that contribute to daily life.
                </p>
                <div className="mx-auto mt-10 flex items-center justify-center gap-x-6">
                    <form action="" className='mx-auto w-full max-w-md col-span-12 lg:col-span-5 lg:mx-0'>
                        <div className='flex gap-x-3'>
                            <label htmlFor="email-address" className="sr-only">Email address</label>
                            <input id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="min-w-0 flex-auto rounded-xl border-0 bg-white/5 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-black/30 focus:ring-inset sm:text-sm sm:leading-6" placeholder="Enter your email" />
                            <button type="submit" className="flex-none rounded-2xl bg-black px-5 py-2.5 text-sm font-semibold text-white shadow-sm">
                                Subscribe
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Hero