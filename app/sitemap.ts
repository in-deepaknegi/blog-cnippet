import { MetadataRoute } from 'next'

const urls = [
    'https://blog.cnippet.com',
    'https://blog.cnippet.com/blogs',
    'https://blog.cnippet.com/build-a-blog-with-nextjs-and-mdx',
    'https://blog.cnippet.com/google-authentication-in-nextjs-using-nextauth-and-mongodb',
    'https://blog.cnippet.com/implementing-dark-mode-in-next-js-14'
]

export default function sitemap(): MetadataRoute.Sitemap {
    console.log(urls.length)

    const allUrls: MetadataRoute.Sitemap =  urls.map((url) => ({
        url,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: url === 'https://blog.cnippet.com' ? 1 : 0.8,
    }));

    return allUrls;
}