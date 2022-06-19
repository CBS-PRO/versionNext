import { useAuth } from "../context/auth-context";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const logoutHandler = () => {
    auth.signout(() => {
      navigate("/login");
    });
  };

  return (
    <div className="flex" style={{ float: "right" }}>
      <button
        onClick={logoutHandler}
        className="bg-white-500 rounded-md border border-black py-1 px-4 text-lg font-medium text-black hover:bg-gray-100"
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
