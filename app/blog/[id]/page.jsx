// import { blogPosts } from '@/app/pages/LatestBlogs ';
import { CalendarIcon, UserIcon } from 'lucide-react';
import Image from 'next/image';
import React from 'react'

const page = async ({ params }) => {

  const blogPosts = [
    {
      id: 1,
      title: "Revolution in Content Creation and Communication",
      description: "Second, when you have become capable of watching and witnessing your body and its activities, then you can take the second step: watch the activities of your mind – thoughts, dreams, imagination. Just remain a witness, as if you are standing by the side of the road and a procession of thoughts is passing on the road. You are not part of it. You are just a mirror reflecting, without any judgement – because the mirror has no judgement. A beautiful face…the mirror does not say, ‘Great!’ An ugly face…the mirror does not say, ‘my god!’ The mirror simply reflects whatsoever comes before it. Exactly one has to become a pure witness, without any judgement, evaluation, good, bad. Then a strange experience happens as your witnessing grows, thoughts start lessening. In the same proportion, if you have ten percent witnessing, then there are ninety percent thoughts; if you have ninety percent consciousness, awareness, then there are only ten percent thoughts. A hundred percent witness, then there is just pure nothingness. This is the state of no-mind, this is the door to the third and the last step.Now watch subtle emotions, moods. Thoughts are not so subtle. Moods – a certain shadow of sadness, a certain joy…one is concerned with the body, the second with the mind, the third with the heart.And when you become capable of watching the third too, the fourth happens on its own accord. Suddenly a quantum leap and you are standing exactly at the very centre of your being, where there is nothing to be aware of. Awareness is aware of itself; consciousness is conscious of itself. And this is the moment of ultimate ecstasy, samadhi, enlightenment, or whatever name one prefers to give it; but this is the ultimate, there is nothing above it. There is no way to go beyond it, because wherever you go beyond it you will still be a witness. If you start witnessing the witness, you have not gone above it; you are still a witness. So, it is the very end of the inner journey, you have come home.And this is my whole teaching. It is absolutely scientific; it needs no belief; it needs only experimentation. And i don’t ask anybody to trust me; i ask only to experiment and experience.I know that it will happen to you because it has happened to me, and i am just as ordinary a human being as you are. I don’t claim to be a prophet or a saviour or an incarnation of God; i don’t claim any specialty. The only difference is you are still asleep, and i am awake. It is only a question…sooner or later you will be awake, too.A bridged from The last testament/ courtesy OSHO times international/ www.osho.com",
      author: "Alex Demo",
      date: "25 Mar, 2025",
      imageUrl: "/hero.svg"
    },
    {
      id: 2,
      title: "AI-Powered Writing Tools Transform Content Strategy",
      description: "Explore how advanced AI technologies are reshaping the way we create, edit, and distribute content across various platforms...",
      author: "Sarah Johnson",
      date: "15 Apr, 2025",
      imageUrl: "/hero.svg"
    },
    {
      id: 3,
      title: "Future of Digital Communication in the Age of AI",
      description: "Innovative approaches to communication are evolving rapidly, with AI playing a crucial role in transforming how we interact...",
      author: "Mike Rodriguez",
      date: "10 May, 2025",
      imageUrl: "/hero.svg"
    }
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

  return (
    <div className='w-full bg-dark min-h-screen flex  items-center'>
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
            <div className="prose prose-invert text-gray-300 leading-relaxed">
              <p className="text-lg">
                {blog.description.split('\n').map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    {index < blog.description.split('\n').length - 1 && <br />}
                  </React.Fragment>
                ))}
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default page;