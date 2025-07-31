import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./ui/Navbar";
import MoonDes from "./pages/Destinations/MoonDes";

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/destination" element={<MoonDes/>}/>
      </Routes>
    </>
  );
}

export default App;
