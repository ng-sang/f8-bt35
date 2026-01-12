import { Routes, Route } from "react-router-dom";

// Layouts
import MainLayout from "./layouts/MainLayout";
import UserLayout from "./layouts/UserLayout";

// Middlewares
import AuthMiddlewares from "./middlewares/AuthMiddlewares";
import RoleMiddlewares from "./middlewares/RoleMiddlewares";

// Pages - Public
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Contac from "./pages/Contac";
import ProductDetail from "./pages/ProductDetail";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

// Pages - User (Private)
import Dashboard from "./pages/Users/Dashboard";
import Sale from "./pages/Users/Sale";
import CreateOrder from "./pages/Users/CreateOrder";

export default function App() {
  return (
    <Routes>
      {/* ================= LAYOUT 1: DÀNH CHO KHÁCH (PUBLIC) ================= */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products">
          <Route index element={<Products />} />
          <Route path=":id" element={<ProductDetail />} />
        </Route>
        <Route path="contac" element={<Contac />} />
        <Route path="login" element={<Login />} />
      </Route>

      {/* ================= LAYOUT 2: DÀNH CHO USER (PRIVATE) ================= */}
      {/* Bọc AuthMiddlewares ở ngoài cùng để bảo vệ toàn bộ khu vực /users */}
      <Route element={<AuthMiddlewares />}>
        <Route path="/users" element={<UserLayout />}>
          {/* 
              - Truy cập vào /users sẽ hiện Dashboard (nhờ index)
              - Layout lúc này là UserLayout 
          */}

          <Route path="order/:productId" element={<CreateOrder />} />
          <Route index element={<Dashboard />} />

          {/* Nhóm con cần kiểm tra quyền (Role) trong UserLayout */}
          <Route element={<RoleMiddlewares />}>
            <Route path="sales" element={<Sale />} />
            {/* Thêm các trang admin/sales khác ở đây */}
          </Route>
        </Route>
      </Route>

      {/* Trang lỗi 404 - Thường không nằm trong layout nào để thông báo rõ ràng */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
