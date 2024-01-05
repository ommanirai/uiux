import logo from './logo.svg';
import './App.css';
import { Demo, WelcomeToReact } from './demo';
import { Navbar } from './component/Common/Navbar/Navbar.component';
// import {demo} from './demo'

function App() {
  return (
    <>
    {/* interpolation */}
      {/* <Navbar isLoggedIn={false} /> */}
      <Navbar isLoggedIn={true} />
      <Demo></Demo>
      <WelcomeToReact />
    </>
  );
}

export default App;
