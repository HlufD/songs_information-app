import { Routes, Route } from "react-router-dom";
import Layout from "./componentes/Layout";
import Songs from "./pages/Songs";
import AddSong from "./pages/AddSong";
import Stastics from "./pages/Stastics";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Songs />} />
          <Route path="songs/addsong" element={<AddSong />} />
          <Route path="songs/stastics" element={<Stastics />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
