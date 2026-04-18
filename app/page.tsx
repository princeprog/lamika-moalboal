import Aboutus from "@/components/sections/Aboutus";
import Home from "@/components/sections/Home";
import Menu from "@/components/sections/Menu";
import Location from "@/components/sections/Location";

export default function HomePage() {
  return (
    <div>
      <Home/>
      <Menu/>
      <Aboutus/>
      <Location/>
    </div>
  );
}
