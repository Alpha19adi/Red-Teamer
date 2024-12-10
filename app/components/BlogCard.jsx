import Image from 'next/image';
import { CalendarIcon, UserIcon } from 'lucide-react';

const BlogCard = ({ post }) => {
  return (
    <div className="rounded-3xl group flex flex-col shadow-md w-[400px] mx-auto transition-all duration-300 hover:shadow-xl ">
      <div className="relative h-48 mb-4 overflow-hidden">
        <Image 
          src={post.imageUrl} 
          alt={post.title} 
          fill
          className="object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      
      <div className="p-4">
        <a 
          href={`/blog/${post.id}`} 
          className="text-white text-lg font-bold line-clamp-2 hover:text-gray-300 transition-colors"
        >
          {post.title}
        </a>
        
        <p className="text-gray-400 text-sm mt-2 line-clamp-3">
          {(post.description.length > 150) ? post.description.substring(0, 150) + '...' : post.description}
        </p>
        
        <div className="flex items-center justify-between mt-4 text-gray-500">
          <div className="flex items-center gap-2">
            <UserIcon className="w-4 h-4" />
            <span className="text-xs">{post.author}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <CalendarIcon className="w-4 h-4" />
            <span className="text-xs">{post.date}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;