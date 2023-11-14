import Link from "next/link";

const metadata = {
  title: "Blogs | Next App",
  description: "next app",
};

const blogs = [
  {
    id: 1,
    year: 2023,
    title: "Introduction to Next.js",
    description:
      "Learn the basics of Next.js and how to get started with building web applications.",
  },
  {
    id: 2,
    year: 2020,
    title: "Optimizing Images with next/image",
    description:
      "Explore how to optimize images in Next.js using the next/image component for better performance.",
  },
  {
    id: 3,
    year: 2022,
    title: "Server-Side Rendering (SSR) in Next.js",
    description:
      "Understand the concept of Server-Side Rendering and how to implement it in Next.js.",
  },
  {
    id: 4,
    year: 2021,
    title: "Styling in Next.js with Tailwind CSS",
    description:
      "Learn how to style your Next.js applications using the popular utility-first CSS framework, Tailwind CSS.",
  },
  {
    id: 5,
    year: 2019,
    title: "Authentication in Next.js",
    description:
      "Implement user authentication in your Next.js applications for secure user access.",
  },
  {
    id: 6,
    year: 2023,
    title: "Data Fetching in Next.js",
    description:
      "Explore different techniques for fetching data in Next.js, including client-side and server-side fetching.",
  },
  {
    id: 7,
    year: 2015,
    title: "Deploying Next.js Apps",
    description:
      "Learn how to deploy your Next.js applications to popular hosting platforms such as Vercel or Netlify.",
  },
  {
    id: 8,
    year: 2023,
    title: "Building a Blog with Next.js",
    description:
      "Step-by-step guide on building a blog using Next.js with features like dynamic routing and Markdown support.",
  },
];

const BlogsPage = () => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 p-12">
      {blogs.map((blog) => (
        <Link
          key={blog.id}
          href={{
            pathname: `/blogs/${blog.year}/${blog.id}`,
            query: { title: blog.title },
          }}
        >
          <div className="bg-gray-100 hover:bg-white shadow-md p-6 rounded-lg transition-transform transform hover:scale-105 h-48 ring-1">
            <p className="text-gray-500">{blog.year}</p>
            <h2 className="text-xl font-semibold mt-2">{blog.title}</h2>
            <p className="text-gray-700 mt-2">{blog.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BlogsPage;
