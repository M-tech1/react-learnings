import { useEffect, useState } from "react";
import Suggestion from "./suggestion";

export default function SearchAutoComplete() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [users, setUsers] = useState([]);
  const [searchParams, setSearchParams] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState("");

  async function fetchListofUsers() {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();

      if (data && data.users && data.users.length) {
        setUsers(data.users.map((userItem) => userItem.firstName));
        setLoading(false);
        setError(null);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
      setError(error);
    }
  }

  useEffect(() => {
    fetchListofUsers();
  }, []);

  function handleChange(event) {
    const query = event.target.value.toLowerCase();
    setSearchParams(query);
    if (query.length > 1) {
      const filteredData = users.length
        ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
        : [];
      setFilteredUsers(filteredData);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  }

  function handleClick(event) {
    console.log(event.target);
    setSearchParams(event.target.innerText);
    setFilteredUsers([]);
  }

  // console.log("data", users, filteredUsers);

  return (
    <div className="search-autocomplete flex flex-col justify-self-center text-center mt-20 ">
      {/* <div>{filteredUsers}</div> */}
      {loading ? (
        <h1>Loading data please wait...</h1>
      ) : (
        <input
          value={searchParams}
          name="search-users"
          placeholder="search users here..."
          onChange={handleChange}
          // onChange={(event) => {
          //   handleChange(event.target.value);
          // }}
        />
      )}
      {showDropdown && (
        <Suggestion data={filteredUsers} handleClick={handleClick} />
      )}
      <li className=" ">{filteredUsers}</li>
      {/* <Suggestion data={filteredUsers} /> */}
    </div>
  );
}
