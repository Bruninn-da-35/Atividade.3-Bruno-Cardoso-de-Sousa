/* A maioria das alterações dos commits serão comentadas para facilitar a compreensão do que foi alterado */

import React, { useState } from 'react';
import './App.css';

function App() {

  /*Configurando o botão de apagar tudo*/ 
  const resetarEstudos = () => {
    setEstudos({
      'Segunda-feira': { manha: '', tarde: '', noite: '' },
      'Terça-feira': { manha: '', tarde: '', noite: '' },
      'Quarta-feira': { manha: '', tarde: '', noite: '' },
      'Quinta-feira': { manha: '', tarde: '', noite: '' },
      'Sexta-feira': { manha: '', tarde: '', noite: '' },
      'Sábado': { manha: '', tarde: '', noite: '' },
      'Domingo': { manha: '', tarde: '', noite: '' },
    });
  };
  

  const diasDaSemana = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado', 'Domingo'];

  const [estudos, setEstudos] = useState({
    'Segunda-feira': { manha: '', tarde: '', noite: '' },
    'Terça-feira': { manha: '', tarde: '', noite: '' },
    'Quarta-feira': { manha: '', tarde: '', noite: '' },
    'Quinta-feira': { manha: '', tarde: '', noite: '' },
    'Sexta-feira': { manha: '', tarde: '', noite: '' },
    'Sábado': { manha: '', tarde: '', noite: '' },
    'Domingo': { manha: '', tarde: '', noite: '' },
  });


  const [atividade, setAtividade] = useState('');
  const [diaSelecionado, setDiaSelecionado] = useState('Segunda-feira');
  const [periodoSelecionado, setPeriodoSelecionado] = useState('manha');

  const adicionarAtividade = () => {
    if (!atividade) return;

    setEstudos((prevEstudos) => ({
      ...prevEstudos,
      [diaSelecionado]: {
        ...prevEstudos[diaSelecionado],
        [periodoSelecionado]: atividade,
      },
    }));


    // Limpar os campos após adicionar
    setAtividade('');
  };


  return (
    <div className="app-container">
      <h1>Gerenciador de Estudos 2024</h1>

      <div className="input-container">
        <label>Dia:</label>
        <select value={diaSelecionado} onChange={(e) => setDiaSelecionado(e.target.value)}>
          {diasDaSemana.map(dia => (
            <option key={dia} value={dia}>{dia}</option>
          ))}
        </select>


        <label>Período:</label>
        <select value={periodoSelecionado} onChange={(e) => setPeriodoSelecionado(e.target.value)}>
          <option value="manha">Manhã</option>
          <option value="tarde">Tarde</option>
          <option value="noite">Noite</option>
        </select>


        <label>O que estudar:</label>
        <input
          type="text"
          value={atividade}
          onChange={(e) => setAtividade(e.target.value)}
          placeholder="EX: Português"
        />
        <button onClick={adicionarAtividade}>Adicionar Estudo</button>
        <button className="reset-button" onClick={resetarEstudos}>APAGAR Todos os Estudos</button>
      </div>
      

      {diasDaSemana.map(dia => (
       

        <div key={dia} className="dia-container">
          <hr></hr>
          <h2>{dia}</h2>
        

          <div className="periodo-container">
            <strong>Manhã:</strong> {estudos[dia].manha}
          </div>
          <div className="periodo-container">
            <strong>Tarde:</strong> {estudos[dia].tarde}
          </div>
          <div className="periodo-container">
            <strong>Noite:</strong> {estudos[dia].noite}
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;

alert ('Bem vindos ao gerenciador de Estudos com REACT!')