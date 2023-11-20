import {useEffect, useState} from 'react';
import "./UpdateBlog.css"
import { useNavigate, useParams } from 'react-router-dom';

const UpdateBlog = () => {
    let {id} = useParams();
    console.log(id);
    const Navigate = useNavigate()
    const [title, setTitle] = useState("");

    const [image,setImage] = useState(null)
    const [description,setDescription] = useState("")
    const singleBlogFunction=async()=>{
        try{
            let singleBlog = await fetch(`http://localhost:5000/blog/${id}`);
            singleBlog = await singleBlog.json()
            console.log(singleBlog);
            setImage(singleBlog.image)
            setTitle(singleBlog.title)
            setDescription(singleBlog.description)
            // if(singleBlog.ok){
                
            // }
        }catch (error){
            console.log({message: "failed to fetch single blog", error:error});
        }
    }

    useEffect(()=>{
singleBlogFunction()
    },[])


    const handleUpdateBlog = async(e)=>{
        e.preventDefault()
        if(!title || !description){
          alert("Enter all field")
        }
     else{
 
        console.log(title,description);

 
         let formData = new FormData();
         formData.append("title",title)
         formData.append("description",description)
 
         try{
         let updateblog = await fetch(`http://localhost:5000/update-blog/${id}`,{
            method:"Put",
            body:formData
         })

           updateblog = await updateblog.json()
           console.log(updateblog);
           console.log('blog successfully created');
          
         if(updateblog){
            console.log('Blog to update blog');
            console.log(updateblog);
            // Navigate("/")
         }
         else{
           console.log('Failed to update blog');
         }
         
         }catch(err){
             console.log(err);
         }      
     }
    

    }
  return (
    <>
    <form onSubmit={handleUpdateBlog}>
        <div className="updateblog-container">
        <div style={{width:"50%", margin:"0 auto", overflow:"hidden", height:"50%"}}>
        <img className='' style={{width:"100%", height:"auto", }} src={image ?`http://localhost:5000/images/${image}` : ''} alt="" />

        </div>

                <input type="text"  placeholder="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
    
           <textarea name="" id="" cols="30" rows="10" style={{marginBottom:"10px"}} value={description}
           onChange={(e) => setDescription(e.target.value)}
           ></textarea>
           <button type="submit">Update Blog</button>
           
        </div>
        </form>
    </>
  )
}

export default UpdateBlog