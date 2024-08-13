import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const miembros = [
    { nombre: 'Mateo', apellido: 'Herrera', correo: 'juan.perez@example.com', celular: '123-456-7890' },
    { nombre: 'Edward', apellido: 'Toro', correo: '...', celular: '...' },
    { nombre: 'Samuel', apellido: 'Eliecer', correo: 'salomeatencis@gmail.com', celular: '...' },
    { nombre: 'Johari', apellido: 'Gutierrez', correo: 'joharight6@gmail.com', celular: '...' },
    
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Edit <code>src/App.js</code> and save to reload.</p>
        <p>Hola mundo</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <main>
        <h1>Miembros del proyecto</h1>
        <table>
          <thead>
            <tr>
              <th>Nombres</th>
              <th>Apellidos</th>
              <th>Correo</th>
              <th>Celular</th>
            </tr>
          </thead>
          <tbody>
            {miembros.map((miembro, index) => (
              <tr key={index}>
                <td>{miembro.nombre}</td>
                <td>{miembro.apellido}</td>
                <td>{miembro.correo}</td>
                <td>{miembro.celular}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default App;
