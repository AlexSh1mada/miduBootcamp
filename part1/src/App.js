import './App.css';
import Mensaje from './Mensaje';

function Description() {
  return <p>Announce Vitor Roque</p>
}

function App() {
  return (
    <div className="App">
      <Mensaje color = "blue" message="Estamos trabajando"/>
      <Mensaje color = "red" message="En un curso"/>
      <Mensaje color = "blue" message="De React"/>
      <Description />
    </div>
  );
}

export default App;
