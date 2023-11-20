import React, { useEffect, useState } from 'react'
import "./SingleBlog.css";
import {Link, useNavigate, useParams } from 'react-router-dom';

const SingleBlog = () => {
    const [blog,setBlog] = useState({})
    let {id} = useParams();
    console.log(id);
    const Navigate = useNavigate()

    const singleBlogFunction=async()=>{
        try{
            let singleBlog = await fetch(`http://localhost:5000/blog/${id}`);
            singleBlog = await singleBlog.json()
            console.log(singleBlog);
            setBlog(singleBlog)
            // if(singleBlog.ok){
                
            // }
        }catch (error){
            console.log({message: "failed to fetch single blog", error:error});
        }
    }
    const handleDeleteBlog= async(id)=>{
      try {
        console.log(id);
          let deleteSingleBlog = await fetch(`http://localhost:5000/del/${id}`,{
            method:"Delete"
          });
          deleteSingleBlog = await deleteSingleBlog.json();
          console.log(deleteSingleBlog);
          if(deleteSingleBlog){
            Navigate("/");
          }
          
    } catch (error) {
        console.log({ message: "failed to fetch single blog", error: error });
    }
    }
    useEffect(()=>{
        singleBlogFunction()
    },[])
  return (
    <div className='single-blog-container'>
      <div className="single-blog-details">   
      <h2>{blog.title}</h2>
      <img className='single-blog-img' src={blog.image ?`http://localhost:5000/images/${blog.image}` : ''} alt="" />
      <Link to={`/update-blog/${blog._id}`}>
      <button>Edit</button>
      </Link>
      <button onClick={()=> handleDeleteBlog(blog._id)}>Delete</button>
      <p>{ blog.description}</p>

      </div>  
      <div className="single-blog-categories">
        <ul>
          <li>category1</li>
          <li>category1</li>
          <li>category2</li>
          <li>category3</li>
          <li>category4</li> 
        </ul>
      </div>

    </div>
  )
}

export default SingleBlog