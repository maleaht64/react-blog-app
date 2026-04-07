import {useState, useEffect} from "react";
import axios from "axios";

function Comments({postId}) {
    const [comments, setComments] = useState([]);
    const [name, setName] = useState('');
    const [commentText, setCommentText] = useState('');

    useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((response) => {
        setComments(response.data);
      })
      .catch((error) => {
        console.error("Error fetching comments:", error);
      });
    }, [postId]);

            
    const postComment = () => {
        if (!name.trim() || !commentText.trim()) {
            return;
        }
        const newComment = {
                name: name,
                body: commentText
        };

        axios
            .post( `https://jsonplaceholder.typicode.com/posts/${postId}/comments`, newComment )
            .then((response) => {
                setComments([...comments, response.data]);
                setName('');
                setCommentText('');
            })
            .catch((error) => {
                console.error('Error posting comment:', error);
            });
        };


    return (
        <div className="comments">
            <h3>Comments</h3>
    
                <input
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <textarea
                    placeholder="Write a comment..."
                    rows="4"
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                ></textarea>
                <button onClick={postComment}>Submit</button>

            <div className="comment-list">
                {comments.length === 0 ? (
                    <p>No comments yet. Be the first to comment!</p>
                ) : (
                
                comments.map((comment) => (
                    <div key={comment.id} className="comment">
                        <p><strong>{comment.name}</strong></p>
                        <p>{comment.body}</p>
                    </div>
                ))
            )}
            </div>
        </div>

        
    );
}

export default Comments;