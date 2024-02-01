// Importação do componente react fazendo destructor
import React, { Component } from 'react';

// Criação do component
// criando com class (nome) extends (component)
export default class Main extends Component {
  // Criar estado Component, Primeira Formula
  // Geralemnte os componentes possuem propriedades
  constructor(props) {
    // Chamando o constructor do component
    super(props);

    // Estado do componente
    this.state = {
      // Tudo que for alterado aqui, ira refletir em algo do componente
      newDate: '',
      newClient: '',
      newServiceOrder: '',
      newEquipament: '',
      newTeam: '',
      newDriver: '',
      newState: '',
      tarefas: [],
    };

    /*
      metodo 2
tira o constructor, passa somente state. ex:
  class Main {
    state = {novaTarefa: '',}

    // arrow function
    metodoState(e) => {
      this.setState({
      novaTarefa: e.target.value,
    });
    }
  }
    */

    // bind
    this.metodoState = this.metodoState.bind(this);
  }

  componentDidMount() {
    const tarefas = JSON.parse(localStorage.getItem('tarefas'));

    if (!tarefas) return;

    this.setState({ tarefas });
  }

  componentDidUpdate(prevProps, prevState) {
    const { tarefas } = this.state;

    if (tarefas === prevState.tarefas) return;

    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }

  // preveni o envio ao clica no button submmit
  handleSubmit = (e) => {
    e.preventDefault(); // prevenir o envio
    const { tarefas, index } = this.state; 
    let { newDate } = this.state;
    let { newClient } = this.state; 
    let { newServiceOrder } = this.state; 
    let { newEquipament } = this.state; 
    let { newTeam } = this.state; 
    let { newDriver } = this.state; 
    let { newState } = this.state; 
    
    // SE em Tarefas ja existe a Tarefa digitada, não faça nada
    if (tarefas.indexOf(newDate) !== -1 && tarefas.indexOf(newClient) !== -1 &&
    tarefas.indexOf(newServiceOrder) !== -1 &&tarefas.indexOf(newEquipament) !== -1 &&
    tarefas.indexOf(newTeam) !== -1 && tarefas.indexOf(newDriver) !== -1 && 
    tarefas.indexOf(newState) !== -1)  return;

    // Cria uma nova constante, passando tarefas em um array
    const newTable = [...tarefas];
    const newList = `${newDate} | ${newClient} | ${newServiceOrder} | ${newEquipament} | ${newTeam} | ${newDriver} | ${newState}`
    if (index === -1) {
      // mexe com o estado de Tarefas
      this.setState({
        // Pega toda tarefa antiga e as novas digitadas não repetidas
        tarefas: [...newTable, newList],
        
      })
    } else {
      newTable[index] = newDate;
      newTable[index] = newClient;
      newTable[index] = newServiceOrder;
      newTable[index] = newEquipament;
      newTable[index] = newTeam;
      newTable[index] = newDriver;
      newTable[index] = newState;

      this.setState({
        tarefas: [...newTable],
        index: -1,
      })
    }
  };

  // Novo estado
  metodoDate = (e) => {
    // Para muda o estado usa "setState"
    this.setState({
      //  novatarefa recebe o evento alvo, e pega o valor
      // novaTarefa   :      e.  target.        value
      newDate: e.target.value,
    });
  }

  metodoClient = (e) => { this.setState({newClient: e.target.value, })}
  metodoServiceOrder = (e) => { this.setState({newServiceOrder: e.target.value, })}
  metodoEquipament = (e) => { this.setState({newEquipament: e.target.value, })}
  metodoTeam = (e) => { this.setState({newTeam: e.target.value, })}
  metodoDriver = (e) => { this.setState({newDriver: e.target.value, })}
  metodoState = (e) => { this.setState({newState: e.target.value, })}

 
  // Apagando item da lista
  handleDelet = (e, index) => {
    // passa o evento e o indice

    // passa um estado para Tarefas
    const { tarefas } = this.state;

    // cria uma constate e passa as tarefa pra ela
    const newTable = [...tarefas];

    // Apaga um elemento do indice
    newTable.splice(index, 1); // pega o indice e apaga 1

    // mexe com o estado de tarefas
    this.setState({
      // Pega a nova lista alterada
      tarefas: [...newTable],
    })
  }

  // Obrigatorio o metodo render() para renderiza o conteudo na tela.
  render() {

    // fazendo destructor
    // Pego a chave novaTarefa, passo o estado para ela
    const { newDate, newClient, newServiceOrder, newEquipament, newTeam, newDriver, newState, tarefas } = this.state;
    // Depois chamo ela no html react com {} para chama javascript

    // renderização e criação apos o return
    // para chama o javascript dentro do html react usa {}
    return <>
      <div>
        <main className='main'>
        <section className='main-exit'>
        <h1>SAIDA LISTA</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            className='input-date'
            onChange={this.metodoDate}
            type='text'
            value={newDate}
          />

          <input
            className='input-client'
            onChange={this.metodoClient}
            type='text'
            value={newClient}
          />

          <input
            className='input-service-order'
            onChange={this.metodoServiceOrder}
            type='text'
            value={newServiceOrder}
          />

          <input
            className='input-equipament'
            onChange={this.metodoEquipament}
            type='text'
            value={newEquipament}
          />

          <input
            className='input-team'
            onChange={this.metodoTeam}
            type='text'
            value={newTeam}
          />

          <input
            className='input-driver'
            onChange={this.metodoDriver}
            type='text'
            value={newDriver}
          />
                    <input
            className='input-state'
            onChange={this.metodoState}
            type='text'
            value={newState}
          />
          <button className='btn-submit' type='submit'>Enviar</button>
        </form>

        <ul className='tarefas'>
          {tarefas.map((tarefa, index) => (
            <li className='li' key={tarefa}>
              {tarefa}

              <div>
                <button className='btn-edit' onClick={(e) => this.handleEdit(e, index)}></button>
                <button className='btn-delivery' onClick={(e) => this.handleDelet(e, index)}></button>
              </div>
            </li>
          ))}
        </ul>
        </section>

        <section className='main-arrival'>

        <ul className='tarefas'>
          <h1>CHEGADA LISTA</h1>
        </ul>
        </section>
        </main>
        <aside className='area-filter'>
            <div className='filter-driver'>
              <h3>Filtrar pelo motorista</h3>
              <div className='div-filter-driver'>
              <input className='input-filter-driver' />
              <button className='btn-filter-driver'>Pesquisar</button>
              </div>
              <ul className='ul-list-driver'></ul>
            </div>
            <div className='filter-equipament'>
            <h3>Filtrar pelo equipamento</h3>
              <div className='div-filter-equipament'>
              <input className='input-filter-equipament' />
              <button className='btn-filter-equipament'>Pesquisar</button>
              </div>
              <ul className='ul-list-equipament'></ul>
            </div>
            <div className='list-equipament'>
              <h3>LISTA DOS EQUIPAMENTOS</h3>
            </div>
        </aside>    
      </div>
    </>
  }
}
