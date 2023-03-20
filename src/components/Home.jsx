import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [jadwal, setJadwal] = useState([]);

  useEffect(() => {
    getJadwal();
  }, []);

  const getJadwal = async () => {
    const response = await axios.get("http://localhost:4000/jadwal");
    setJadwal(response.data);
  };

  // const deleteJadwal = async (id) => {
  //   try {
  //     await axios.delete(`http://localhost:4000/jadwal/${id}`);
  //     getJadwal();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <Link to={`add`} className="button is-success">
          Add New
        </Link>
        <Link to={`jadwal`} className="button is-success">
          jadwal
        </Link>
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
            </tr>
          </thead>
          <tbody>
            {jadwal.map((jadwal, index) => (
              <tr key={jadwal.id}>
                <td>{index + 1}</td>
                <td>{jadwal.dosen}</td>
                <td>{jadwal.hari}</td>
                <td>{jadwal.waktu}</td>
                <td>{jadwal.dosen}</td>
                <td>{jadwal.asisten1}</td>
                <td>{jadwal.asisten2}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
