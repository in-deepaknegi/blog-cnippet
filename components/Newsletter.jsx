import React from "react";

const newsletter = () => {
    return (
        <section
            id="newsletter"
            className="overflow-x-hidden py-10 sm:py-24 lg:py-32">
            <div className="mx-auto items-center grid max-w-7xl grid-cols-1 px-6 lg:grid-cols-12 lg:gap-1 lg:px-8">
                <div className="mx-auto col-span-12 lg:col-span-7 lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Stay Updated with Our Newsletter
                    </h2>
                    <p className="mt-4 text-base text-gray-600">
                        Receive the most recent information about new services and exclusive
                        deals.
                    </p>
                </div>
                <form
                    action=""
                    className="mx-auto w-full max-w-md col-span-12 lg:col-span-5 mt-6 lg:mt-0 lg:mx-0"
                >
                    <div className="flex gap-x-3">
                        <label htmlFor="email-address" className="sr-only">
                            Email address
                        </label>
                        <input
                            id="email-address"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-black/70 focus:ring-inset sm:text-sm sm:leading-6"
                            placeholder="Enter your email"
                        />
                        <button
                            type="submit"
                            className="flex-none rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80"
                        >
                            Subscribe
                        </button>
                    </div>
                    <p className="mt-4 text-sm fose text-gray-700">
                        We care about your data. Read our
                        <span className="text-black font-semibold">
                            <a href="#"> privacy policy</a>
                        </span>
                        .
                    </p>
                </form>
            </div>
        </section>
    );
};

export default newsletter;
