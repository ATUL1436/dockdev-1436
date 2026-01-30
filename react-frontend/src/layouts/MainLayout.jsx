import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import "./MainLayout.css";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Sidebar />

      <div className="main-content">
        {children}
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
