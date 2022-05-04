import React, { useState } from 'react';
import styles from '../styles/Inscripcion.module.css';
import ciudades from '../src/data/regionesyciudades';

const Inscripcion = () => {
  const [comunas, setComunas] = useState([]);
  const [region, setRegion] = useState('');
  const handleFormSubmit = e => {
    e.preventDefault();
    alert('inside the form submit');
  };
  const buscarComuna = e => {
    setRegion(e.target.value);
    setComunas(ciudades[e.target.value]);
  };
  return (
    <div className={styles.container}>
      <form onSubmit={handleFormSubmit} className={styles.inscripcionForm}>
        <div>
          <label>Nombre Completo:</label>
          <input
            type='text'
            name='nombre'
            placeholder='Nombre Completo'
            required
          />
        </div>
        <div>
          <label>Correo Electrónico:</label>
          <input
            type='email'
            name='email'
            placeholder='Correo Electrónico'
            required
          />
        </div>
        <div>
          <label>
            ¿En qué parte del país vives?
            <br />
            <select
              name='region'
              id='region'
              value={region}
              onChange={e => {
                setRegion(e.target.value);
                buscarComuna(e);
              }}
            >
              <option value='0'>Regiones</option>
              <option value='tarapaca'>1 - Tarapaca</option>
              <option value='antofagasta'>2 - Antofagasta</option>
              <option value='atacama'>3 - Atacama</option>
              <option value='coquimbo'>4 - Coquimbo</option>
              <option value='valparaiso'>5 - Valparaiso</option>
              <option value='ohiggins'>6 - O&aposHiggins</option>
              <option value='maule'>7 - Maule</option>
              <option value='bio_bio'>8 - Bio - Bio</option>
              <option value='araucania'>9 - Araucania</option>
              <option value='los_lagos'>10 - Los Lagos</option>
              <option value='aisen'>11 - Aisen</option>
              <option value='magallanes_y_antartica'>
                12 - Magallanes Y Antartica
              </option>
              <option value='metropolitana'>13 - Metropolitana</option>
              <option value='los_rios'>14 - Los Rios</option>
              <option value='arica_y_parinacota'>
                15 - Arica y Parinacota
              </option>
            </select>
            <br />
            {comunas && (
              <select
                name='comuna'
                id='comuna'
                onChange={e => setComuna(e.target.value)}
              >
                <option value='0' defaultValue>
                  Comunas por Region
                </option>
                {comunas.map((comuna, index) => {
                  return (
                    <option
                      key={index}
                      value={comuna.replace(' ', '_').toLowerCase()}
                    >
                      {comuna}
                    </option>
                  );
                })}
              </select>
            )}
          </label>
        </div>

        <div>
          <label>¿Cuál es tu relación con el yoga?</label>
          <textarea name='relacion' />
        </div>
        <div>
          <label>
            ¿Cómo te sientes con respecto a la decisión de qué carrera estudiar?
          </label>
          <textarea name='relacion' />
        </div>

        <button type='submit'>Enviar Inscripción</button>
      </form>
    </div>
  );
};

export default Inscripcion;
