import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, login] = useLogin();

  const userCredentials = {
    email,
    password,
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <form
        onSubmit={(e) => login(e, userCredentials)}
        className="w-1/4 my-0 mx-auto flex flex-col text-center bg-slate-800 rounded"
      >
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
        <button type="submit">Sign in</button>
        {error && <p>{error}</p>}
      </form>
      <div>
        Don't have an account yet? Click <Link to="/register">here</Link> to
        sign up.
      </div>
    </div>
  );
};

export default LoginScreen;
