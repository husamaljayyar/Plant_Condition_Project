import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/features/Features";
import Dashboard from "../components/dashboard/Dashboard";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Dashboard />
      </main>
      <Footer />
    </div>
  );
};
export default HomePage;
