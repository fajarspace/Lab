import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddJadwal = () => {
  const [kelas, setKelas] = useState("");
  const [hari, setHari] = useState("");
  const [waktu, setWaktu] = useState("");
  const [dosen, setDosen] = useState("");
  const [asisten1, setAsisten1] = useState("");
  const [asisten2, setAsisten2] = useState("");
  
  const navigate = useNavigate();

  const saveJadwal = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/jadwal", {
        kelas,
        hari,
        waktu,
        dosen,
        asisten1,
        asisten2
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={saveJadwal}>
          <div className="field">
            <label className="label">Kelas</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={kelas}
                onChange={(e) => setKelas(e.target.value)}
                placeholder="kelas"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Hari</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={hari}
                onChange={(e) => setHari(e.target.value)}
                placeholder="Hari"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Waktu</label>
            <div className="control">
              <div className="select is-fullwidth">
                {/* <select
                  value={waktu}
                  onChange={(e) => setWaktu(e.target.value)}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select> */}
                <input
                type="text"
                className="input"
                value={waktu}
                onChange={(e) => setWaktu(e.target.value)}
                placeholder="Waktu"
              />
              </div>
            </div>
          </div>
          
          <div className="field">
            <label className="label">Dosen</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={dosen}
                onChange={(e) => setDosen(e.target.value)}
                placeholder="Dosen"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Asisten Lab</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={asisten1}
                onChange={(e) => setAsisten1(e.target.value)}
                placeholder="Asisten 1"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Asisten Lab</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={asisten2}
                onChange={(e) => setAsisten2(e.target.value)}
                placeholder="Asisten 2"
              />
            </div>
          </div>
          <div className="field">
            <button type="submit" className="button is-success">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddJadwal;
