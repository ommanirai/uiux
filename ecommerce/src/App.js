import logo from './logo.svg';
import './App.css';
import { MyRoute } from './MyRoute';
import { combineReducers, createStore } from 'redux';
import countReducer from './reducer/countReducer';
import { Provider } from 'react-redux';
import { gameReducer } from './reducer/GameReducer';
import itemReducer from './reducer/itemReducer';
import cartReducer from './reducer/cartReducer';

function App() {
  const combinedReducer = combineReducers({
    // count: countReducer,
    // game: gameReducer
    item:itemReducer,
    cart:cartReducer
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
