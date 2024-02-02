import Hero1 from "@/public/nextjs.png";
import Hero2 from "@/public/react.png";
import Hero3 from "@/public/typescript.jpg";

const posts = [
    {
        id: 1,
        title: "Building Scalable Next.js Apps",
        href: "/build-a-blog-with-nextjs-and-mdx",
        img: Hero1,
        description: "Discover the best practices and strategies for building scalable Next.js applications that can handle a high volume of traffic and grow with your business.",
        date: "Jan 15, 2024",
        category: {
            title: "Technology",
            href: "#"
        },
    },
    {
        id: 2,
        title: "Exploring React Hooks in Depth",
        href: "/demo",
        img: Hero2,
        description: "Learn how to effectively and efficiently use React Hooks in your projects to improve the performance and scalability of your applications.",
        date: "Mar 16, 2020",
        category: {
            title: "Marketing",
            href: "#"
        },
    },
    {
        id: 3,
        title: "Improve your customer experience",
        href: "#",
        img: Hero3,
        description: "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
        date: "Mar 16, 2020",
        category: {
            title: "Marketing",
            href: "#"
        },
    },
];

export default posts