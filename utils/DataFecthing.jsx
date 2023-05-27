import axios from "axios";
import { useState, useEffect } from "react";

const DataFetching = () => {
  const [idfrombutton, setIdfrombutton] = useState(1);
  const [post, setPost] = useState([]);
  const [id, setId] = useState(1);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idfrombutton}`)
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((err) => console.log(err));
  }, [idfrombutton]);

  const handleClick = () => setIdfrombutton(id);
  return (
    <div>
      <input type='number' value={id} onChange={(e) => setId(e.target.value)} />
      <button type='button' onClick={handleClick}>
        Fetch Post
      </button>
      <p>{post.title}</p>
    </div>
  );
};

export default DataFetching;
