import BlogCard from "../components/BlogCard";

export const blogPosts = [
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

const LatestBlogs = () => {
  return (
    <section className="bg-dark py-10 md:py-20">
      <div className="container mx-auto max-w-screen-xl">
        <div className="text-center mb-10 md:mb-20">
          <h2 className="text-white text-2xl md:text-5xl font-semibold mb-4">
            Latest Blogs & News
          </h2>
          <p className="max-w-2xl mx-auto text-base md:text-lg font-medium text-gray-300">
            Our AI writing tool is designed to empower you with exceptional
            writing capabilities, making the writing process more efficient,
            accurate, and enjoyable.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestBlogs;

