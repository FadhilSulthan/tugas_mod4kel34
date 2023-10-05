import React, { useState, useEffect } from "react";
import "./index.css";
import reactLogo from "../../assets/react.svg";

function App() {
  const [anggotakelompok] = useState([
    "Aldo Serena Safiola",
    "Muhammad Noor Ibrahim ",
    "Rizal Firdaus ",
    "Muhammad Fadhil Sulthan ",
  ]);

  const [search, setSearch] = useState("");
  const [filteredanggotakelompok, setFilteredanggotakelompok] = useState([]);

  useEffect(() => {
    const filtered = anggotakelompok.filter((member) =>
      member.toLowerCase().includes(search.toLowerCase())
    );

    setFilteredanggotakelompok(filtered);
  }, [search, anggotakelompok]);

  return (
    <div className="Main">
      <h1
        style={{
          borderRadius: "30px",
          fontSize: "40px",
          color: "white",
        }}
      >
        Kelompok 34 - Tugas Genap Modul 4
      </h1>
      <div>
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>

      <div class="input-group">
        <input
          placeholder="Mari Dicari"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <h2></h2>

      <div>
        {filteredanggotakelompok.length === 0 ? (
          <div>Tidak cocok</div>
        ) : (
          filteredanggotakelompok.map((member) => (
            <div key={member}>{member}</div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
