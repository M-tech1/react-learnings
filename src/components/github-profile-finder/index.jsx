import { useEffect, useState } from "react";
import "./styles.css";
import User from "./user";
export default function GithubProfileFinder() {
  const [username, setUsername] = useState("M-tech1");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  //   const url = "https://api.github.com/users/";

  async function fetchGithubUserData() {
    setLoading(true);
    // const response = await fetch(`url${username}`);
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();

    if (data) {
      setUserData(data);
      setLoading(false);
      setUsername("");
    }
    console.log(data);
  }

  function handleSubmit() {
    fetchGithubUserData();
    setUsername("");
  }

  useEffect(() => {
    fetchGithubUserData();
  }, []);

  if (loading) {
    <h1>Loading data....</h1>;
  }

  return (
    <>
      <div className="profile-container flex flex-col justify-self-center  ">
        <div className="input-wrapper mt-10">
          <input
            className=" border-solid border-2 mr-4 p-2"
            name="search-by-username"
            type="text"
            placeholder="search Githut username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button onClick={handleSubmit}>Search</button>
        </div>
        {userData !== null ? <User user={userData} /> : null}
      </div>
    </>
  );
}
