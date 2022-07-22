import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Detail from './Pages/Detail';
import Main from './Pages/Main';

function App() {

  const country = {
    url:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/800px-Flag_of_Argentina.svg.png?20120912082242',
    name: 'Argentina'
  }
  /*      <Detail {...country}/>
*/

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
