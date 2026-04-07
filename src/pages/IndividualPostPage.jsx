import {useParams} from "react-router-dom";
import {useState, useEffect} from "react";
import Comments from "../components/Comments";
import axios from "axios";

function IndividualPostPage() {
    const { postId } = useParams();
    const [post, setPost] = useState(null);
    const [user, setUser] = useState(null);

     useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => {
        setPost(response.data);

        // get user AFTER post loads
        return axios.get(
          `https://jsonplaceholder.typicode.com/users/${response.data.userId}`
        );
      })
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    }, [postId]);


    if (!post) {
        return (
            <main className="page">
                <h2>Loading Post...</h2>
            </main>
        );
    }

    return (
        <main className="page">
            <div className="full-post">
                <h1>{post.title}</h1>
                <p>{post.body}</p>

                {user && (
                    <div className="author-info">
                        <h3>About the Author</h3>
                        <p><strong>Author:</strong> {user.name}</p>
                        <p><strong>Email:</strong> {user.email}</p>
                    </div>
                )}

                <Comments postId={postId} />
            </div>
        </main>
    );
}

export default IndividualPostPage;