import Footer from '../components/Footer';
import LeftNav from './../components/LeftNav';
import TopNavbar from './../components/TopNavbar';
import MainContent from './../components/content/MainContent';

const Layout = () => {
    return (
        <div className="flex h-screen bg-gray-100">
      {/* Left Side Navigation */}
      <LeftNav />

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navbar */}
        <TopNavbar />

        {/* Main Content */}
        <MainContent />

        {/* Bottom Footer */}
        <Footer />
      </div>
    </div>
    );
};

export default Layout;