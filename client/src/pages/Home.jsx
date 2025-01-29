import { Link } from 'react-router-dom';
import CallToAction from '../components/CallToAction';
import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/post/getPosts');
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);
  return (
    <div>
      <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto '>
        <h1 className='text-3xl font-bold lg:text-6xl'>Welcome to my Project's Blog</h1>
        <p className='text-gray-500 text-xs sm:text-sm'>
        This blog is a space where I share my journey as a developer, showcasing the projects I've worked on, the challenges I've faced, and the lessons I've learned along the way. Whether you're here for inspiration, project walkthroughs, or to learn more about the tech I use, I hope you find something valuable. Feel free to explore, and stay tuned for regular updates on my latest endeavors!        </p>
        <Link
          to='/search'
          className='text-xs sm:text-sm text-[#B82132] font-bold hover:underline'
        >
          View all posts
        </Link>
      </div>
      <div className='p-3 bg-[#F6DED8] dark:bg-slate-700'>
        <CallToAction />
      </div>

      <div className='max-w-full mx-auto p-3 flex flex-col gap-8 py-7'>
        {posts && posts.length > 0 && (
          <div className='flex flex-col gap-6'>
            <h2 className='text-2xl font-semibold text-center'>Recent Posts</h2>
            <div className=' grid grid-cols-2 sm:grid-cols-3 gap-4'>
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={'/search'}
              className='text-lg text-[#A294F9] hover:text-[#C5BAFF] underline text-center'
            >
              View all posts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
