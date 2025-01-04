import React, { useEffect, useState } from "react";
import axios from "axios";
const Comments = () => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/comments")
      .then((response) => {
        setComments(response.data);
        console.log(comments);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {comments.map((comment) => (
        <div className="flex items-center p-5" key={comment.id}>
          <div className="bg-slate-200 rounded-lg p-5">
            <div className="bg-black w-52 h-52"></div>
            <h2 className="font-semibold">ProductId: {comment.productId}</h2>
            <p>Text: {comment.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comments;
