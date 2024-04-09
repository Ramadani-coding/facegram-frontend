import axios from "axios";
import { useEffect, useState } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  const fetchPots = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/v1/posts", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setPosts(response.data.posts.data);
      console.log(response.data.posts.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPots();
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      {Array.isArray(posts) && posts.length > 0 ? (
        posts.map((post, index) => {
          return (
            <div key={index}>
              <h3 className="font-semibold text-lg mb-2">
                {post.user.username}
              </h3>
              <p className="text-gray-600 text-sm mb-4">5 days ago</p>
              <div className="overflow-auto flex">
                {post.post_attachments.map((gambar, index) => {
                  return (
                    <div key={index}>
                      <img
                        src={`http://127.0.0.1:8000/${gambar.storage_path}`}
                        alt="Landscape"
                        className="w-full h-auto rounded-lg mb-4"
                      />
                    </div>
                  );
                })}
              </div>
              <p>{post.caption}</p>
            </div>
          );
        })
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Posts;
