import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Error404 from "../pages/Error404";
import Layout from "../components/Layout/AppLayout";
import Community from "../pages/Community";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Routes inside Layout */}
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/community" element={<Community />} />
      </Route>

      {/* 404 page outside of layout (optional) */}
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default AppRoutes;
