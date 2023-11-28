import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ContactScreen from './screens/ContactScreen';

function App() {
  return (
    <Router>
    <div >

      <Routes>
        <Route path='/' element={<HomeScreen/>}/>
        <Route path='/contact' element={<ContactScreen/>}/>
        
      </Routes>
     
     
    </div>
    </Router>
  );
}

export default App;
