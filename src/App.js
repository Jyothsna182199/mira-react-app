import './App.css';
import Dashboard from './components/Dashboard';
import MasterLayout from './components/MasterLayout';
import theme from './components/Themes';
import { ThemeProvider } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Novi from './components/Novi';
import Atlanta from './components/Atlanta';
import City from './components/City';
import Valley from './components/Valley';
import Heights from './components/Heights';
import HomePageFacilities from './components/HomePageFacilities';
import About from "./components/About";
import VizagFacilities from './components/VizagFacilities';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <MasterLayout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path='/novi' element ={<Novi/>} />
            <Route path='/atlanta' element ={<Atlanta/>} />
            <Route path='/city' element ={<City/>} />
            <Route path='/valley' element ={<Valley/>} />
            <Route path='/heights' element ={<Heights/>} />
            <Route path='/homepage' element ={<HomePageFacilities/>} />
            <Route path="/about" element={<About />} />
            <Route path="/vizagfacilities" element={<VizagFacilities />} />
          </Routes>
        </MasterLayout>
      </Router>
    </ThemeProvider>
  );
}

export default App;