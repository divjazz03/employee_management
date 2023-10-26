import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css';
import ListEmployee from './components/ListEmployee';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import AddEmployeeComponent from './components/AddEmployeeComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent/>
        <div className='container'>
          <Routes>
              <Route exact path='/' Component={ListEmployee}></Route>
              <Route path='/employees' Component={ListEmployee}></Route>
              <Route path='/add-employee' Component={AddEmployeeComponent}></Route>
              <Route path='/edit-employee/:id' Component={AddEmployeeComponent}></Route>
          </Routes>
        </div>
        <FooterComponent/>
      </Router>

    
    </div>
  );
}

export default App;
