import { useContext } from "react";
import { ChannelContext, UserContext } from "../src/App";
function Child() {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);
  return (
    <div>
      {user} - {channel}
    </div>
  );
}

export default Child;
