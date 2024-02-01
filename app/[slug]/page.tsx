import React from 'react'
import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote/rsc'
import fs from 'fs';
import path from 'path';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import matter from 'gray-matter';
import rehypeHighlight from 'rehype-highlight';


const Blog = ({ params }: { params: { slug: string } }) => {
    const id = params.slug

    const filePath = path.join(process.cwd(), 'blog', `${id}.mdx`);

    const srco = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(srco);
    const value = data;
    const src = content;

    const options = {
        mdxOptions: {
            remarkPlugins: [],
            rehypePlugins: [rehypeHighlight],
        }
    };

    return (
        <>
            <Navbar />

            <main className='pt-8 pb-16 antialiased lg:pt-16 lg:pb-24'>
                <div className='mx-auto flex max-w-6xl justify-between px-4 lg:px-0'>
                    <article className="relative max-w-3xl mx-auto pt-10">
                        <h1 className="text-2xl font-extrabold text-slate-900 md:text-4xl ">
                            {value.title}
                        </h1>
                        <div className="text-sm leading-6">
                            <dl>
                                <dt className="sr-only">Date</dt>
                                <dd className="absolute inset-x-0 top-0 text-slate-700">
                                    <time dateTime="2023-12-20T20:00:00.000Z">
                                        {value.date}
                                    </time>
                                </dd>
                            </dl>
                        </div>

                        <div className="blog mt-12 flex flex-col gap-y-6 text-gray-800 font-sans">
                            <p className='text-lg'>
                                {value.subtitle}
                            </p>
                            <div className='max-w-3xl mx-auto'>
                                <Image
                                    src={value.image}
                                    width={1080}
                                    height={680}
                                    alt='featured-image'
                                    className='aspect-[16/9] object-cover object-center rounded-xl'
                                />
                            </div>

                            <MDXRemote source={src} options={options as any}/>

                        </div>
                    </article>
                </div>
            </main>

            <Footer />
        </>
    )
}

export default Blog