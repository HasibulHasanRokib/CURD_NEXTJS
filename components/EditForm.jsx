"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const EditForm = ({id,title,description}) => {

const [newTitle,setNewTitle]= useState(title)
const [newDescription,setNewDescription]= useState(description)

const router = useRouter() 

const handleUpdate=async(e)=>{
e.preventDefault();
try {
  const res = await fetch (`http://localhost:3000/api/topics/${id}`,{
  method:"PUT",
  headers:{"Content-Type":"application/json"},
  body:JSON.stringify({newTitle,newDescription})
  })
  if(res.ok){
  router.push('/');
  router.refresh()
  }else{
    throw new Error("Topic not update!")
  }
} catch (error) {
  console.log(error.message)
}
}

  return (
    <form className='flex flex-col gap-3 mt-4' onSubmit={handleUpdate}>
      <input type="text" name="title" id="title" onChange={(e)=>setNewTitle(e.target.value)} value={newTitle} placeholder='Enter title' className='border w-full px-5 py-2 rounded-md' />
      <input type="text" name="description" id="description" onChange={(e)=>setNewDescription(e.target.value)} value={newDescription} placeholder='Enter description' className='border w-full px-5 py-2 rounded-md' />
       <button type="submit" className='px-4 py-2 bg-green-600 text-white font-semibold rounded-md'>Update</button>
    </form>
  )
}

export default EditForm
