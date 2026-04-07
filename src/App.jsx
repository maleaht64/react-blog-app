import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import BlogPostsPage from './pages/BlogPostsPage';
import IndividualPostPage from './pages/IndividualPostPage';
import ContactPage from './pages/ContactPage';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        
          <Routes>
            <Route path="/" element={<BlogPostsPage />} />
            <Route path="/posts" element={<BlogPostsPage />} />
            <Route path="/posts/:postId" element={<IndividualPostPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
