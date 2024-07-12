import { useContext } from "react";
import { Link } from "react-router-dom";
import MyContext from "../../MyContext";

const Header = () => {
  const { user, setIsLoggedIn } = useContext(MyContext);

  const logout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
  };

  return (
    <header className="flex justify-between p-2 bg-slate-900">
      <Link to="/">Hello {user.username}</Link>
      <Link to="/create-blog">Create Blog</Link>
      <button onClick={logout}>Sign out</button>
    </header>
  );
};

export default Header;
