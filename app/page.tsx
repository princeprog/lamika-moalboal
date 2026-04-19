import Aboutus from "@/components/sections/Aboutus";
import Home from "@/components/sections/Home";
import Menu from "@/components/sections/Menu";
import Location from "@/components/sections/Location";
import Gallery from "@/components/sections/Gallery";
import Footer from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <div>
      <Home/>
      <Menu/>
      <Aboutus/>
      <Gallery/>
      <Location/>
      <Footer/>
    </div>
  );
}
