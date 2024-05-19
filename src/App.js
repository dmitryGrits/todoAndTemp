import logo from './logo.svg';
import './App.css';
import TemperatureConverter from './components/TemperatureConverter';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <h1>Конвертор температур:</h1>
      <TemperatureConverter />
      <h1>Список дел:</h1>
      <TodoList />
    </div>
  );
}

export default App;
