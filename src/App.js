import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Users from './components/Users';
import Students from './components/Students';

function App() {
  return (
    <div className="App">
      <Students/>
      <Routes>
        <Route path='/' element={<Users/>}/>
      </Routes>
    </div>
  );
}

export default App;
