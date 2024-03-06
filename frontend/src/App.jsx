import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutAdmin from "./layouts/LayoutAdmin";
// import LayoutAuth from "./layouts/LayoutAuth";
// import Login from "./pages/auth/Login";
// import Register from "./pages/auth/Register";
// import ForgetPassword from "./pages/auth/ForgetPassword";
import Home from "./pages/admin/Home/Home";

// import Tickets from "./pages/admin/Tickets";
import Error404 from "./pages/Error404";
import Inventario from "./pages/admin/Inventario/Inventario";
import Categorias from "./pages/admin/Inventario/Categorias";
import Compras from "./pages/admin/Compras/Compras";
import Add from "./pages/admin/Inventario/Add";
import AddCategories from "./pages/admin/Inventario/AddCategories";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route
          path="/login"
          element={
            <LayoutAuth>
              <Login />
            </LayoutAuth>
          }
        />
        <Route
          path="/registro"
          element={
            <LayoutAuth>
              <Register />
            </LayoutAuth>
          }
        />
        <Route
          path="/olvide-password"
          element={
            <LayoutAuth>
              <ForgetPassword />
            </LayoutAuth>
          }
        /> */}

        <Route path="/" element={<LayoutAdmin />}>
          <Route path="dashboard" element={<Home />} />
          <Route path="inventario" element={<Inventario />} />

          <Route path="compras" element={<Compras />} />
          <Route path="inventario/add" element={<Add />} />
          {/* <Route path="tickets" element={<Tickets />} /> */}

          <Route path="categorias" element={<Categorias />} />
          <Route path="categorias/add" element={<AddCategories />} />
        </Route>

        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
