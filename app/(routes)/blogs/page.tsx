import React from 'react'
import Image from 'next/image'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { getBlogs, saveBlogs } from '@/lib/getPosts';

const page = () => {

    const blogs = getBlogs();
    saveBlogs();

    return (
        <>
            <Navbar />

            <section className="relative isolate py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="flex justify-between mx-auto flex-col sm:flex-row space-y-3 sm:space-y-0 sm:text-center tracking-tight text-black">
                        <h2 className="text-3xl font-semibold sm:text-5xl">Latest Blogs</h2>
                        <a href="/blogs" className="my-auto text-2xl">
                            Discover more <span aria-hidden="true">→</span>
                        </a>
                    </div>
                    <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-7xl lg:grid-cols-3">
                        {blogs.map((post) => (
                            <article
                                key={post.title}
                                className="flex flex-col items-start rounded-2xl hover:bg-gray-100 p-3">
                                <a
                                    href={post.href}
                                    className="relative overflow-hidden rounded-2xl">
                                    <Image
                                        src={post.image}
                                        width={1080}
                                        height={680}
                                        alt="post-img"
                                        className="aspect-video w-full object-cover sm:aspect-[2/1] lg:aspect-[3/2] hover:scale-110 transform ease-in-out duration-300"
                                    />
                                </a>
                                <div className="mt-6 md:mt-8 max-w-xl">
                                    <div className="text-xs">
                                        <span
                                            className="relative z-10 rounded-full bg-slate-900 px-3 py-1.5 text-white">
                                            {post.category}
                                        </span>
                                    </div>
                                    <div className="relative">
                                        <h3 className="mt-3 text-2xl font-semibold text-gray-900">
                                            <a href={post.href}>
                                                <span className="absolute inset-0" />
                                                {post.title}
                                            </a>
                                        </h3>
                                        <p className="mt-2 line-clamp-2 text-[0.925rem] leading-6 text-gray-900">
                                            {post.description}
                                        </p>
                                    </div>
                                    <div className="mt-4 text-gray-500 text-sm tracking-tight my-auto">
                                        {post.date}
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </>

    )
}

export default page