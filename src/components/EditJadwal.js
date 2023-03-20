import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditJadwal = () => {
  const [kelas, setKelas] = useState("");
  const [hari, setHari] = useState("");
  const [waktu, setWaktu] = useState("");
  const [dosen, setDosen] = useState("");
  const [asisten1, setAsisten1] = useState("");
  const [asisten2, setAsisten2] = useState("");
  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    getJadwalById();
  }, []);
  const updateJadwal = async (e) => {
    
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/jadwal/${id}`, {
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

  const getJadwalById = async () => {
    const response = await axios.get(`http://localhost:5000/jadwal/${id}`);
    setKelas(response.data.kelas);
    setHari(response.data.hari);
    setWaktu(response.data.waktu);
    setDosen(response.data.dosen);
    setAsisten1(response.data.asisten1);
    setAsisten2(response.data.asisten2);
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={updateJadwal}>
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
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditJadwal;
