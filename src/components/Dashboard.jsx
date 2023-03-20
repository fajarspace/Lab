import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const dashboard = () => {
  const [jadwal, setJadwal] = useState([]);

  useEffect(() => {
    getJadwal();
  }, []);

  const getJadwal = async () => {
    const response = await axios.get("https://labti.up.railway.app/jadwal");
    setJadwal(response.data);
  };

  const deleteJadwal = async (id) => {
    try {
      await axios.delete(`https://labti.up.railway.app/jadwal/${id}`);
      getJadwal();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <Navbar/>
        <table className="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>No</th>
              <th>Kelas</th>
              <th>Hari</th>
              <th>Waktu</th>
              <th>Dosen</th>
              <th>Asisten</th>
              <th>Asisten</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {jadwal.map((jadwal, index) => (
              <tr key={jadwal.id}>
                <td>{index + 1}</td>
                <td>{jadwal.kelas}</td>
                <td>{jadwal.hari}</td>
                <td>{jadwal.waktu}</td>
                <td>{jadwal.dosen}</td>
                <td>{jadwal.asisten1}</td>
                <td>{jadwal.asisten2}</td>
                <td>
                  <Link
                    to={`jadwal/edit/${jadwal.id}`}
                    className="button is-small is-info mr-2"
                  >
                    <kbd style={{"backgroundColor":'yellow', "color":"black"}}>Edit</kbd>
                  </Link>
                  <br />
                  <Link
                    onClick={() => deleteJadwal(jadwal.id)}
                  >
                    <kbd style={{"backgroundColor":'red'}}>Hapus</kbd>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default dashboard;
