import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './component/Header';
import HeroSection from './component/Hero';
import Categories from './component/Categories';
import Footer from './component/Footer';
import SellItemSection from './component/SellItem';
import CampusCartBrowse from './component/Browse';
import CampusCartWishlist from './component/WishList';
import CampusCartCheckout from './component/Cart';
import UserProfile from './component/User';
import LoginPage from "./component/lOGIN.JSX";
import ProtectedRoute from "./component/ProtectedRoute";
import SignupPage from "./component/SIGNUP.JSX";

function App() {
  return (
    <Router>
      <Header /> {/* Navbar will stay on top */}
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={
          <>
            <HeroSection />
            <Categories />
            <Footer />
          </>
        } />

        {/* Protected Routes */}
        <Route 
          path="/sell-item" 
          element={
            <ProtectedRoute>
              <SellItemSection />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/wishlist" 
          element={
            <ProtectedRoute>
              <CampusCartWishlist />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/checkout" 
          element={
            <ProtectedRoute>
              <CampusCartCheckout />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/profile" 
          element={
            <ProtectedRoute>
              <UserProfile />
            </ProtectedRoute>
          } 
        />

        {/* Public Routes */}
        <Route path="/browse" element={<CampusCartBrowse />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

      </Routes>
    </Router>
  )
}

export default App;
