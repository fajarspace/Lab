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
      await axios.patch(`https://labti.up.railway.app/jadwal/${id}`, {
        kelas,
        hari,
        waktu,
        dosen,
        asisten1,
        asisten2
      });
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  const getJadwalById = async () => {
    const response = await axios.get(`https://labti.up.railway.app/jadwal/${id}`);
    setKelas(response.data.kelas);
    setHari(response.data.hari);
    setWaktu(response.data.waktu);
    setDosen(response.data.dosen);
    setAsisten1(response.data.asisten1);
    setAsisten2(response.data.asisten2);
  };

  return (
    <section className="container-fluid">
        <form onSubmit={updateJadwal}>
          <div className="grid">
        <main>
        <div className="field">
            <label className="label">Kelas</label>
            <select value={kelas} onChange={(e) => setKelas(e.target.value)}>
              <option value="">Pilih Kelas</option>
              <option value="TI.20.A.1">TI.20.A.1</option>
              <option value="TI.20.A.2">TI.20.A.2</option>
              <option value="TI.20.A.3">TI.20.A.3</option>
              <option value="TI.20.B.1">TI.20.B.1</option>
              <option value="TI.20.B.2">TI.20.B.2</option>
              <option value="TI.20.C.1">TI.20.C.1</option>
              <option value="TI.20.D.1">TI.20.D.1</option>
              <option value="TI.20.D.2">TI.20.D.2</option>
              <option value="TI.20.D.3">TI.20.D.3</option>
              <option value="TI.20.D.4">TI.20.D.4</option>
              <option value="TI.20.E.1">TI.20.E.1</option>
              <option value="TI.20.F.1">TI.20.F.1</option>
            </select>
          </div>
          <div className="field">
            <label className="label">Hari</label>
            <div className="control">
            <select value={hari} onChange={(e) => setHari(e.target.value)}>
            <option value="">Pilih Hari</option>
              <option value="Senin">Senin</option>
              <option value="Selasa">Selasa</option>
              <option value="Rabu">Rabu</option>
              <option value="Kamis">Kamis</option>
              <option value="Jumat">Jumat</option>
              <option value="Sabtu">Sabtu</option>
              <option value="Minggu">Minggu</option>

            </select>
            </div>
          </div>
          <div className="field">
            <label className="label">Waktu</label>
            <div className="control">
              <div className="select is-fullwidth">
              <select value={waktu} onChange={(e) => setWaktu(e.target.value)}>
              <option value="">Pilih Waktu</option>
                <option value="07:30 - 09:30">07:30 - 09:30</option>
                <option value="09:30 - 11:30">09:30 - 11:30</option>
                <option value="13:00 - 15:00">13:00 - 15:00</option>
                <option value="15:30 - 17:30">15:30 - 17:30</option>
                <option value="18:30 - 20:00">18:30 - 20:00</option>
                <option value="20:00 - 22:00">20:00 - 22:00</option>

              </select>
              </div>
            </div>
          </div>
          </main>
          <main>
          <div className="field">
            <label className="label">Dosen</label>
            <div className="control">
            <select value={dosen} onChange={(e) => setDosen(e.target.value)}>
              <option value="">Pilih dosen</option>
              <option value="Wahyu Hadikristanto, S.Kom., M.Kom.">Wahyu Hadikristanto, S.Kom., M.Kom.</option>
              <option value="Muhammad Fatchan, S.Kom., M.Kom.">Muhammad Fatchan, S.Kom., M.Kom.</option>
              <option value="Suherman, S.Kom., M.Kom.">Suherman, S.Kom., M.Kom.</option>
              <option value="Eko Budiarto, S.Kom., M.Kom.">Eko Budiarto, S.Kom., M.Kom.</option>
              <option value="Agung Nugroho, S.Kom., M.Kom.">Agung Nugroho, S.Kom., M.Kom.</option>
              <option value="M. Najamuddin Dwi Miharja, S.Kom., M.Kom.">M. Najamuddin Dwi Miharja, S.Kom., M.Kom.</option>
              <option value="Donny Maulana, S.Kom., M.M.Si.">Donny Maulana, S.Kom., M.M.Si.</option>
              <option value="Aswan S. Sunge, S.E., M.Kom.">Aswan S. Sunge, S.E., M.Kom.</option>
              <option value="DR Ananto">DR Ananto</option>

            </select>
            </div>
          </div>
          <div className="field">
            <label className="label">Asisten Lab</label>
            <div className="control">
            <select value={asisten1} onChange={(e) => setAsisten1(e.target.value)}>
            <option value="">Pilih Asisten 1</option>
              <option value="Veno">Veno</option>
              <option value="Fajar Agung">Fajar Agung</option>
              <option value="Maulana Hasan">Maulana Hasan</option>
              <option value="M. Romdhon">M. Romdhon</option>
              <option value="Sultan Aditya">Sultan Aditya</option>

            </select>
            </div>
          </div>
          <div className="field">
            <label className="label">Asisten Lab</label>
            <div className="control">
            <select value={asisten2} onChange={(e) => setAsisten2(e.target.value)}>
            <option value="">Pilih Asisten 2</option>
              <option value="Veno">Veno</option>
              <option value="Fajar Agung">Fajar Agung</option>
              <option value="Maulana Hasan">Maulana Hasan</option>
              <option value="M. Romdhon">M. Romdhon</option>
              <option value="Sultan Aditya">Sultan Aditya</option>

            </select>
            </div>
          </div>
          </main>
          </div>
          <div className="field">
            <button type="submit" className="button is-success">
              Update
            </button>
          </div>
        </form>
    </section>
  );
};

export default EditJadwal;
