import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./ui/Navbar";

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route index element={<Home/>}/>
      </Routes>
    </>
  );
}

export default App;
