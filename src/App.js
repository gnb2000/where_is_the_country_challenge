import './App.css';
import Card from './Components/Card/Card';
import Filter from './Components/Filter/Filter';
import Header from './Components/Header/Header';
import Search from './Components/Search/Search';

function App() {
  return (
    <div>
      <Header/>
      <div className='container'>
        <div className='row'>
          <div className='d-flex justify-content-start col-md-4'>
            <Search/>
          </div>
          <div className='d-flex justify-content-end col-md-8'>
            <Filter/>
          </div>
        </div>
        <div className='row mt-5'>
          <div className='col-md-4 pb-5'>
            <Card/>
          </div>
          <div className='col-md-4 pb-5'>
            <Card/>
          </div>
          <div className='col-md-4 pb-5'>
            <Card/>
          </div>
          <div className='col-md-4 pb-5'>
            <Card/>
          </div>
          <div className='col-md-4 pb-5'>
            <Card/>
          </div>
          <div className='col-md-4 pb-5'>
            <Card/>
          </div>
          <div className='col-md-4 pb-5'>
            <Card/>
          </div>
          <div className='col-md-4 pb-5'>
            <Card/>
          </div>

        </div>
      </div>
      
      
    </div>
  );
}

export default App;
