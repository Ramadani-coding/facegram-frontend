import { useEffect, useState } from "react";
import axios from "axios";

const NavbarHome = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    setUsername(localStorage.getItem("username"));
  }, []);

  const handleLogout = async () => {
    try {
      await axios.get("http://127.0.0.1:8000/api/v1/auth/logout", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      localStorage.removeItem("token");
      localStorage.removeItem("username");
      window.location.href = "/";
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <nav className="fixed mx-auto w-full bg-white shadow-sm p-6">
      <div className="text-center">
        <div className="float-left">
          <span className="text-lg">Facegram</span>
        </div>
        <div className="float-right ">
          <span className="text-lg px-5">
            {username ? "@" + username : "loading..."}
          </span>
          <span
            className="text-lg cursor-pointer hover:text-red-400"
            onClick={handleLogout}
          >
            logout
          </span>
        </div>
      </div>
    </nav>
  );
};

export default NavbarHome;
