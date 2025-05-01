import React, { useReducer, useState } from 'react';
import './App.css';

const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value
  };
};

function App() {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [formData2, setFormData2] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
    }, 5000);
  };

  const handleChange = event => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  };

  const handleChange2 = event => {
    setFormData2({
      name: event.target.name,
      value: event.target.value,
    });
  };

  return (
    <div className="estilo">
      <h1>Registrar Datos del Estudiante</h1>
      {submitting &&
        <div>
          Gracias por tu registro:
          <ul>
            {Object.entries(formData).map(([name, value]) => (
              <li key={name}><strong>{name.charAt(0).toUpperCase() + name.slice(1)}</strong>: {value.toString()}</li>
            ))}
          </ul>
          <ul>
            {Object.entries(formData2).map(([name, value]) => (
              <li key={name}><strong>{name.charAt(0).toUpperCase() + name.slice(1)}</strong>: {value.toString()}</li>
            ))}
          </ul>
        </div>
      }
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>Nombres</p>
            <input name="nombre" onChange={handleChange} />
          </label>
          <label>
            <p>Apellidos</p>
            <input name="apellido" onChange={handleChange2} />
          </label>
          <label>
            <p>Fecha</p>
            <input type="date" name="fecha" onChange={handleChange} />
          </label>
          <label>
            <p>Dirección</p>
            <input name="direccion" onChange={handleChange} />
          </label>
          <label>
            <p>Teléfono</p>
            <input type="tel" name="telefono" onChange={handleChange} />
          </label>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
      <img src="https://previews.123rf.com/images/tartila/tartila2204/tartila220400064/184371891-estudiantes-con-libros-dibujos-animados-j%C3%B3venes-leen-libros-y-estudian-concepto-de-autoeducaci%C3%B3n.jpg" alt="estudiantes" />
    </div>
  );
}

export default App;
