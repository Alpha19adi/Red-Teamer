import { CalendarIcon, UserIcon } from 'lucide-react';
import Image from 'next/image';
import React from 'react'
import { blogPosts } from '../../constants/index';
import Navbar from "../../components/Navbar"
import Footer from '../../components/Footer';

const Page = async ({ params }) => {

  const { id } = await params;
  const blog = blogPosts.find((post) => post.id === parseInt(id));

  if (!blog) {
    return (
      <div className="container mx-auto px-4 py-12 text-center text-white">
        Blog post not found
      </div>
    );
  }

  // Enhanced content rendering function
  const renderDescription = (description) => {
    // Split by double newline to create paragraphs
    return description.split('\n\n').map((paragraph, index) => (
      <p 
        key={index} 
        className="text-lg mb-4 text-gray-300 leading-relaxed"
      >
        {paragraph}
      </p>
    ));
  };

  return (
    <div className='w-full bg-dark min-h-screen flex-col flex items-center'>
      <Navbar />
      <div className="container mx-auto px-4 pt-2 py-12 max-w-6xl bg-dark">
        <article className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
          {/* Hero Image */}
          <div className="relative w-full h-[400px] mb-8 mt-2">
            <Image
              src={blog.imageUrl}
              alt={blog.title}
              fill
              className="object-cover object-center"
              priority
            />
          </div>

          {/* Blog Content */}
          <div className="p-8">
            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              {blog.title}
            </h1>

            {/* Metadata */}
            <div className="flex items-center space-x-6 mb-6 text-gray-400">
              <div className="flex items-center space-x-2">
                <UserIcon className="w-5 h-5" />
                <span className="text-sm">{blog.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <CalendarIcon className="w-5 h-5" />
                <span className="text-sm">{blog.date}</span>
              </div>
            </div>

            {/* Description/Content */}
            <div className="prose prose-invert">
              {renderDescription(blog.description)}
            </div>
          </div>
        </article>
      </div>
      <Footer />
    </div>
  );
};

export default Page;