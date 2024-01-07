"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const AddTopic = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!title || !description){
      return alert('Fill the required fields.')
    }
    try {
      const res = await fetch('http://localhost:3000/api/topics',{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({title,description})
      })
    
      if(res.ok){
       router.push('/');
       router.refresh()
      }else{
        throw new Error("Failed to create a topic.")
      }
    } catch (error) {
      console.log(error.message)
    }
  };

  return (
    <form className="flex flex-col gap-3 mt-4" onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        name="title"
        id="title"
        placeholder="Enter title"
        className="border w-full px-5 py-2 rounded-md"
      />
      <input
        type="text"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        name="description"
        id="description"
        placeholder="Enter description"
        className="border w-full px-5 py-2 rounded-md"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-green-600 text-white font-semibold rounded-md"
      >
        Submit
      </button>
    </form>
  );
};

export default AddTopic;
