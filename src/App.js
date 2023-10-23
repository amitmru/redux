import Counter from './counatine/Counter/Counter';
import { configureStore } from './Redux/store';
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import UserRouts from './Routes/UserRouts';

function App() {
  let store = configureStore()
  return (
    <div className="App">
      <header className="App-header">
        <Provider store = {store}>
          <Routes>
            <Route path='/*' element={<UserRouts />} />
          </Routes>
        </Provider>
      </header>
    </div>
  );
}

export default App;
