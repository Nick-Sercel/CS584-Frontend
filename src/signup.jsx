import { useNavigate } from "react-router-dom";
import { createAccount, verifyLogin } from "../networking/auth";
import { setLoginSession } from "./encryption";

export const Signup = ({ setLoggedIn }) => {
  const navigate = useNavigate();

  const action = async () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const res = await createAccount(username, password);
    if (res.success === true) {
      setLoginSession(username, password);
      setLoggedIn(username);
      navigate("/subjects");
    } else {
      alert(res.message);
    }
  };

  return (
    <div>
      <h1>Signup</h1>
      <form>
        <div>
          <label htmlFor="username">Username</label>
          <input id="username"></input>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input id="password" type="password"></input>
        </div>
        <input
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            action();
          }}
        />
      </form>
    </div>
  );
};

export const Login = ({ setLoggedIn }) => {
  const navigate = useNavigate();

  const action = async () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const res = await verifyLogin(username, password);
    if (res.success === true) {
      setLoginSession(username, password);
      setLoggedIn(username);
      navigate("/");
    } else {
      alert(res.message);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form>
        <div>
          <label htmlFor="username">Username</label>
          <input id="username"></input>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input id="password" type="password"></input>
        </div>
        <input
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            action();
          }}
        />
      </form>
    </div>
  );
};
