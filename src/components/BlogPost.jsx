import {Link} from "react-router-dom";
import {useState, useEffect} from "react";

function BlogPost({post}) {
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    const savedLikes = localStorage.getItem(`likes-${post.id}`);
    if (savedLikes) {
      setLikes(Number(savedLikes));
    }
  }, [post.id]);

  const handleLike = () => {
    const newLikes = likes + 1;
    setLikes(newLikes);
    localStorage.setItem(`likes-${post.id}`, newLikes);
  };

  return (
    <div className="blog-post">
      <h2>{post.title}</h2>
      <p>{post.body.slice(0,100)}...</p>

      <div className="post-actions">
        <button onClick={handleLike}>❤️ {likes}</button>

      <Link to={`/posts/${post.id}`}>Read More</Link>
    </div>
  </div>
  );
}

export default BlogPost;