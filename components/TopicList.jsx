import RemoveBtn from "./RemoveBtn";
import Link from "next/link";
import { FaEdit } from "react-icons/fa";

const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics.");
    }
    return res.json();
  } catch (error) {
    console.log(error.message);
  }
};

const TopicList = async () => {
  const { topics } = await getTopics();

  return (
    <>
      {topics && topics.length > 0 ? (
        topics.map((topic) => {
          return (
            <div
              className="flex justify-between items-start border px-4 py-2 my-4 rounded-md shadow-sm"
              key={topic._id}
            >
              <div className="flex flex-col gap-2">
                <h2 className="font-bold text-xl capitalize">{topic.title}</h2>
                <p className="text-sm">{topic.description}</p>
              </div>
              <div className="flex gap-3">
                <RemoveBtn id={topic._id}/>
                <Link href={`/editTopic/${topic._id}`}>
                  <FaEdit size={25} className="text-blue-800" />
                </Link>
              </div>
            </div>
          );
        })
      ) : (
        <p>No topics added.</p>
      )}
    </>
  );
};

export default TopicList;
