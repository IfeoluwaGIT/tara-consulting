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
    <section className="px-6 md:px-[10%] py-12 bg-header-peach text-text-color">
    <h2 className="text-2xl md:text-3xl font-bold text-text-color mb-8 text-center">
      Latest on Human Resources Management
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
      {posts.length > 0 ? (
        posts.map((post, index) => (
          <div
            key={index}
            className="bg-slate-100 p-6 md:p-12 rounded-lg shadow-lg transition-transform transform hover:scale-105 border border-border-color"
          >
            <h3 className="text-lg md:text-xl font-semibold mb-2">{post.title}</h3>
            <p className="text-sm text-gray-600 mb-4">Posted by {post.author}</p>
            <Link
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-text-color text-white font-semibold rounded hover:bg-button-hover transition duration-300"
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
