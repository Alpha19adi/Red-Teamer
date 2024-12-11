"use client"
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CalendarIcon, UserIcon } from 'lucide-react';
import gsap from 'gsap';
import Navbar from '../components/Navbar';

 const blogPosts = [
    {
        id: 1,
        title: "Revolution in Content Creation and Communication",
        description: "Second, when you have become capable of watching and witnessing your body and its activities...",
        author: "Alex Demo",
        date: "25 Mar, 2025",
        imageUrl: "/hero.svg"
    },
    {
        id: 2,
        title: "AI-Powered Writing Tools Transform Content Strategy",
        description: "Explore how advanced AI technologies are reshaping the way we create, edit, and distribute content...",
        author: "Sarah Johnson",
        date: "15 Apr, 2025",
        imageUrl: "/hero.svg"
    },
    {
        id: 3,
        title: "Future of Digital Communication in the Age of AI",
        description: "Innovative approaches to communication are evolving rapidly, with AI playing a crucial role...",
        author: "Mike Rodriguez",
        date: "10 May, 2025",
        imageUrl: "/hero.svg"
    },
    {
        id: 4,
        title: "Future of Digital Communication in the Age of AI",
        description: "Innovative approaches to communication are evolving rapidly, with AI playing a crucial role...",
        author: "Mike Rodriguez",
        date: "10 May, 2025",
        imageUrl: "/hero.svg"
    },
    {
        id: 5,
        title: "Future of Digital Communication in the Age of AI",
        description: "Innovative approaches to communication are evolving rapidly, with AI playing a crucial role...",
        author: "Mike Rodriguez",
        date: "10 May, 2025",
        imageUrl: "/hero.svg"
    },
    {
        id: 6,
        title: "Future of Digital Communication in the Age of AI",
        description: "Innovative approaches to communication are evolving rapidly, with AI playing a crucial role...",
        author: "Mike Rodriguez",
        date: "10 May, 2025",
        imageUrl: "/hero.svg"
    },
    {
        id: 7,
        title: "Future of Digital Communication in the Age of AI",
        description: "Innovative approaches to communication are evolving rapidly, with AI playing a crucial role...",
        author: "Mike Rodriguez",
        date: "10 May, 2025",
        imageUrl: "/hero.svg"
    },
    {
        id: 8,
        title: "Future of Digital Communication in the Age of AI",
        description: "Innovative approaches to communication are evolving rapidly, with AI playing a crucial role...",
        author: "Mike Rodriguez",
        date: "10 May, 2025",
        imageUrl: "/hero.svg"
    },
];


const Page = () => {

const headingRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    // Heading animation
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    );

    // Cards animation with stagger effect
    gsap.fromTo(
      cardsRef.current,
      { 
        opacity: 0,
        y: 50,
        scale: 0.9
      },
      { 
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        delay: 0.5
      }
    );
  }, []);

    return (
      <div className="min-h-screen bg-dark w-full">
        {/* <Navbar /> */}
          <div className="flex p-10 text-center md:p-20 md:gap-y-20 gap-y-10 items-center text-white flex-col">
            <h1 
              ref={headingRef}
              className="text-3xl md:text-5xl opacity-0"
            >
              Welcome to World of Blogs
            </h1>
            
            <div className="grid gap-y-10 md:grid-cols-3 md:gap-x-10">
              {blogPosts.map((post, index) => (
                <div 
                  key={index}
                  ref={el => cardsRef.current[index] = el}
                  className="opacity-0"
                >
                  <div className="rounded-3xl group flex flex-col px-6 md:px-0 shadow-md mx-auto transition-all duration-300 hover:shadow-xl">
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
                        className="text-white text-lg text-start font-bold line-clamp-2 hover:text-gray-300 transition-colors"
                      >
                        {post.title}
                      </a>
    
                      <p className="text-gray-400 text-start text-sm mt-2 line-clamp-3">
                        {post.description.length > 150 
                          ? post.description.substring(0, 150) + '...' 
                          : post.description}
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
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    };
    
    export default Page;