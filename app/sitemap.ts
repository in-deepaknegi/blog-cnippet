import fs from "fs";
import { MetadataRoute } from "next";
import path from "path";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

    const BASE_URL = 'https://blog.cnippet.com';

    const filePath = path.join(process.cwd(), 'blogs.json');
    const content = fs.readFileSync(filePath, 'utf-8');
    const blogs = JSON.parse(content);


    const entries: MetadataRoute.Sitemap = blogs.map(({ slug }: any) => ({
        url: `${BASE_URL}/${slug}`,
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
        {
            url: `${BASE_URL}/blogs`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        ...entries,
    ]
}