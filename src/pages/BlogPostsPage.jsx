import { useState, useEffect } from 'react';
import BlogPost from '../components/BlogPost';
import axios from 'axios';

function BlogPostsPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setPosts(response.data.slice(0, 10));
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, []);


  return (
    <main className="page">
        <h2>Blog Posts</h2>
    <div className = "posts-grid">
      {posts.map((post) => (
        <BlogPost key={post.id} post={post} />
      ))}
    </div>
    </main>
  );
}

export default BlogPostsPage;