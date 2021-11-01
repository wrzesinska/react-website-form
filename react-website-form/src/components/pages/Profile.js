import { useState } from "react";

function Profile() {
  const [data, setData] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("data");
    const initialValue = JSON.stringify(saved);
    return initialValue;
  });
  return <div>{data}</div>;
}

export default Profile;
