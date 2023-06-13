import React, { useState } from "react";
import useDocumentTitleHook from "./useDocumentTitleHook";

const UseDocumentTitle = () => {
  const [count, setCount] = useState(0);
  useDocumentTitleHook(count);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count - {count}</button>
    </div>
  );
};

export default UseDocumentTitle;
