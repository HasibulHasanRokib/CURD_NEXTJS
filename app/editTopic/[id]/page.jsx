import EditForm from "@/components/EditForm";

const editTopic= async(id)=>{
  try {
    const res = await fetch (`http://localhost:3000/api/topics/${id}`,{
      cache:"no-store",
    })
    if(!res.ok){
      throw new Error("Topic not found!")
    }
    return res.json();
  } catch (error) {
    console.log(error.message)
  }
}

const EditTopic = async ({params}) => {

  const {id} = params;

  const {topic} = await editTopic(id)
  const{title,description} = topic;

  return (
    <div>
     <EditForm id={id} title={title} description={description}/>
    </div>
  )
}

export default EditTopic
