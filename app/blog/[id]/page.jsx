import { CalendarIcon, UserIcon } from 'lucide-react';
import Image from 'next/image';
import React from 'react'

const Page = async ({ params }) => {
  const blogPosts = [
    {
      id: 1,
      title: "Revolution in Content Creation and Communication",
      description: "Second, when you have become capable of watching and witnessing your body and its activities, then you can take the second step: watch the activities of your mind – thoughts, dreams, imagination.\n\nJust remain a witness, as if you are standing by the side of the road and a procession of thoughts is passing on the road. You are not part of it.\n\nYou are just a mirror reflecting, without any judgement – because the mirror has no judgement.",
      author: "Alex Demo",
      date: "25 Mar, 2025",
      imageUrl: "/hero.svg"
    },
  ];

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
    <div className='w-full bg-dark min-h-screen flex items-center'>
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
    </div>
  );
};

export default Page;