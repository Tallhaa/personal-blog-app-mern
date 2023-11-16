import './App.css'
import CreateBlog from './Blogs/CreateBlog/CreateBlog'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReadBlogs from './Blogs/ReadBlogs/ReadBlogs';
import NoPage from './Blogs/NoPage/NoPage';

function App() {

  return (
     <BrowserRouter>
      <Routes>
          <Route path="/" element={<ReadBlogs />} />
          <Route path="/add-blog" element={<CreateBlog />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
