import { Route, Routes } from "react-router-dom";
import AuthProvider from "./Components/AuthContext";
import AllPostsProvider from "./Components/AllPostsContext";
import Layout from "./Layout";
import HomePage from "./pages/HomePage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import BlogPost from "./pages/BlogPost";
import CreatePost from "./pages/CreatePost";
import NotFound from "./pages/NotFound";
import LogOut from "./pages/LogOut";
import UpdatePost from "./pages/UpdatePost";
import ProfilePage from "./pages/ProfilePage";
import EditProfile from "./pages/EditProfile";
import DeleteUser from "./pages/DeleteUser";

function App() {
  return (
    <AllPostsProvider>
      <AuthProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/logout" element={<LogOut />} />
            <Route path="/posts/:id" element={<BlogPost />} />
            <Route path="/posts/create" element={<CreatePost />} />
            <Route path="/posts/update/:id" element={<UpdatePost />} />
            <Route path="/profile/:id" element={<ProfilePage />} />
            {/* tuteż zrobić id może wtedy z parametrow wezmiemy id w requescie a nie z kontekstu */}
            <Route path="/profile/edit" element={<EditProfile />} />
            <Route path="/profile/delete/:id" element={<DeleteUser />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </AllPostsProvider>
  );
}

export default App;
