import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PlanPage from './pages/PlanPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import PlansPage from './pages/PlansPage.jsx';
import ProfilePage from './pages/Dashboard/ProfilePage';
import OrdersPage from './pages/Dashboard/OrdersPage';
import NotFoundPage from './pages/NotFoundPage';
import ChangePasswordPage from './pages/dashboard/ChangePasswordPage';
import PaymentsPage from './pages/dashboard/PaymentsPage';
import SuccessPage from './pages/SuccessPage';
import PackagePage from './pages/PackagePage';
import CheckoutPage from './pages/CheckoutPage';
import Protected from './components/Protected';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contacts" element={<ContactPage />} />
        <Route path="/plans" element={<PlansPage />} />
        <Route path="/plan/:id" element={<PlanPage />} />
        <Route path="/package/:id" element={<PackagePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/checkout"
          element={
            <Protected>
              <CheckoutPage />
            </Protected>
          }
        />
        <Route
          path="/success"
          element={
            <Protected>
              <SuccessPage />
            </Protected>
          }
        />

        {/* Dashboard */}
        <Route
          path="/dashboard/profile"
          element={
            <Protected>
              <ProfilePage />
            </Protected>
          }
        />
        <Route
          path="/dashboard/orders"
          element={
            <Protected>
              <OrdersPage />
            </Protected>
          }
        />
        <Route
          path="/dashboard/change_password"
          element={
            <Protected>
              <ChangePasswordPage />
            </Protected>
          }
        />
        <Route
          path="/dashboard/payments"
          element={
            <Protected>
              <PaymentsPage />
            </Protected>
          }
        />

        {/* Page Not Found! */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
