"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

const Blog = () => {
  const [posts, setPosts] = useState([]);

  // Fetch data from Reddit API
  useEffect(() => {
    fetch('https://www.reddit.com/r/humanresources/top.json?limit=4')
      .then((response) => response.json())
      .then((data) => {
        console.log('Raw data:', data);
        // Map the data to extract necessary fields like title, author, and permalink
        const redditPosts = data.data.children.map((post) => ({
          title: post.data.title,
          author: post.data.author,
          permalink: post.data.permalink,
          url: `https://www.reddit.com${post.data.permalink}`,
        }));
        setPosts(redditPosts);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <section className="px-[10%] py-12 bg-gray-100">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Latest on Human Resources Management
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {posts.length > 0 ? (
          posts.map((post, index) => (
            <div
              key={index}
              className="bg-white p-6 border rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h3>
              <p className="text-sm text-gray-600 mb-4">Posted by {post.author}</p>
              <Link
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition duration-300"
              >
                Read More
              </Link>
            </div>
          ))
        ) : (
          <p>Loading posts...</p>
        )}
      </div>
    </section>
  );
};

export default Blog;
