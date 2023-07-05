import { CSSProperties } from 'react';
import './App.css';
import Todo from './todo/views/Todo';


function App() {

  const todoContainer: CSSProperties = {
    minHeight: "70vh"
  };

  return (
    <div className="App App-header">
      <Todo></Todo>
    </div>
  );
}

export default App;
