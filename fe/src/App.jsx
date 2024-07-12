import { Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import Blogs from "./components/Blogs/Blogs";
import CreateBlog from "./components/CreateBlog/CreateBlog";
import BlogById from "./components/BlogById/BlogById";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";
import RegistrationScreen from "./screens/RegistrationScreen/RegistrationScreen";

const App = () => {
  return (
    <div className="app text-slate-100">
      <ErrorBoundary>
        <Routes>
          <Route element={<HomeScreen />}>
            <Route index element={<Blogs />} />
            <Route path="/create-blog" element={<CreateBlog />} />
            <Route path="/blog/:blogId" element={<BlogById />} />
          </Route>
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegistrationScreen />} />
        </Routes>
      </ErrorBoundary>
    </div>
  );
};

export default App;
