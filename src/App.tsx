import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./ui/Navbar";
import MoonDes from "./pages/Destinations/MoonDes";
import Crew from "./pages/Crews/Crews";
import Tech from "./pages/Technology/Tech";

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/destination" element={<MoonDes/>}/>
         <Route path="/crew" element={<Crew/>}/>
         <Route path="/technology" element={<Tech/>}/>
      </Routes>
    </>
  );
}

export default App;
