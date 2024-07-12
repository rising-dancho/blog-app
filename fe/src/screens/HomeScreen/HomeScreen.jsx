import { useContext, useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import MyContext from "../../MyContext";
import Header from "../../components/Header/Header";
import Chat from "../../components/Chat/Chat";

const HomeScreen = () => {
  const { isLoggedIn } = useContext(MyContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) navigate("/login");
  });
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <aside>
        <Chat />
      </aside>
    </>
  );
};

export default HomeScreen;
