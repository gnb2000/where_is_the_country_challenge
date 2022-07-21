import './App.css';
import Detail from './Pages/Detail';
import Main from './Pages/Main';

function App() {

  const country = {
    url:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/800px-Flag_of_Argentina.svg.png?20120912082242',
    name: 'Argentina'
  }

  return (
    <div>
      <Detail {...country}/>
      
      
    </div>
  );
}

export default App;
