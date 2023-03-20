import {BrowserRouter, Routes, Route} from "react-router-dom";
import ListJadwal from "./components/ListJadwal";
import AddJadwal from "./components/AddJadwal";
import EditJadwal from "./components/EditJadwal";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/add" element={<AddJadwal/>}/>
        <Route path="/dashboard" element={<ListJadwal/>}/>
        <Route path="/dashboard/jadwal/edit/:id" element={<EditJadwal/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
