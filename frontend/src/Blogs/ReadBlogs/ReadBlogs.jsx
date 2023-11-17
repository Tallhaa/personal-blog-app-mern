import { useEffect, useState } from 'react';
import BlogCard from "./BlogCard/BlogCard"
import "./ReadBlogs.css"

const ReadBlogs = () => {
  const [blogs,setBlogs] = useState([])
  const AllBlogsList = async() =>{
    try{
      let blogList = await fetch(`http://localhost:5000/all-blogs`);
      if(blogList.ok){
        blogList = await blogList.json()
        setBlogs(blogList)
        console.log('all blogs fetched',blogList);
      }
      else{
        console.log('Failed to fetch all blogs');
      }
      
      }catch(err){
          console.log("failed to fetch all blogs",err);
      }      
  }

  
  useEffect(()=>{
    AllBlogsList()
  },[])
  return (
    <div className='blog-list'>
      <div className="blog-container">
      {
        blogs?.map((blog)=>
        <BlogCard key={blog._id} blog={blog}/>
        )
      }

      </div>  
      <div className="category-container">
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

export default ReadBlogs