import React from "react";
import Image from "next/image";
import Hero1 from "@/public/nextjs.png";
import Hero2 from "@/public/react.png";
import Hero3 from "@/public/typescript.jpg";

const posts = [
    {
        id: 1,
        title: "Building Scalable Next.js Apps",
        href: "/blog/build-a-blog-with-nextjs-and-mdx",
        img: Hero1,
        description: "Discover the best practices and strategies for building scalable Next.js applications that can handle a high volume of traffic and grow with your business.",
        date: "Jan 15, 2024",
        datetime: "2020-03-16",
        category: { title: "Technology", href: "#" },
    },
    {
        id: 2,
        title: "Exploring React Hooks in Depth",
        href: "/blog/demo",
        img: Hero2,
        description: "Learn how to effectively and efficiently use React Hooks in your projects to improve the performance and scalability of your applications.",
        date: "Mar 16, 2020",
        datetime: "2020-03-16",
        category: { title: "Marketing", href: "#" },
    },
    {
        id: 3,
        title: "Improve your customer experience",
        href: "#",
        img: Hero3,
        description: "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
        date: "Mar 16, 2020",
        datetime: "2020-03-16",
        category: { title: "Marketing", href: "#" },
    },
];

const Blogs = () => {
    return (
        <section className="relative isolate py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="flex justify-between mx-auto text-center tracking-tight text-black">
                    <h2 className="text-3xl font-semibold sm:text-5xl">Latest Blogs</h2>
                    <a href="#" className="my-auto text-2xl">
                        Discover more <span aria-hidden="true">→</span>
                    </a>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {posts.map((post) => (
                        <article key={post.id} className="flex flex-col items-start">
                            <a
                                href={post.href}
                                className="relative w-full h-full hover:scale-105 transform ease-in-out duration-300"
                            >
                                <Image
                                    src={post.img}
                                    alt="post-img"
                                    className="aspect-video w-full rounded-2xl object-cover sm:aspect-[2/1] lg:aspect-[3/2] "
                                />
                                <div className="absolute inset-0 rounded-2xl shadow-xl ring-inset ring-gray-100"></div>
                            </a>
                            <div className="mt-2 md:mt-8 max-w-xl">
                                <div className="text-xs">
                                    <a
                                        href={post.category.href}
                                        className="relative z-10 rounded-full bg-gray-200 px-3 py-1.5 font-medium text-gray-800"
                                    >
                                        {post.category.title}
                                    </a>
                                </div>
                                <div className="relative">
                                    <h3 className="mt-3 text-2xl font-semibold text-gray-900">
                                        <a href={post.href}>
                                            <span className="absolute inset-0" />
                                            {post.title}
                                        </a>
                                    </h3>
                                    <p className="mt-2 line-clamp-1 text-[0.925rem] leading-6 text-gray-900">
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
    );
};

export default Blogs;
