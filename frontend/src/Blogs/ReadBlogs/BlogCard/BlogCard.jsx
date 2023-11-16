import React from 'react';
import "./BlogCard.css"

const BlogCard = ({blog}) => {
  return (
    <div className='blog-card'>
      <img className='card-img' src={`http://localhost:5000/images/${blog.image}`} alt="" />
      <h2>{blog.title}</h2>
      <p>{blog.description}</p>
    </div>
  )
}

export default BlogCard