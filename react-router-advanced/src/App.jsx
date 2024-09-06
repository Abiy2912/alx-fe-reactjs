import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import BlogPost from './components/BlogPost';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/*" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/post/:postId" element={<BlogPost />} />
        <Route path="/blog/:id" element={<BlogPost />} /> {/* Added dynamic route */}
      </Routes>
    </Router>
  );
}

export default App;
