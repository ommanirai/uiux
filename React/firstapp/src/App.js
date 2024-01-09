import logo from './logo.svg';
import './App.css';
import { Demo, WelcomeToReact } from './demo';
import { Navbar } from './component/Common/Navbar/Navbar.component';
import { Login } from './component/Auth/Login/Login.component';
// import {demo} from './demo'

function App() {
  return (
    <>
    {/* interpolation */}
      {/* <Navbar isLoggedIn={false} /> */}
      <Navbar isLoggedIn={false} />
      {/* <Demo></Demo>
      <WelcomeToReact /> */}
    <Login/>
    </>
  );
}

export default App;
