import logo from './logo.svg';
import './App.css';
import Todo from './screens/todo';
import { ContextStore } from './context';

function App() {
  return (
    <div className="App">
      <ContextStore>
        <Todo />
      </ContextStore>
    </div>
  );
}

export default App;
