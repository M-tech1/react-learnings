import { useEffect, useState } from "react";
import { User } from "./type";
import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import AddUser from "./addUser";
import EditUser from "./editUser";
import Modal from "./modal";
const url = "https://jsonplaceholder.typicode.com/users";

const initialUser: User = {
  id: 1,
  name: "John Doe",
  email: "john@example.com",
};
const UserList = () => {
  const [user, setUser] = useState<User[]>([]);
  const [newUser, setNewUser] = useState<User>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [users, setUsers] = useState<User>(initialUser);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    axios
      .get(url)
      .then((res) => setUser(res.data))
      .catch((error) => console.error(error));
    toast.success("Data fetched");
  }, []);

  const addUser = (user: User) => {
    // [...newUser, user];
    console.log(newUser);
  };

  //   ************ Deleting Function ***************
  const Delete = async (id: number) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      setUser(user.filter((user) => user.id !== id));
      toast.success("deleted");
    } catch (e) {
      console.error(e);
      toast.error(e);
    }
  };

  function HandleEdit(id: any, name: string, email: string) {
    setIsModalOpen(true);
    setUsers(id);
    console.log("id:", id + " " + "email", email, +" ", "name", name);
    setName(name);
    setEmail(email);
  }

  return (
    <>
      <div className="justify-items-center p-10">
        <AddUser addUser={addUser} />
        <h2 className="font-bold text-2xl mt-10">list of user:</h2>
        <ol>
          {user.map((user, index) => (
            <li className="flex flex-row gap-5" key={index}>
              <p>
                {user.name} {" :"}
              </p>{" "}
              <p className="hover:cursor-pointer">{user.email}</p>
              <button
                className="text-blue-300 "
                onClick={() => HandleEdit(user.id, user.name, user.email)}
              >
                Edit
              </button>
              <button className="text-red-400 " onClick={() => Delete(user.id)}>
                Delete
              </button>
            </li>
          ))}
        </ol>
      </div>
      {/* <Modal open={isModalOpen} close={() => setIsModalOpen(false)}>
        <EditUser
          user={users}
          UpdateUser={(updatedUser) => {
            // setUsers(updatedUser);
            // setIsModalOpen(false);
          }}
        />
      </Modal> */}
    </>
  );
};

export default UserList;
