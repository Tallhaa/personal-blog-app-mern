import React, { useEffect, useState } from 'react'
import "./SingleBlog.css";
import {useParams } from 'react-router-dom';

const SingleBlog = () => {
    const [blog,setBlog] = useState({})
    let {id} = useParams();
    console.log(id);

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
    useEffect(()=>{
        singleBlogFunction()
    },[])
  return (
    <div className='single-blog-container'>
      <div className="single-blog-details">   
      <img className='card-img' src={`http://localhost:5000/images/${blog.image}`} alt="" />
      <h2>{blog.title}</h2>
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