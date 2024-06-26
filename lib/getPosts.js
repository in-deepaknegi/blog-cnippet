import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const getBlogs = () => {
    const dir = path.join(process.cwd(), 'blog');
    const fileNames = fs.readdirSync(dir);

    const blogs = fileNames.map(fileName => {
        const fullPath = path.join(dir, fileName);
        const fileContent = fs.readFileSync(fullPath, 'utf-8');
        const { data } = matter(fileContent);
        return data;

    });

    return blogs;
};


const saveBlogs = () => {
    const blogs = getBlogs();
    // Assuming you want to save the blogs array to a file named 'blogs.json'
    const filePath = path.join(process.cwd(), 'blogs.json');

    try {
        // Write the blogs array to the 'blogs.json' file
        fs.writeFileSync(filePath, JSON.stringify(blogs, null, 4));
        // console.log('Blogs saved successfully.');
    } catch (error) {
        console.error('Error saving blogs:', error);
    }
};

const shuffleBlogs = () => {
    const blogs = getBlogs();

    const shuffleBlogs = shuffleArray(blogs);

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    return shuffleBlogs;
}

export { getBlogs, saveBlogs, shuffleBlogs };