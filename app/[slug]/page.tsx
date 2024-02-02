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

                        <div className="blog mt-12 flex flex-col gap-y-5 text-gray-800 font-sans">
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
                                        <a href="#">
                                            <span className='sr-only'>Facebook</span>
                                            <svg viewBox="0 0 20 20" version="1.1" className='w-7 h-7 text-gray-400'><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="#000000"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]"> </path> </g> </g> </g> </g></svg>
                                        </a>
                                        <a href={value.insta}>
                                            <span className='sr-only'>Instagram</span>
                                            <svg fill="currentColor" viewBox="0 0 24 24" className='w-7 h-7 text-gray-400' aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path></svg>
                                        </a>
                                        <a href="#" >
                                            <span className='sr-only'>Twitter</span>
                                            <svg fill="currentColor" viewBox="0 0 24 24" className='w-7 h-7 text-gray-400' aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* <div className='rounded-2xl border p-6 shadow-xl'>
                                <h3 className='font-semibold text-lg mb-4 border-b'>Related articles</h3>

                                {value.articles.map((article: any) => (
                                    <a key={article.id} href="#">
                                        <div className="text-blue-600 text-base font-semibold">
                                            {article.title}
                                        </div>
                                        <p className='mb-4 text-sm text-slate-900 line-clamp-2'>
                                            {article.desc}
                                        </p>
                                    </a>
                                ))}
                            </div> */}
                        </div>
                    </aside>
                </div>
            </main>

            <Footer />
        </>
    )
}

export default Blog
