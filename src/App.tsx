import { CSSProperties } from 'react';
import './App.css';
import Todo from './todo/views/Todo';
import { Provider } from 'react-redux';
import { store } from './reducers/Store';

function App() {

  const todoContainer: CSSProperties = {
    minHeight: "70vh"
  };

  return (
    <div className="App App-header">
      
      <Provider store={store}>
        <Todo></Todo>
      </Provider>
    </div>
  );
}

export default App;
