import {BrowserRouter, Routes, Route} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import AddJadwal from "./components/AddJadwal";
import EditJadwal from "./components/EditJadwal";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/dashboard/jadwal/add" element={<AddJadwal/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/dashboard/jadwal/edit/:id" element={<EditJadwal/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
