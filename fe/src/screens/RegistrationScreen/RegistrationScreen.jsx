import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import useLogin from "../../hooks/useLogin";

const RegistrationScreen = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, login] = useLogin();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      await axios.post("http://localhost:8080/api/v1/users/register", {
        username,
        email,
        password,
      });

      login(e, { email, password });
    } catch (error) {
      console.error(error);
      setError(error.response.data.message);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="w-1/4 my-0 mx-auto flex flex-col text-center bg-slate-800 rounded"
      >
        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="text-slate-800"
        />
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="text-slate-800"
        />
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="text-slate-800"
        />
        <button type="submit">Sign up</button>
        {error && <p>{error}</p>}
      </form>
      <div>
        Go to <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default RegistrationScreen;
