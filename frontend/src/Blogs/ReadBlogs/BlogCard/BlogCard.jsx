import React from 'react';
import "./BlogCard.css"
import {
  Link
} from "react-router-dom";

const BlogCard = (props) => {
  const { blog} = props;
  return (
    <div className='blog-card'>
       <Link to={`/blog/${blog._id}`}><img className='card-img' src={blog.image? `http://localhost:5000/images/${blog.image}` : ""} alt="" />
</Link>
      <h2>{blog.title}</h2>
    

      <p>{ blog.description.slice(0,100)+"..."}</p>
      <Link to={`/blog/${blog._id}`}><button>Read More</button></Link>

      
    </div>
  )
}

export default BlogCard