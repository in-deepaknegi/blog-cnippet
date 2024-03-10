// import { MetadataRoute } from 'next'

// const urls = [
//     'https://blog.cnippet.com',
//     'https://blog.cnippet.com/blogs',
//     'https://blog.cnippet.com/build-a-blog-with-nextjs-and-mdx',
//     'https://blog.cnippet.com/google-authentication-in-nextjs-using-nextauth-and-mongodb',
//     'https://blog.cnippet.com/implementing-dark-mode-in-next-js-14',
//     'https://blog.cnippet.com/newsletter-api-tutorial-using-next-js-14-and-mongodb',
// ]

// export default function sitemap(): MetadataRoute.Sitemap {
//     console.log(urls.length)

//     const allUrls: MetadataRoute.Sitemap =  urls.map((url) => ({
//         url,
//         lastModified: new Date(),
//         changeFrequency: 'weekly',
//         priority: url === 'https://blog.cnippet.com' ? 1 : 0.8,
//     }));

//     return allUrls;
// }

import fs from "fs";
import { MetadataRoute } from "next";
import path from "path";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

    const BASE_URL = 'https://blog.cnippet.com';

    const filePath = path.join(process.cwd(), 'blogs.json');
    const content = fs.readFileSync(filePath, 'utf-8');
    const blogs = JSON.parse(content);


    const entries: MetadataRoute.Sitemap = blogs.map(({ frontmatter }: any) => ({
        url: `${BASE_URL}/${frontmatter.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
    }))

    return [
        {
            url: `${BASE_URL}`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        ...entries,
    ]
}