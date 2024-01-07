"use client"
import { AiTwotoneDelete } from "react-icons/ai";
import { useRouter } from "next/navigation";

const RemoveBtn = ({id}) => {

const router = useRouter();

const removeTopic=async()=>{
  const confirmed = confirm('Are you sure?')

  if(confirmed){
    const res = await fetch (`http://localhost:3000/api/topics/${id}`,{
      method:"DELETE",
    })

    if(res.ok){
      router.refresh();
  }

  }
}

  return (
    <button type='button' onClick={removeTopic}>
     <AiTwotoneDelete size={28} className='text-red-600'/>
    </button>
  )
}

export default RemoveBtn
