import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import CarRent from "./pages/CarRent/CarRent";
import CarRentDetails from "./pages/CarRentDetails/CarRentDetails";
import BillingPage from "./pages/BillingPage/BillingPage";
import Layout from "./layout/Layout";
import DashboardLayout from "./layout/DashboardLayout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/carRent"
          element={
            <Layout>
              <CarRent />
            </Layout>
          }
        />
        <Route
          path="/carRent/:carId"
          element={
            <Layout>
              <CarRentDetails />
            </Layout>
          }
        />
        <Route
          path="/carRent/:carId/billing"
          element={
            <Layout>
              <BillingPage />
            </Layout>
          }
        />
        <Route path="/dashboard" element={<DashboardLayout />} />
      </Routes>
    </div>
  );
}

export default App;
