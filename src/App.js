import './App.css';
//import { Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Banner from './components/Banner';
import Body from './components/Body';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Menu/>
      <Banner/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
