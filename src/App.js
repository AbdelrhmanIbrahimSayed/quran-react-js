import logo from './logo.svg';
import './App.css';
import Master from './layout/Master';
import { Outlet } from 'react-router-dom';

function App() {
  return (

    <Master>

      <Outlet />
    </Master>

  );
}

export default App;
