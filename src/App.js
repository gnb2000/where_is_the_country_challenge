import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Detail from './Pages/Detail';
import Main from './Pages/Main';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/detail' element={<Detail/>}/>
      </Routes>
    </Router>
  );
}

export default App;
