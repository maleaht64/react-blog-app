import './App.css';
import Header from './components/Header';
import BlogPost from './components/BlogPost';
import Footer from './components/Footer';
import posts from './data/posts';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="App-main">
        {posts.map(post => (
          <BlogPost key={post.id} post={post} />
        ))}
      </main>
      <Footer />
    </div>
  );
}

export default App;
