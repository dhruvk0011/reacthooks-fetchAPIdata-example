import { useEffect, useReducer, useState } from "react";
import axios from "axios";

const initialState = {
  loading: true,
  error: "",
  post: {},
};

const reducer = (curState, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        post: action.payload,
        error: "",
      };
    case "FETCH_ERROR":
      return {
        loading: false,
        post: {},
        error: `Something went wrong ${action.payload}`,
      };
    default:
      return curState;
  }
};
const FetchDataUsingReducer = () => {
  const [idfrombutton, setIdfrombutton] = useState(1);
  const [id, setId] = useState(1);
  // two cases for reducer
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idfrombutton}`)
      .then((res) => {
        console.log(res);
        dispatch({ type: "FETCH_SUCCESS", payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: "FETCH_ERROR", payload: err });
      });
  }, [idfrombutton]);

  const handleClick = () => setIdfrombutton(id);

  return (
    <div className='App'>
      <input type='number' value={id} onChange={(e) => setId(e.target.value)} />
      <button type='button' onClick={handleClick}>
        Fetch Post
      </button>
      <div>
        {state.loading ? (
          "Loading"
        ) : (
          <div>
            <p>user ID - {state.post.userId}</p>
            <p>Post content - {state.post.title}</p>
          </div>
        )}
        {state.error ? state.error : null}
      </div>
    </div>
  );
};

export default FetchDataUsingReducer;
