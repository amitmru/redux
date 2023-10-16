import logo from './logo.svg';
import './App.css';
import Counter from './counatine/Counter/Counter';
import { configureStore } from './Redux/store';
import { Provider } from 'react-redux';

function App() {
  let store = configureStore()
  return (
    <div className="App">
      <header className="App-header">
        <Provider store = {store}>
          <Counter />
        </Provider>
      </header>
    </div>
  );
}

export default App;
