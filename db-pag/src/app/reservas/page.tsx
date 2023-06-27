'use client';
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const Reservas: React.FC = () => {
  const [nombre, setNombre] = useState("");
  const [rut, setRut] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleNombreChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNombre(e.target.value);
  };

  const handleRutChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRut(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await axios.post("CON_db.php", {
        nombre,
        rut,
        email,
      });

      // Redirigir a la vista de ver horarios
      router.push("./horarios");
    } catch (error) {
      console.error("Error al guardar los datos:", error);
      // Manejo de errores: mostrar un mensaje de error o tomar alguna acción adicional
    }
  };

  return (
    <div>
      <h2>Reservas</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Nombre:
            <input type="text" value={nombre} onChange={handleNombreChange} />
          </label>
        </div>
        <div>
          <label>
            Rut:
            <input type="text" value={rut} onChange={handleRutChange} />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input type="email" value={email} onChange={handleEmailChange} />
          </label>
        </div>
        <button type="submit">Agendar Hora</button>
      </form>
    </div>
  );
};

export default Reservas;
