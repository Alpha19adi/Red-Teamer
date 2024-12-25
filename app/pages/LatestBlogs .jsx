import BlogCard from "../components/BlogCard";
import { blogPosts } from '../constants';

const LatestBlogs = () => {
  // Take only the first 3 blog posts
  const displayedPosts = blogPosts.slice(0, 3);

  return (
    <section id="Blogs" className="bg-dark py-10 md:py-20">
      <div className="container mx-auto max-w-screen-xl">
        <div className="text-center mb-10 md:mb-20">
          <h2 className="text-white text-2xl md:text-5xl font-semibold mb-4">
            Latest Blogs & News
          </h2>
          <p className="max-w-3xl mx-auto md:max-w-2xl text-base md:text-lg font-medium text-gray-300 px-14 md:px-0">
            Our AI writing tool is designed to empower you with exceptional
            writing capabilities, making the writing process more efficient,
            accurate, and enjoyable.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestBlogs;