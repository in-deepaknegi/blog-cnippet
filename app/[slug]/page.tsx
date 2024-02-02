import React from 'react'
import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote/rsc'
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import rehypeHighlight from 'rehype-highlight';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Profile1 from '@/public/deepak.jpg';
import recents from '@/data/recents';

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

                        <div className="blog mt-8 flex flex-col gap-y-5 text-gray-800 font-sans">
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

                    <aside className='hidden lg:block lg:w-72'>
                        <div className='sticky top-6'>
                            <div className='mb-6 rounded-2xl border p-6 shadow-xl'>
                                <a href="#" className='mb-4 flex gap-4 items-center'>
                                    <Image
                                        src={Profile1}
                                        alt="id-1"
                                        className="h-8 w-8 rounded-full bg-gray-50 object-cover" />
                                    <div className="text-sm leading-4">
                                        <div className="text-slate-900 font-semibold">
                                            {value.author}
                                        </div>
                                    </div>
                                </a>
                                <p className='mb-4 text-sm text-slate-900'>
                                    {value.intro}
                                </p>

                                <div className='flex'>
                                    <h2 className='my-auto text-sm font-semibold'>Connect with me</h2>
                                    <div className='ml-auto flex gap-x-2'>
                                        <a href={value.github} target='_blank'>
                                            <span className='sr-only'>Github</span>
                                            <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" className='w-7 h-7 text-gray-400'><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
                                        </a>
                                        <a href={value.insta} target='_blank'>
                                            <span className='sr-only'>Instagram</span>
                                            <svg fill="currentColor" viewBox="0 0 24 24" className='w-7 h-7 text-gray-400' aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path></svg>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className='rounded-2xl border p-6 shadow-xl'>
                                <h3 className='font-semibold text-lg mb-4 border-b'>Related articles</h3>

                                {recents.map((article: any) => (
                                    <a key={article.id} href={article.href}>
                                        <div className="text-stale-900 text-base font-semibold">
                                            {article.title}
                                        </div>
                                        <p className='mb-4 text-sm text-slate-600 line-clamp-2'>
                                            {article.desc}
                                        </p>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </aside>
                </div>
            </main>

            <Footer />
        </>
    )
}

export default Blog
