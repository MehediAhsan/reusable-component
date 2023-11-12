import Footer from "../components/Footer";
import LeftNav from "./../components/LeftNav";
import TopNavbar from "./../components/TopNavbar";
import MainContent from "./../components/content/MainContent";

const Layout = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <TopNavbar />

      <div className="flex flex-1">
        <LeftNav />

        <div className="flex-1 p-4">
        <MainContent />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
