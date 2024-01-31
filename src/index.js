import React from 'react'; // importando react framework
import ReactDOM from 'react-dom/client'; // DOOM
import App from './App'; // Importando elemento APP, função do conteudo

// variavel de criação do reactDOOM, pegando o ID do HTML (root)
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderizando o root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
