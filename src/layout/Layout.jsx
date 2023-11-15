import Footer from "../components/Footer";
import LeftNav from "./../components/LeftNav";
import TopNavbar from "./../components/TopNavbar";
import MainContent from "./../components/content/MainContent";

const Layout = () => {
  return (
    <div className="flex flex-col bg-gray-100">
      <TopNavbar />

      <div className="flex p-4 gap-4">
        <LeftNav />

        <div className="w-full bg-white p-4">
        <MainContent />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
