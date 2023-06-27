'use client';
import React, { useEffect, useState } from "react";
import axios from "axios";

interface Doctor {
  id: number;
  name: string;
  specialty: string;
}

const Horarios: React.FC = () => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [availableSlots, setAvailableSlots] = useState<string[]>([]);

  useEffect(() => {
    // Obtener la lista de doctores desde la base de datos
    const fetchDoctors = async () => {
      try {
        const response = await axios.get("CON_db.php");
        const data = response.data;

        setDoctors(data);
      } catch (error) {
        console.error("Error al obtener la lista de doctores:", error);
      }
    };

    fetchDoctors();
  }, []);

  const handleDoctorSelect = async (doctor: Doctor) => {
    setSelectedDoctor(doctor);

    // Obtener los horarios disponibles para el doctor seleccionado
    try {
      const response = await axios.get(`CON_db.php?doctorId=${doctor.id}`);
      const data = response.data;

      setAvailableSlots(data);
    } catch (error) {
      console.error("Error al obtener los horarios disponibles:", error);
    }
  };

  return (
    <div>
      <h2>Horarios</h2>
      <h3>Buscar doctor</h3>
      <select onChange={(e) => handleDoctorSelect(JSON.parse(e.target.value))}>
        <option value="">Seleccionar doctor...</option>
        {doctors.map((doctor) => (
          <option key={doctor.id} value={JSON.stringify(doctor)}>
            {doctor.name}
          </option>
        ))}
      </select>

      {selectedDoctor && (
        <div>
          <h3>Horarios disponibles para {selectedDoctor.name}</h3>
          {availableSlots.length > 0 ? (
            <ul>
              {availableSlots.map((slot) => (
                <li key={slot}>{slot}</li>
              ))}
            </ul>
          ) : (
            <p>No hay horarios disponibles para {selectedDoctor.name}.</p>
          )}
        </div>
      )}

      <h3>Ver por especialidad</h3>
      {/* Mostrar la lista de especialidades y permitir seleccionar una para ver los doctores correspondientes */}
    </div>
  );
};

export default Horarios;
