import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <main className="landing-page">
      <div className="landing-content">
        <h1>Welcome to Bloom Blog</h1>
        <p>
          Explore posts, read full stories, and join the conversation in a soft,
          creative blog experience built with React.
        </p>

        <div className="landing-buttons">
          <Link to="/login" className="landing-btn">
            Login
          </Link>
          <Link to="/posts" className="landing-btn secondary-btn">
            Explore Blog
          </Link>
        </div>
      </div>
    </main>
  );
}

export default LandingPage;