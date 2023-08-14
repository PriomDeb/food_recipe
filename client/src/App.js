import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { PageNotFound } from "./pages/PageNotFound";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./pages/user/Dashboard";
import PrivateRoute from "./components/Routes/Private";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import AdminRoute from "./components/Routes/AdminRoute";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import AddRecipe from "./pages/Admin/AddRecipe";
import Users from "./pages/Admin/Users";
import AddCategory from "./pages/Admin/AddCategory";
import Favorites from "./pages/user/Favorites";
import Profile from "./pages/user/Profile";
import Recipe from "./pages/Admin/Recipe";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />} />
          <Route path="user/favorites" element={<Favorites />} />
          <Route path="user/profile" element={<Profile />} />
        </Route>

        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/add-category" element={<AddCategory />} />
          <Route path="admin/add-recipe" element={<AddRecipe />} />
          <Route path="admin/users" element={<Users />} />
          <Route path="admin/recipes" element={<Recipe />} />
        </Route>

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </>
  );
}

export default App;
