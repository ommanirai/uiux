import logo from './logo.svg';
import './App.css';
import { MyRoute } from './MyRoute';
import { combineReducers, createStore } from 'redux';
import countReducer from './reducer/countReducer';
import { Provider } from 'react-redux';
import { gameReducer } from './reducer/GameReducer';

function App() {

  const combinedReducer = combineReducers({
    count: countReducer,
    game: gameReducer
  })

  const stores = createStore(combinedReducer)


  return (
    <>
      <Provider store={stores}>
        <MyRoute />
      </Provider>
    </>
  );
}

export default App;
